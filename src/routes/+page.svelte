<script lang="ts">
	import EventCard from './events/EventCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { session, events } = data;
	$: ({ session } = data);
</script>

<h1 class="font-medium">Welcome to CommunitySpot</h1>
<ul>
	{#each events as event}
		<li>
			<EventCard {session} {event} />
		</li>
	{/each}
</ul>
