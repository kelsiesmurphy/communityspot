<script lang="ts">
	import ModeToggle from './ModeToggle.svelte';
	import { Button } from '../ui/button';
	import Wordmark from '$lib/assets/Wordmark.svelte';
	import MobileNavigation from './MobileNavigation.svelte';
	import AvatarDropdown from './AvatarDropdown.svelte';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';

	export let session: Session | null;
	export let supabase: SupabaseClient;

	const navigationItems = [
		{
			title: 'Groups',
			link: '/groups'
		},
		{
			title: 'About Us',
			link: '/about'
		}
	];
</script>

<nav class="p-4 container flex items-center gap-4 justify-between">
	<Button
		class="transition left-0 bg-primary text-white absolute p-3 m-3 -translate-y-16 focus:translate-y-0"
		href="#main-content"
	>
		Skip Navigation
	</Button>
	<div class="flex-1 flex items-center gap-4">
		<Button variant="link" href="/" class="p-0"><Wordmark /></Button>
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
		{#if session}
			<AvatarDropdown {session} {supabase} />
		{:else}
			<Button class="hidden sm:flex" variant="ghost" href="/signin">Log In</Button>
			<Button class="hidden sm:flex" href="/signup">Sign Up</Button>
		{/if}
		<div class="sm:hidden">
			<MobileNavigation {session} {supabase} {navigationItems} />
		</div>
	</div>
</nav>
