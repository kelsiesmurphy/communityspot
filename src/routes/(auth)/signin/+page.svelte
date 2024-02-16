<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import type { PageData } from './$types';

	export let data: PageData;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	if (session) {
		goto('/profile');
	}

	let email: string;
	let password: string;
	let loading = false;

	const handleSignIn = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (error) throw error;
			alert('Login successfully, visit your home page!');
			goto('/profile');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<h1 class="text-2xl">Sign In</h1>
<form>
	<div>
		<Label for="email">Email</Label>
		<Input type="email" id="email" name="email" bind:value={email} />
	</div>
	<div>
		<Label for="password">Password</Label>
		<Input type="password" id="password" name="password" bind:value={password} />
	</div>
</form>

<div>
	<Button
		on:click={(event) => {
			event.preventDefault();
			handleSignIn();
		}}
		disabled={loading}>Sign in</Button
	>
</div>
<Button variant="ghost" href="/signup">Don't have an account? Sign Up</Button>
