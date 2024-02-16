<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import { getStripe } from '$lib/stripe/stripe-client';
	import { postData } from '$lib/utils/helpers';

	export let products: any, subscription: any, session: any;

	const billingIntervals = [
		{ interval: 'month', title: 'Monthly' },
		{ interval: 'year', title: 'Yearly' }
	];
	let selectedBillingInterval = billingIntervals[0];

	function showPriceString(product: any, selectedBillingInterval: any) {
		const price = product?.prices?.find(
			(price: any) => price.interval === selectedBillingInterval.interval
		);
		if (!price) return null;

		const priceString = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: price.currency!,
			minimumFractionDigits: 0
		}).format((price?.unit_amount || 0) / 100);
		return priceString;
	}

	const handleCheckout = async (product: any) => {
		const price = product?.prices?.find(
			(price: any) => price.interval === selectedBillingInterval.interval
		);
		if (!price) return null;

		if (!session) {
			goto('/auth');
		}
		if (subscription) {
			goto('/profile');
		}
		try {
			const { sessionId } = await postData({
				url: '/api/stripe-checkout',
				data: { price }
			});
			const stripe = await getStripe();
			stripe?.redirectToCheckout({ sessionId });
		} catch (error) {
			return alert((error as Error)?.message);
		}
	};
</script>

<Tabs.Root value="month" class="w-[400px]">
	<Tabs.List class="grid w-full grid-cols-2">
		{#each billingIntervals as billingInterval}
			<Tabs.Trigger value={billingInterval.interval}>{billingInterval.title}</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each billingIntervals as billingInterval}
		<Tabs.Content value={billingInterval.interval}>
			{#each products as product}
				<Card.Root>
					<Card.Header>
						<Card.Title>{product.name}</Card.Title>
						<Card.Description>
							{product.description}
						</Card.Description>
					</Card.Header>
					<Card.Content class="flex flex-col space-y-2">
						<span class="font-extrabold white text-3xl mb-2">
							{showPriceString(product, billingInterval)}
							<span class="text-base font-medium text-zinc-600 capitalize">
								/ {billingInterval.interval}</span
							>
						</span>
					</Card.Content>
					<Card.Footer>
						{#if subscription}
							<Button class="btn variant-filled-primary" href="/profile">Manage subscription</Button>
						{:else}
							<Button
								on:click={() => handleCheckout(product)}
								class="btn variant-filled-primary"
								disabled={session ? false : true}
							>
								Subscribe
							</Button>
						{/if}
					</Card.Footer>
				</Card.Root>
			{/each}
		</Tabs.Content>
	{/each}
</Tabs.Root>
