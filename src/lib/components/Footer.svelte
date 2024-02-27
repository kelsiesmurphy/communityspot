<script>
	import Wordmark from '$lib/assets/Wordmark.svelte';
	import { Button } from './ui/button';
	import { mode } from 'mode-watcher';

	$: darkmode = $mode === 'dark' ? 'wcb-d' : '';

	const footerItems = [
		{
			title: 'Overview',
			link: '/'
		},
		{
			title: 'About',
			link: '/about'
		},
		{
			title: 'Pricing',
			link: '/pricing'
		},
		{
			title: 'Privacy',
			link: '/privacy'
		}
	];
	const subFooterItems = [
		{
			title: 'Terms',
			link: '/terms'
		},
		{
			title: 'Privacy',
			link: '/privacy'
		},
		{
			title: 'Cookies',
			link: '/cookies'
		}
	];
</script>

<footer class="container space-y-6 p-4 py-12">
	<div class="flex justify-between flex-wrap">
		<div class="space-y-6 text-zinc-600">
			<Button variant="link" href="/"><Wordmark /></Button>
			<ul class="flex">
				{#each [...footerItems.values()] as value}
					<li>
						<Button href={value.link} variant="ghost">{value.title}</Button>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<img
				src="https://api.thegreenwebfoundation.org/greencheckimage/www.communityspot.co.uk?nocache=true"
				alt="This website is hosted Green - checked by thegreenwebfoundation.org"
				class="h-24"
			/>
			<div id="wcb" class={`carbonbadge ${darkmode}`}></div>
			<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
		</div>
	</div>
	<hr />
	<div class="flex flex-wrap-reverse gap-8 justify-between items-center text-zinc-400">
		<p>© 2024 CommunitySpot. All rights reserved.</p>
		<ul class="flex">
			{#each [...subFooterItems.values()] as value}
				<li>
					<Button href={value.link} variant="ghost">{value.title}</Button>
				</li>
			{/each}
		</ul>
	</div>
</footer>
