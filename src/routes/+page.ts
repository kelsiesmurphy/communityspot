export const load = async ({ parent }) => {
	const { supabase } = await parent();

	const { data: events } = await supabase
		.from('events')
		.select(
			`*, groups!inner(
            isDraft
        )`
		)
		.eq('groups.isDraft', false);

	return {
		events
	};
};
