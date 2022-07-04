<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type IUser from "../interfaces/IUser";

    let inputValue = "";
    let statusError: null | number = null

    const dispatch = createEventDispatcher<{
        onChangeUser: IUser | null
    }>();

    async function onSubmit() {
        const responseUser = await fetch(
            `https://api.github.com/users/${inputValue}`
        );

        if(responseUser.ok){
            const userData = await responseUser.json();

            console.log(userData);
            dispatch("onChangeUser", {
                login: userData.login,
                name: userData.name,
                avatar_url: userData.avatar_url,
                profile_url: userData.profile_url,
                id: userData.id,
                followers: userData.followers,
                public_repos: userData.public_repos,
            });
            statusError = null
        } else {
            statusError = responseUser.status
            dispatch('onChangeUser', null)
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
        <button type="submit" class="button-search">Buscar</button>
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

    .button-search {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        background: #c14fac;
        border-radius: 8px;
        padding: 15px 24px;
        transition: background-color 0.2s;
        border: none;
        width: 154px;

        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #ffffff;
    }

    .error {
        font-family: "Montserrat", sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FF003E;
    }

    .error-input {
        border: 1px solid #FF003E;
    }
</style>
