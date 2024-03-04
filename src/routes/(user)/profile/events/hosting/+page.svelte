<script lang="ts">
	export let data;
	let { supabase, session } = data;
	$: ({ session, supabase } = data);
</script>

<h1>Events I am hosting:</h1>

