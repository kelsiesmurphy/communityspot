<script lang="ts">
	import SocialCard from "./SocialCard.svelte";

    export let data;
    $: ({ groupSocials, group } = data);

</script>

<svelte:head>
	<title>About {group.name} | Community Spot</title>
</svelte:head>

<div class="space-y-4">
    <h2 class="text-xl font-medium">Say hello 👋</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {#each groupSocials as groupSocial}
            <SocialCard {groupSocial} />
        {/each}
    </div>
</div>