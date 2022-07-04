<script lang="ts">
	import Form from "./components/Form.svelte";
	import Title from "./components/Title.svelte";
	import User from "./components/User.svelte";
	import type IUser from "./interfaces/IUser";

	let user: IUser | null = null;

	function setUser(event: CustomEvent<IUser | null>){
		user = event.detail
	}

</script>

<div class="app">
	<header>
		<Title />

		<div class="search-user">
			<Form on:onChangeUser={setUser}/>
		</div>
	</header>

	{#if user}
		<User {user}/>
	{/if}
</div>

<style>
	.app {
		max-height: 100vh;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.search-user {
		position: relative;
		width: 70%;
	}

</style>
