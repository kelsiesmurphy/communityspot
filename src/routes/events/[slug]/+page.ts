// import { error } from '@sveltejs/kit';
// import type { PageLoad } from './$types';

// export const load: PageLoad = ({ params }) => {
// 	if (params.slug === 'hello-world') {
// 		return { title: 'Hello world!', content: 'Welcome to our blog. Lorem ipsum dolor sit amet...' };
// 	}
// 	error(404, 'Not found');
// };

export const load = async ({ parent, params }) => {
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
