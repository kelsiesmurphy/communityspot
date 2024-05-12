import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
	const { supabase } = await parent();

	const { data: group } = await supabase
		.from('groups')
		.select('*')
		.eq('slug', params.slug)
		.maybeSingle();

	const { data: groupSocials } = await supabase
		.from('group_socials')
		.select(`*, social_links!inner(*)`)
		.eq('group_id', group.id)

	return {
		group,
		groupSocials
	};
};
