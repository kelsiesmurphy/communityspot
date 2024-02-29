<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { error } from '@sveltejs/kit';

	export let data: PageData;
	let user = data.userdata;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let loading = false;

	const saveSettings = async (full_name: string, billing_address: string) => {
		if (!session) {
			throw error(401, { message: 'Unauthorized' });
		}
		try {
			loading = true;
			const { error: createPostError } = await supabase
				.from('users')
				.update({
					full_name: full_name,
					billing_address: billing_address
				})
				.eq('id', session.user.id)
				.select();
			if (createPostError) throw error;
			toast.success('Your details have been updated!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const form = superForm(data.userdata, {
		validators: zodClient(formSchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				saveSettings(form.data.full_name, form.data.billing_address);
			} else {
				toast.error('Please fix the errors in the form.');
			}
		}
	});

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};

	const { form: formData, enhance } = form;
</script>

{#if user != null}
	<h1 class="text-2xl">Settings</h1>
	<form method="POST" use:enhance>
		<Form.Field {form} name="full_name">
			<Form.Control let:attrs>
				<Form.Label>Full Name</Form.Label>
				<Input required type="full_name" {...attrs} bind:value={$formData.full_name} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="billing_address">
			<Form.Control let:attrs>
				<Form.Label>Billing Address</Form.Label>
				<Input required {...attrs} bind:value={$formData.billing_address} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Save</Form.Button>
		<SuperDebug data={$formData} />
	</form>
	<Button class="btn variant-filled" on:click={handleSignOut}>Sign out</Button>
{:else}
	<div>Error loading user</div>
{/if}
