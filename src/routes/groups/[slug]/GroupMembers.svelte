<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let { groupMembers }:any = data;
</script>

<h2>Group Members</h2>

{#each groupMembers as member}
	<p>{member.users.full_name}</p>
{/each}