<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';

	export let data: PageData;
	let { event } = data;
</script>

<h1>{event.title}</h1>
<p>{event.description}</p>
<img src={event.image} alt={event.image_alt} />
<Button>Register</Button>
