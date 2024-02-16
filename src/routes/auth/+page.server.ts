import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(formSchema)
	};
};

// export const actions: Actions = {
// 	default: async ({ request }) => {
// 		const form = await superValidate(request, formSchema);
// 		if (!form.valid) {
// 			return fail(400, {
// 				form
// 			});
// 		}
// 		return {
// 			form
// 		};
// 	}
// };
