export const load = async ({ parent }) => {
	const { supabase, session } = await parent();

	const userId = session?.user?.id;

	if (!userId) {
		return {
			events: []
		};
	}

	const { data: events, error } = await supabase
		.from('events')
		.select(`*, attendees!inner(
            user_id, event_id
        )`)
		.eq('attendees.user_id', userId)

	if (error) {
		console.error('Error fetching events:', error.message);
		return {
			events: []
		};
	}

	return {
		events
	};
};
