<script lang="ts">
	import Title from "./components/Title/Title.svelte";
	import TopBar from "./components/TopBar/TopBar.svelte";
	import type IUser from "./interfaces/IUser";

	let user: IUser = {
		login: 'ccarol-freitas',
		name: 'Carol Freitas',
		avatar_url: 'https://github.com/ccarol-freitas.png',
		profile_url: 'https://github.com/ccarol-freitas',
		id: 54582414,
		followers: 5,
		public_repos: 28
	}

	let inputValue = "Carol"

	function onSubmit(){
		console.log(inputValue)
	}
</script>

<div class="app">
	<header>
		<Title />

		<div class="search-user">
			<form on:submit|preventDefault={onSubmit}>
				<input type="search" placeholder="Busque por um perfil do GitHub" class="input-search" bind:value={inputValue}>
	
				<div class="container-button">
					<button type="submit" class="button-search">Buscar</button>
				</div>
			</form>
		</div>
	</header>

	<div class="card-user">
		<TopBar />

		<div class="container-user">
			<div class="container-image">
				<a href={user.profile_url} target="_blank" rel="noopener">
					<div class="image-user" 
						style:background-image="url({user.avatar_url})">
					</div>
				</a>
			</div>

			<div class="details-user">
				<div class="info">
					Nome: <span>{user.name}</span>
				</div>

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

</div>

<style>
	.app{		
		max-height: 100vh;	
	}

	header{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.search-user{
		position: relative;
    	width: 70%;
	}

	.container-button{
		display: flex;
		align-items: center;
		position: absolute;
		width: 9.625rem;
		right: 0;
		top: 0;
		bottom: 0;
		justify-content: end;
		background: #FFFFFF;
		border: 1px solid #C14FAC;
		box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
		border-radius: 8px;
	}

	.input-search {
		padding: 15px 25px;
		width: calc(100% - 8.75rem);
		font-size: 1rem;
		border-radius: 8px;
		border: 1px solid #C14FAC;
		box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
		outline: 0;
 	}
 
  .input-search::placeholder {
		font-family: 'Montserrat', sans-serif;
		font-style: italic;
		font-weight: 300;
		font-size: 19.5px;
		line-height: 26px;
		color: #6e8cba;
  	}

  
  .button-search{
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		background: #C14FAC;
		border-radius: 8px;
		padding: 15px 24px;
    	transition: background-color 0.2s;
		border: none;
		width: 154px;

        font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		line-height: 26px;
		color: #FFFFFF;
	}

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
		border: 4.56px solid #C14FAC;
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