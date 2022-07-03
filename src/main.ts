import App from './App.svelte'

// importanto o app como uma classe
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;