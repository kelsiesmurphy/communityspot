<script lang="ts">
	import EventCard from '../lib/components/(index)/EventCard.svelte';
	import type { PageData } from './$types';
	import Hero from '$lib/components/(index)/Hero.svelte';

	export let data: PageData;
	let { session, events } = data;
	$: ({ session } = data);
</script>

<Hero />
<ul class="container relative -top-16">
	{#each events as event}
		<li class="flex justify-center">
			<EventCard {session} {event} />
		</li>
	{/each}
</ul>
