<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	import type { Database } from '$lib/supabase/types_db';
	import { goto } from '$app/navigation';
	import type { Session } from '@supabase/supabase-js';
	import AvatarGroup from './AvatarGroup.svelte';

	type Group = Database['public']['Tables']['groups']['Row'];

	export let group: Group;
</script>

<button
	on:click={() => goto(`/groups/${group.id}`)}
	class="flex-1 flex rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
>
	<Card.Root class="flex-1 h-full flex flex-col gap-2 text-left">
		<Card.Header>
			<Card.Title>{group.name}</Card.Title>
		</Card.Header>
		<Card.Content class="flex-1">
			<Card.Description>{group.description}</Card.Description>
		</Card.Content>
		<Card.Footer>
			<AvatarGroup />
		</Card.Footer>
	</Card.Root>
</button>
