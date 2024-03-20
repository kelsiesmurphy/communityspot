export const load = async ({ parent, params }) => {
	const { supabase, session } = await parent();

	const { data: group } = await supabase
		.from('groups')
		.select('*')
		.eq('id', params.group_id)
		.maybeSingle();

	const userId = session?.user?.id;

	if (!userId) {
		return {
			attendingEvents: [],
			hostingEvents: []
		};
	}

	const { data: attendingEvents, error: attendingError } = await supabase
		.from('events')
		.select(
			`*, attendees!inner(
            user_id, event_id
        )`
		)
		.eq('attendees.user_id', userId)
		.eq('attendees.hosting', 'FALSE');

	const { data: hostingEvents, error: hostingError } = await supabase
		.from('events')
		.select(
			`*, attendees!inner(
            user_id, event_id
        )`
		)
		.eq('attendees.user_id', userId)
		.eq('attendees.hosting', 'TRUE');

	if (attendingError || hostingError) {
		console.error('Error fetching events:', attendingError ? attendingError.message : hostingError);
		return {
			attendingEvents: [],
			hostingEvents: []
		};
	}

	return {
		group,
		attendingEvents,
		hostingEvents
	};
};
