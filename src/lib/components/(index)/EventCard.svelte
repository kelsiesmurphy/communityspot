<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	import type { Database } from '$lib/supabase/types_db';
	import { goto } from '$app/navigation';
	import type { Session } from '@supabase/supabase-js';

	type Event = Database['public']['Tables']['events']['Row'];

	export let event: Event;
	export let session: Session | null;
</script>

<button
	on:click={() => goto(session ? `/events/${event.id}` : '/signin')}
	class="flex-1 max-w-3xl rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
>
	<Card.Root>
		<!-- <img src={event.image} alt={event.image_alt} /> -->
		<Card.Header>
			<Card.Title>{event.title}</Card.Title>
			<Card.Description>{event.description}</Card.Description>
		</Card.Header>
		<Card.Content class="flex gap-4">Content</Card.Content>
		<Card.Footer>Footer</Card.Footer>
	</Card.Root>
</button>
