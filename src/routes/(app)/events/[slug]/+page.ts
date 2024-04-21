import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
	const { supabase } = await parent();

	const { data: event } = await supabase
		.from('events')
		.select('*')
		.eq('id', params.slug)
		.maybeSingle();

	return {
		event
	};
};
