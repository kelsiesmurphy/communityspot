<script lang="ts">
	import ModeToggle from './ModeToggle.svelte';
	import { Button } from './ui/button';
	import Wordmark from '$lib/assets/Wordmark.svelte';
	import MobileNavigation from './MobileNavigation.svelte';
	import { Search } from 'lucide-svelte';
	import AvatarDropdown from './AvatarDropdown.svelte';
	import type { PageData } from '../../routes/$types';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';

	export let session: Session | null;
	export let supabase: SupabaseClient;

	const navigationItems = [
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
		<Button variant="ghost" size="icon">
			<Search class="h-4 w-4" />
		</Button>
		<ModeToggle />
		{#if session}
			<AvatarDropdown {session} {supabase} />
		{:else}
			<Button class="hidden sm:flex" href="/signin">Sign In</Button>
		{/if}
		<div class="sm:hidden">
			<MobileNavigation {session} {supabase} {navigationItems} />
		</div>
	</div>
</nav>
