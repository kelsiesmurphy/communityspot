<script>
	import { Separator } from '$lib/components/ui/separator';
	import Tabs from './Tabs.svelte';

	export let data;
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Events</h3>
		<p class="text-sm text-muted-foreground">
			Manage your events, and create future events.
		</p>
	</div>
	<Separator />
	<Tabs {data} />
</div>
