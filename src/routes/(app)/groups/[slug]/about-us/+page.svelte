<script lang="ts">
	import SocialCard from "./SocialCard.svelte";

    export let data;
    $: ({ groupSocials } = data);

</script>

<div class="space-y-4">
    <h2 class="text-xl font-medium">Say hello 👋</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {#each groupSocials as groupSocial}
            <SocialCard {groupSocial} />
        {/each}
    </div>
</div>