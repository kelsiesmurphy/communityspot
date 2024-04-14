<script lang="ts">
    import { page } from '$app/stores';
	import LucideIcon from '../LucideIcon.svelte';

    export let category

</script>

<a href={`/${category.slug}`} class={`text-center flex flex-col gap-3 items-center py-3 transition-colors ${$page.params.slug === category.slug ? "border-b-2 border-primary" : "border-none"}`}>
    <LucideIcon class="h-6 w-6" name={category.icon ? category.icon : "menu"} />
    <h2 class="text-xs whitespace-nowrap">{category.name}</h2>
</a>