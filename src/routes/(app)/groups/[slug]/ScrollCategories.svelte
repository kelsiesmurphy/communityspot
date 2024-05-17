<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import CategoryTab from './CategoryTab.svelte';

	import { cn } from '$lib/utils';
	import { page } from '$app/stores';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	let className: string | undefined | null = undefined;
	
	const categories = [
		{
			name: "Events",
			slug: `groups/${$page.params.slug}`,
			route_id: "/(app)/groups/[slug]"
		},
		{
			name: "Members",
			slug: `groups/${$page.params.slug}/members`,
			route_id: "/(app)/groups/[slug]/members"
		},
		{
			name: "About us",
			slug: `groups/${$page.params.slug}/about-us`,
			route_id: "/(app)/groups/[slug]/about-us"
		},
	]

	export { className as class };

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
</script>
	
<ScrollArea type="scroll" orientation="horizontal" class="scroll-smooth overflow-x-auto">
	<div class={cn('flex gap-8 p-4 pr-16 justify-center', className)}>
		{#each categories as category (category.name)}
			{@const isActive = $page.route.id === category.route_id}
			<CategoryTab {category} {isActive} {send} {receive} />
		{/each}
	</div>
	<div class="gradient-right"></div>
</ScrollArea>
