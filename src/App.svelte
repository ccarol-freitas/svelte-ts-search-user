<script lang="ts">
	import Title from "./components/Title/Title.svelte";

	let inputValue = "Carol"

	function onSubmit(){
		console.log(inputValue)
	}
</script>

<div class="app">
	<header>
		<Title />
	</header>

	<main class="search-user">
		<form on:submit|preventDefault={onSubmit}>
		<input type="search" class="input-search" bind:value={inputValue}>

		<div class="container-button">
			<button type="submit" class="button-search" >
				Buscar
			</button>
		</div>
	</form>
	</main>
</div>

<style>
	.app{		
		max-height: 100vh;	
		display: flex;
		align-items: center;
		flex-direction: column;
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
</style>