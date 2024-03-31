export const load = async ({ parent }) => {
	const { supabase } = await parent();

	const { data: groups } = await supabase.from('groups').select('*').eq('isDraft', false);

	return {
		groups
	};
};
