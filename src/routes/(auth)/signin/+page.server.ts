import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema';
import { zod } from "sveltekit-superforms/adapters";
import { supabase } from '$lib/supabase/subabaseClient';

const adaptedFormSchema = zod(formSchema);

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(adaptedFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, adaptedFormSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		} else {
			try {
				const { data, error } = await supabase.auth.signInWithPassword({
					email: form.data.email as string,
					password: form.data.password as string
				});
				if (error) throw error;
				console.log(data)
				redirect(302, "/profile")
			} catch (error) {
				if (error instanceof Error) {
					console.error(error.message);
				}
			}
		}

		return {
			form
		};
	}
};
