<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
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

	const handleSignUp = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${location.origin}/auth/callback`
				}
			});
			if (error) throw error;
			alert('Your email must be verified, go check your email!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form>
	<label>
		<span>Email</span>
		<input name="email" bind:value={email} />
	</label>
	<label>
		<span>Password</span>
		<input type="password" name="password" bind:value={password} />
	</label>
</form>

<div>
	<Button
		on:click={(event) => {
			event.preventDefault();
			handleSignIn();
		}}
		disabled={loading}>Sign in</Button
	>
	<Button
		on:click={(event) => {
			event.preventDefault();
			handleSignUp();
		}}
		disabled={loading}>Sign Up</Button
	>
</div>
