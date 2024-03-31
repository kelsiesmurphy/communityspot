<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { toast } from 'svelte-sonner';
    import { writable, get } from 'svelte/store';
    import type { PageData } from './$types';
	import GroupMembers from './GroupMembers.svelte';

    export let data: PageData;
    let { group, session, supabase } = data;

    const isGroupMember = writable(false);

    const checkUserGroupMember = async () => {
        if (session?.user) {
            const { data: group_members, error } = await supabase
                .from('group_members')
                .select('user_id')
                .eq('group_id', group.id)
                .eq('user_id', session.user.id);

            if (error) {
                console.error('Error:', error.message);
                return;
            }

            isGroupMember.set(group_members && group_members.length > 0);
        }
    };

    checkUserGroupMember();

    $: {
        checkUserGroupMember();
    }

    const handleJoinGroup = async () => {
        const { data, error } = await supabase
            .from('group_members')
            .insert([{ group_id: group.id, user_id: session?.user.id }])
            .select();
        if (error) {
            console.log('Error: ' + error);
        }
        toast.success(`You are signed up to ${group.name}!`);
        // After successfully joining, update the store
        isGroupMember.set(true);
    }
</script>

<h1>{group.name}</h1>
<p>{group.description}</p>
<Button on:click={handleJoinGroup} disabled={$isGroupMember}>Join Group</Button>

<GroupMembers {data}/>