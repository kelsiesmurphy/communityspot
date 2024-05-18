<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar";
	import * as Card from "$lib/components/ui/card/index.js";

	export let member
</script>


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