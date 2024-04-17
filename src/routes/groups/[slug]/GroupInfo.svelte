<script lang="ts">
	import GroupMembers from "./GroupMembers.svelte";
    import type { PageData } from './$types';
	import SocialCard from "./SocialCard.svelte";
	import EventCard from "$lib/components/EventCard.svelte";

    export let data: PageData;
    let { group, events, session, groupMembers } = data;

</script>


<div class="space-y-12">
    <div class="flex gap-6 justify-between flex-wrap">
        <SocialCard />
        <SocialCard />
        <SocialCard />
    </div>
    <div class="space-y-4">
        <h2 class="text-xl font-medium">Upcoming Events</h2>
        {#each events ?? [] as event}
            <li class="flex justify-center">
                <div class="flex-1 flex max-w-3xl">
                    <EventCard {session} {event} />
                </div>
            </li>
        {/each}
    </div>
    <GroupMembers {groupMembers}/>
</div>