<script lang="ts">
    import type IUser from "../interfaces/IUser";
    import TopBar from "./TopBar.svelte";

    export let user: IUser
</script>

<div class="card-user">
    <TopBar />

    <div class="container-user">
        <div class="container-image">
            <a href={user.profile_url} target="_blank" rel="noopener">
                <div
                    class="image-user"
                    style:background-image="url({user.avatar_url})"
                />
            </a>
        </div>

        <div class="details-user">
			{#if user.name}
            <div class="info">
                Nome: <span>{user.name}</span>
            </div>
			{/if}

            <div class="info">
                Usuário: <span>{user.login}</span>
            </div>

            <div class="info">
                Seguidores: <span>{user.followers}</span>
            </div>

            <div class="info">
                Repositórios: <span>{user.public_repos}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .card-user {
		margin-top: 65px;
	}

	.container-user {
		display: flex;
		justify-content: center;
		padding: 28px 0;
		background: rgba(255, 255, 255, 0.5);
		box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
		border-radius: 0px 0px 13px 13px;
	}

	.container-image {
		margin-right: 81px;
	}

	.image-user {
		width: 12.75rem;
		height: 12.75rem;
		border: 4.56px solid #c14fac;
		border-radius: 50%;
		background-size: cover;
	}

	.details-user {
		margin-right: 55px;
		display: flex;
		align-items: start;
		flex-direction: column;
		justify-content: center;
	}

	.details-user > .info {
		font-weight: 600;
		font-size: 20px;
		line-height: 31px;
		color: #395278;
	}

	.details-user > .info > span {
		color: #6781a8;
		font-weight: normal;
	}
</style>