<script lang="ts">
	import EventCard from '$lib/components/EventCard.svelte';

	export let events;
	export let session;
</script>

<ul class="flex flex-col gap-6">
	{#each events as event}
		<li class="flex-1 flex">
			<EventCard {session} {event} />
		</li>
	{/each}
</ul>
