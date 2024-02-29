export const load = async ({ parent }: any) => {
	const { supabase } = await parent();

	const { data: events } = await supabase
		.from('events')
		.select('*')

	return {
		events
	};
};