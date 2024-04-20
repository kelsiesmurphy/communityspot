<script lang="ts">
	export let groupMembers;
</script>

<h2 class="text-xl font-medium">Group Members</h2>

{#each groupMembers as member}
	<p>{member.users.full_name}</p>
{/each}