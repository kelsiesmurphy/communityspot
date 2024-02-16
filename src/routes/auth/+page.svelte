<script lang="ts">
	// import { goto } from '$app/navigation';
	// import { Button } from '$lib/components/ui/button';

	import * as Form from '$lib/components/ui/form';
	import type { PageData } from './$types';
	import { formSchema, type FormSchema } from '../../routes/auth/schema';
	export let data: PageData;

	// export let form: SuperValidated<FormSchema>;
	import type { SuperValidated } from 'sveltekit-superforms';

	// export let data;
	// let { supabase, session } = data;
	// $: ({ supabase, session } = data);

	// if (session) {
	// 	goto('/profile');
	// }
	// /**
	//  * @type {string}
	//  */
	// let email;

	// /**
	//  * @type {string}
	//  */
	// let password;

	// let loading = false;

	// const handleSignIn = async () => {
	// 	try {
	// 		loading = true;
	// 		const { error } = await supabase.auth.signInWithPassword({
	// 			email,
	// 			password
	// 		});
	// 		if (error) throw error;
	// 		alert('Login successfully, visit your home page!');
	// 		goto('/profile');
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			alert(error.message);
	// 		}
	// 	} finally {
	// 		loading = false;
	// 	}
	// };

	// const handleSignUp = async () => {
	// 	try {
	// 		loading = true;
	// 		const { error } = await supabase.auth.signUp({
	// 			email,
	// 			password,
	// 			options: {
	// 				emailRedirectTo: `${location.origin}/auth/callback`
	// 			}
	// 		});
	// 		if (error) throw error;
	// 		alert('Your email must be verified, go check your email!');
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			alert(error.message);
	// 		}
	// 	} finally {
	// 		loading = false;
	// 	}
	// };
</script>

<!-- 
<form>
	<label>
		<span>Email</span>
		<input class="input" name="email" bind:value={email} />
	</label>
	<label>
		<span>Password</span>
		<input class="input" type="password" name="password" bind:value={password} />
	</label>
</form>

<div class="btn-group variant-filled">
	<button on:click|preventDefault={handleSignIn} disabled={loading}>Sign in</button>
	<Button
		on:click={(event) => {
			event.preventDefault();
			handleSignUp();
		}}
		disabled={loading}>Sign Up</Button
	>
</div> -->

<Form.Root method="POST" form={data.form} schema={formSchema} let:config debug={true}>
	<Form.Field {config} name="username">
		<Form.Item>
			<Form.Label>Username</Form.Label>
			<Form.Input />
			<Form.Description>This is your public display name.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</Form.Root>
