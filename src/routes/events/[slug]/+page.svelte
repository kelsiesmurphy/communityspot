<script lang="ts">
	import EventRegisterDialog from '$lib/components/EventRegisterDialog.svelte';
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';

	export let data: PageData;
	let { event, session, supabase } = data;
</script>

<h1>{event.title}</h1>
<p>{event.description}</p>
<img src={event.image} alt={event.image_alt} />
<EventRegisterDialog {event} {session} {supabase} />
