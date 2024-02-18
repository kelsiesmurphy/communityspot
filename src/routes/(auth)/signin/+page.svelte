<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { FormOptions } from 'formsnap';

	import { superForm } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';

	export let data: PageData;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const superFrm = superForm(data.form, { validators: zod(formSchema) });

	onMount(() => {
		if (session) {
			goto('/profile');
		}
	});

	const options: FormOptions<FormSchema> = {
		onSubmit() {
			console.log('Submitting...');
		},
		onResult({ result }) {
			console.log(result);
			if (result.status === 200) {
				alert('Login successfully, visit your home page!');
				goto('/profile');
			}
			if (result.status === 400) console.error('Error!');
		}
	};
</script>

<h1 class="text-2xl">Sign In</h1>
<Form.Root
	method="POST"
	form={superFrm}
	schema={formSchema}
	let:config
	class="w-2/3 space-y-6"
	controlled
>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label for="email">Email</Form.Label>
			<Form.Input type="email" id="email" name="email" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="password">
		<Form.Item>
			<Form.Label for="password">Password</Form.Label>
			<Form.Input type="password" id="password" name="password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</Form.Root>

<Button variant="ghost" href="/signup">Don't have an account? Sign Up</Button>
