<script lang="ts">
	import ModeToggle from './ModeToggle.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
	import { Button, buttonVariants } from './ui/button';
	import Wordmark from '$lib/assets/Wordmark.svelte';

	export let session: any;
	export let supabase: any;

	const navigationItems = [
		{
			title: 'About',
			link: '/about'
		},
		{
			title: 'Pricing',
			link: '/pricing'
		}
	];

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<nav class="p-4 md:px-12 flex items-center gap-4 justify-between">
	<Button
		class="transition left-0 bg-primary text-white absolute p-3 m-3 -translate-y-16 focus:translate-y-0"
		href="#main-content"
	>
		Skip Navigation
	</Button>
	<div class="flex items-center gap-4">
		<Button variant="link" href="/"><Wordmark /></Button>
		<ul class="hidden sm:flex">
			{#each [...navigationItems.values()] as value}
				<li>
					<Button href={value.link} variant="ghost">{value.title}</Button>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex items-center gap-4">
		<ModeToggle />
		<Button class="hidden sm:flex" href={session ? '/profile' : '/signin'}
			>{session ? 'Profile' : 'Sign In'}</Button
		>
		<div class="sm:hidden">
			<Sheet.Root>
				<Sheet.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<Menu class="h-[1.2rem] w-[1.2rem]" />
				</Sheet.Trigger>
				<Sheet.Content>
					<Sheet.Header class="space-y-6">
						<Sheet.Title>
							<Button variant="link" href="/"><Wordmark /></Button>
						</Sheet.Title>
						<Sheet.Description class="space-y-2">
							{#each [...navigationItems.values()] as value}
								<Button href={value.link} variant="ghost" class="w-full">{value.title}</Button>
							{/each}
							<Button class="w-full" href={session ? '/profile' : '/signin'}
								>{session ? 'Profile' : 'Sign In'}</Button
							>
							<Button class="w-full" variant="outline" on:click={handleSignOut}>Sign Out</Button>
						</Sheet.Description>
					</Sheet.Header>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</nav>
