<script lang="ts">
	// Styles and CSS

	import '../app.postcss';

	// Authentication on Client Side
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	
	import Navigation from '$lib/components/Navigation.svelte';
	import { ModeWatcher, mode } from 'mode-watcher';
	import { Toaster } from "$lib/components/ui/sonner";

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<ModeWatcher />
<Toaster theme={$mode} />
<Navigation {session} />
<div class="container mx-auto p-8 space-y-8">
	<slot />
</div>