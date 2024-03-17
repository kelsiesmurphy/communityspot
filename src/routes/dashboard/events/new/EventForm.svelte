<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import DateRangePicker from './DateRangePicker.svelte';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="container">
	<Form.Field {form} name="title">
		<Form.Control let:attrs>
			<Form.Label>Title</Form.Label>
			<Input {...attrs} bind:value={$formData.title} />
		</Form.Control>
		<Form.Description>This is the title of your event.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="description">
		<Form.Control let:attrs>
			<Form.Label>Description</Form.Label>
			<Textarea {...attrs} bind:value={$formData.description} />
		</Form.Control>
		<Form.Description>This is the description of your event.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="date_range">
		<Form.Control let:attrs>
			<Form.Label>Start Time</Form.Label>
			<DateRangePicker />
			<!-- <Input type="time" {...attrs} bind:value={$formData.date_range} /> -->
		</Form.Control>
		<Form.Description>This is the date(s) of your event.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="start_time">
		<Form.Control let:attrs>
			<Form.Label>Start Time</Form.Label>
			<Input type="time" {...attrs} bind:value={$formData.start_time} />
		</Form.Control>
		<Form.Description>This is the start time of your event.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="end_time">
		<Form.Control let:attrs>
			<Form.Label>End Time</Form.Label>
			<Input type="time" {...attrs} bind:value={$formData.end_time} />
		</Form.Control>
		<Form.Description>This is the end time of your event.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="image">
		<Form.Control let:attrs>
			<Form.Label>Image</Form.Label>
			<Input type="file" {...attrs} bind:value={$formData.image} />
		</Form.Control>
		<Form.Description>This is an image for your event.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
