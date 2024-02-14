<script lang="ts">
	import ModeToggle from './ModeToggle.svelte';

	export let session: any;
</script>

<nav class="p-4 md:px-12">
	<ul class="flex gap-4">
		<li><a href="/">Home</a></li>
		<li><a href={session ? '/profile' : '/auth'}>Profile</a></li>
		<li><a href="/pricing">Pricing</a></li>
		<li><a href="/about">About</a></li>
		<ModeToggle />
	</ul>
</nav>
