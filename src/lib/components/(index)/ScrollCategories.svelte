<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import CategoryTab from './CategoryTab.svelte';

	export let categories

</script>

<div class="py-8">
    <ScrollArea orientation="horizontal" class="scroll-smooth overflow-x-auto">
        <div class="flex gap-8 p-4 pr-16">
            {#each categories as category (category.name)}
                <CategoryTab {category} />
            {/each}
        </div>
        <div class="gradient-right"></div>
    </ScrollArea>
</div>
