<script lang="ts">
	import GroupCard from '../../lib/components/GroupCard.svelte';
	import type { PageData } from './$types';
	import Hero from '$lib/components/(index)/Hero.svelte';
	import ScrollCategories from '$lib/components/(index)/ScrollCategories.svelte';

	export let data: PageData;
	let { session, groups, categories } = data;
	$: ({ session, groups } = data);
	
</script>

<svelte:head>
	<title>CommunitySpot</title>
</svelte:head>

<section class="container space-y-4 sm:p-8">
	<Hero />
	<ScrollCategories {categories} />
	<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
		{#each groups ?? [] as group}
			<li class="flex">
					<GroupCard {session} {group} />
			</li>
		{/each}
	</ul>
</section>
