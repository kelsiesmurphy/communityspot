<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar";
	import * as Card from "$lib/components/ui/card/index.js";

	// Can delete when finished with mocking
	function generateRandomArray() {
		const length = Math.floor(Math.random() * 10) + 1; // Random length from 1 to 10
        const array = [];
        for (let i = 0; i < length; i++) {
			array.push(Math.floor(Math.random() * 10) + 1); // Random number from 1 to 10
        }
        return array;
    }
	
	// export let groupMembers;
	const groupMembers = generateRandomArray()

	export let data;
    $: ({ group } = data);
</script>

<svelte:head>
	<title>{group.name} Members | Community Spot</title>
</svelte:head>

<h2 class="text-xl font-medium">Group Members</h2>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
	{#each groupMembers as member}
		<Card.Root class="flex flex-col items-center text-center gap-6 px-4 py-8 rounded-lg">
			<Avatar.Root class="w-24 h-24 text-2xl">
				<Avatar.Image
					src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`}
					alt="@shadcn"
				/>
				<Avatar.Fallback>{member}</Avatar.Fallback>
			</Avatar.Root>
			<div>
				<!-- <p>{member.users.full_name}</p> -->
				<p>John Doe</p>
				<p class="text-sm text-muted-foreground">Member since 2023</p>
			</div>
		</Card.Root>
	{/each}
</div>
