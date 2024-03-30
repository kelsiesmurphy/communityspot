<script lang="ts">
	import EventCard from '../lib/components/EventCard.svelte';
	import type { PageData } from './$types';
	import Hero from '$lib/components/(index)/Hero.svelte';

	export let data: PageData;
	let { session, events } = data;
	$: ({ session } = data);

	console.log(events)
</script>

<svelte:head>
	<title>CommunitySpot</title>
</svelte:head>

<section class="sm:p-8">
	<Hero />
	<ul class="container relative -top-16 space-y-6">
		{#each events ?? [] as event}
			<li class="flex justify-center">
				<div class="flex-1 flex max-w-3xl">
					<EventCard {session} {event} />
				</div>
			</li>
		{/each}
	</ul>
</section>
