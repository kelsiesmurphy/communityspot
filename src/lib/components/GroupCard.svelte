<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	import type { Database } from '$lib/supabase/types_db';
	import { goto } from '$app/navigation';
	import AvatarGroup from './AvatarGroup.svelte';
	import { mode } from 'mode-watcher';
	type Group = Database['public']['Tables']['groups']['Row'];

	export let group: Group;
</script>

<button
	on:click={() => goto(`/groups/${group.slug}`)}
	class="flex-1 flex rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
>
<Card.Root class="flex-1 h-full flex flex-col gap-2 text-left shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300 transition-all">
		<Card.Header class="flex items-center">
			<img src={group?.image} alt={`Cover image for ${group.name}`} class={$mode === "dark" ? "invert": ""}/>
		</Card.Header>
		<Card.Content class="flex-1 space-y-2">
			<Card.Title>{group.name}</Card.Title>
			<Card.Description class="line-clamp-2">{group.description}</Card.Description>
		</Card.Content>
		<Card.Footer>
			<AvatarGroup />
		</Card.Footer>
	</Card.Root>
</button>
