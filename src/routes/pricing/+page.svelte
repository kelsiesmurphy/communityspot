<script lang="ts">
	import Pricing from '$lib/components/Pricing.svelte';
	import PricingTabs from '$lib/components/PricingTabs.svelte';

	import type { PageData } from '../pricing/$types';

	export let data: PageData;
	let { session, subscription, products } = data;
	$: ({ session } = data);
</script>

<h1 class="h1 font-thin">Subscription Page</h1>

<PricingTabs {products} {subscription} {session} />