<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import SidebarNav from './(components)/sidebar-nav.svelte';

	const sidebarNavItems = [
		{
			title: 'Events',
			href: '/dashboard/events'
		},
		{
			title: 'Groups',
			href: '/dashboard/groups'
		},
		{
			title: 'Profile',
			href: '/dashboard/profile'
		},
		{
			title: 'Settings',
			href: '/dashboard/settings'
		},
	];
</script>

<div class="space-y-6">
	<div class="space-y-0.5">
		<h2 class="text-2xl font-bold tracking-tight">Dashboard</h2>
		<p class="text-muted-foreground">Manage your details.</p>
	</div>
	<Separator class="my-6" />
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
		<aside class="-mx-4 lg:w-1/5">
			<SidebarNav items={sidebarNavItems} />
		</aside>
		<div class="flex-1 lg:max-w-2xl">
			<slot />
		</div>
	</div>
</div>
