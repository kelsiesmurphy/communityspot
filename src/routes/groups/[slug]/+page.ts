import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
	const { supabase } = await parent();

	// const { data: group } = await supabase
	// 	.from('groups')
	// 	.select(`*, group_members!inner(id, user_id, group_id)`)
	// 	.eq('slug', params.slug)
	// 	.eq("group_members.id", group.id)
	// 	.eq('isDraft', false)
	// 	.maybeSingle();

	const { data: group } = await supabase
		.from('groups')
		.select('*')
		.eq('slug', params.slug)
		.maybeSingle();

	const { data: groupMembers } = await supabase
		.from('group_members')
		.select(`*, users!inner(*)`)
		.eq('group_id', group.id)

	return {
		group,
		groupMembers
	};
};
