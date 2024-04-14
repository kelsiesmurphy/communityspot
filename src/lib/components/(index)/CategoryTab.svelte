<script lang="ts">
    import { page } from '$app/stores';
	import LucideIcon from '../GenericIcon.svelte';

    export let category

</script>

<a href={`/${category.slug}`} class="text-center p-4  flex flex-col gap-3 items-center py-3 rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
    <LucideIcon class="h-6 w-6" name={category.icon ? category.icon : "menu"} />
    <h2 class="text-xs whitespace-nowrap">{category.name}</h2>
    <div class={`bg-primary w-full rounded-full h-[3px] transition-opacity duration-150 opacity-0 ${$page.params.slug === category.slug && "opacity-100"}`}/>
</a>