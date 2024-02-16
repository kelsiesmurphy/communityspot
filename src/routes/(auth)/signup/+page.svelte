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

	const handleSignUp = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${location.origin}/signup/callback`
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
			handleSignUp();
		}}
		disabled={loading}>Sign Up</Button
	>
</div>
