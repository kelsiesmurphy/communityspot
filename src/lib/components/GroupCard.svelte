<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	import type { Database } from '$lib/supabase/types_db';
	import { goto } from '$app/navigation';
	import type { Session } from '@supabase/supabase-js';

	type Group = Database['public']['Tables']['groups']['Row'];

	export let group: Group;
	export let session: Session | null;
</script>

<button
	on:click={() => goto(session ? `/groups/${group.id}` : '/signin')}
	class="flex-1 flex rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
>
	<Card.Root class="flex-1 h-full flex flex-col gap-2 text-left">
		<Card.Header>
			<Card.Title>{group.name}</Card.Title>
		</Card.Header>
		<Card.Content>
			<Card.Description>{group.description}</Card.Description>
		</Card.Content>
	</Card.Root>
</button>
