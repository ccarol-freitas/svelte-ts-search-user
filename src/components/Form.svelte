<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type IUser from "../interfaces/IUser";
    import { searchRepos, searchUser } from "../service";
    import assembleUser from "../utils/assembleUser";
    import Button from "./Button.svelte";

    let inputValue = "";
    let statusError: null | number = null;

    const dispatch = createEventDispatcher<{
        onChangeUser: IUser | null;
    }>();

    async function onSubmit() {
        const responseUser = await searchUser(inputValue);
        const responseRepos = await searchRepos(inputValue);

        if (responseUser.ok && responseRepos.ok) {
            const userData = await responseUser.json();
            const repoData = await responseRepos.json();

            dispatch("onChangeUser", assembleUser(userData, repoData));
            statusError = null;
        } else {
            statusError = responseUser.status;
            dispatch("onChangeUser", null);
        }
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <input
        type="search"
        placeholder="Busque por um perfil do GitHub"
        class="input-search"
        class:error-input={statusError === 404}
        bind:value={inputValue}
    />

    <div class="container-button">
        <Button>
            Buscar
            <img src="/assets/lupa.svg" alt="Ícon de busca" />
        </Button>
    </div>
</form>

{#if statusError === 404}
    <span class="error">Usuário não encontrado!</span>
{/if}

<style>
    .container-button {
        display: flex;
        align-items: center;
        position: absolute;
        width: 9.625rem;
        right: 0;
        top: 0;
        bottom: 0;
        justify-content: end;
        background: #ffffff;
        border: 1px solid #c14fac;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        border-radius: 8px;
    }

    .input-search {
        padding: 15px 25px;
        width: calc(100% - 8.75rem);
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #c14fac;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .input-search::placeholder {
        font-family: "Montserrat", sans-serif;
        font-style: italic;
        font-weight: 300;
        font-size: 19.5px;
        line-height: 26px;
        color: #6e8cba;
    }

    .error {
        font-family: "Montserrat", sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #ff003e;
    }

    .error-input {
        border: 1px solid #ff003e;
    }
</style>
