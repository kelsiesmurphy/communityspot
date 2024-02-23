import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';

import { supabase } from '$lib/supabase/subabaseClient';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (form.valid) {
			try {
				const { error } = await supabase.auth.signInWithPassword({
					email: form.data.email as string,
					password: form.data.password as string
				});
				if (error) throw error;
			} catch (error) {
				if (error instanceof Error) {
					console.error(error.message);
				}
			}
		} else {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};

// import type { PageServerLoad, Actions } from './$types';
// import { fail, redirect } from '@sveltejs/kit';
// import { superValidate } from 'sveltekit-superforms/server';
// import { formSchema } from './schema';
// import { zod } from "sveltekit-superforms/adapters";
// import { supabase } from '$lib/supabase/subabaseClient';

// export const load: PageServerLoad = async () => {
// 	return {
// 	  form: await superValidate(zod(formSchema)),
// 	};
//   };

// export const actions: Actions = {
// 	default: async (event) => {
// 		const form = await superValidate(event, zod(formSchema));
// 		if (!form.valid) {
// 			return fail(400, {
// 				form
// 			});
// 		} else {
// 			try {
// 				const { data, error } = await supabase.auth.signInWithPassword({
// 					email: form.data.email as string,
// 					password: form.data.password as string
// 				});
// 				if (error) throw error;
// 				console.log(data)
// 				redirect(302, "/profile")
// 			} catch (error) {
// 				if (error instanceof Error) {
// 					console.error(error.message);
// 				}
// 			}
// 		}

// 		return {
// 			form
// 		};
// 	}
// };
