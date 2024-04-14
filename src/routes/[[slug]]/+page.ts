export const load = async ({ parent, params }) => {

	const { supabase } = await parent();

	const { data: groups } = await supabase
		.from('groups')
		.select(
			`*, group_categories!inner(
				id, category_slug, group_id
			)`
		)
		.eq('group_categories.category_slug', params.slug ?? 'professional-networking')
		.eq('isDraft', false)

	const { data: categories } = await supabase.from('categories').select('*').order('name', { ascending: true });

	return {
		slug: params.slug,
		categories,
		groups
	};
};
