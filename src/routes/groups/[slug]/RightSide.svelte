<script lang="ts">
    import type { PageData } from './$types';

	import Events from "./Events.svelte";
	import GroupMembers from "./Members.svelte";
	import Socials from './Socials.svelte';

    export let data: PageData;
    $: ({ groupMembers, groupSocials } = data);

</script>


<div class="space-y-12">
    <Events {data}/>
    <GroupMembers {groupMembers}/>
    <Socials {groupSocials} />
</div>