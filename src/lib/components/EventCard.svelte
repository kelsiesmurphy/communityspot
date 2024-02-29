<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button, buttonVariants } from './ui/button';

	import type { Database } from '$lib/supabase/types_db';
	import { goto } from '$app/navigation';

	type Event = Database['public']['Tables']['events']['Row'];

	export let event: Event;
</script>

<!-- <Card.Root class="max-w-sm overflow-hidden">
	<img src={event.image} alt={event.image_alt} />
	<Card.Header>
		<Card.Title>{event.title}</Card.Title>
		<Card.Description>{event.description}</Card.Description>
	</Card.Header>
	<Card.Content class="flex gap-4"></Card.Content>
	<Card.Footer></Card.Footer>
</Card.Root> -->

<!-- <>
	<img src={event.image} alt={event.image_alt} />
	<h2>{event.title}</h2>
	<p>{event.description}</p>
</Button> -->

<button
	on:click={() => goto(`/events/${event.id}`)}
	class="rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
>
	<Card.Root class="max-w-sm overflow-hidden">
		<img src={event.image} alt={event.image_alt} />
		<Card.Header>
			<Card.Title>{event.title}</Card.Title>
			<Card.Description>{event.description}</Card.Description>
		</Card.Header>
		<Card.Content class="flex gap-4"></Card.Content>
		<Card.Footer></Card.Footer>
	</Card.Root>
</button>
