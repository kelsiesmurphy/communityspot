<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import CategoryTab from './CategoryTab.svelte';
	import * as Carousel from "$lib/components/ui/carousel/index.js";
	import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";

	import { cn } from '$lib/utils';
	import { page } from '$app/stores';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	let className: string | undefined | null = undefined;
	export let categories;
	export { className as class };

	const categoriesSorted = categories.sort((a, b) => (a.name === 'Miscellaneous' ? 1 : b.name === 'Miscellaneous' ? -1 : 0));

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	}); 

	let api: CarouselAPI;
	let count = 0;
	let current = 0;
	
	$: if (api) {
		count = api.scrollSnapList().length;
		current = api.selectedScrollSnap() + 1;
		api.on("select", () => {
		current = api.selectedScrollSnap() + 1;
		});
	}
</script>

<Carousel.Root
	opts={{
		skipSnaps: true,
	}}
	bind:api
	class={`cursor-grab ${current > 1 && "ml-12"} ${current < count && "mr-12"}`}
>
	<Carousel.Content class={cn('flex gap-8 p-4', className)}>
		{#each categoriesSorted as category (category.name)}
			<Carousel.Item class="basis-1/8">
				{@const isActive = ($page.params.slug === category.slug) || (category.name === "All Categories" && $page.params.slug === undefined)}
				<CategoryTab {category} {isActive} {send} {receive} />
			</Carousel.Item>	
		{/each}
	</Carousel.Content>
	<div class="">
		{#if current > 1}
			<Carousel.Previous />
		{/if}
		{#if current < count}
			<Carousel.Next />
		{/if}
	</div>
</Carousel.Root>