<script lang="ts">
	export let data;
	let { supabase, session, events } = data;
	$: ({ session, supabase } = data);
</script>

<h1>Events I am attending:</h1>
<p>{JSON.stringify(events)}</p>
