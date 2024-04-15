<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";

    // Temporary function to make the avatar group look real
    function generateRandomArray() {
        const length = Math.floor(Math.random() * 10) + 1; // Random length from 1 to 10
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(Math.floor(Math.random() * 10) + 1); // Random number from 1 to 10
        }
        return array;
    }

    const avatarGroupLength = 6
    const groupMembers = generateRandomArray()
    const groupMembersFirst6 = groupMembers.slice(0, avatarGroupLength)
</script>

<div class="flex -space-x-2">
    {#each groupMembersFirst6 as member}
        <Avatar.Root class="border-2 border-background">
            <Avatar.Image src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`} alt="@shadcn" />
            <Avatar.Fallback>{member}</Avatar.Fallback>
        </Avatar.Root>
    {/each}
    {#if groupMembers.length > avatarGroupLength}
        <Avatar.Root>
            <Avatar.Fallback>+{groupMembers.length - avatarGroupLength}</Avatar.Fallback>
        </Avatar.Root>  
    {/if}
</div>