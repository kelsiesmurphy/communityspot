<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { toast } from 'svelte-sonner';
    import { writable, get } from 'svelte/store';
	import type { PageData } from '../$types';

    export let data: PageData;
    $: ({ group, session, supabase } = data);

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
        if (data) {
            console.log(data)
            toast.success(`You are signed up to ${group.name}!`);
            isGroupMember.set(true);
        }
    }
</script>

<div class="space-y-6 lg:pt-14">
    <img class="rounded-full border-2 w-36 aspect-square" src="https://static.vecteezy.com/system/resources/thumbnails/007/636/859/small_2x/community-logo-design-free-vector.jpg" alt="group profile"/>
    <h1 class="text-2xl font-semibold">{group.name}</h1>
    <p class="text-secondary-foreground">{group.description}</p>
    <Button on:click={handleJoinGroup} disabled={$isGroupMember} class="w-full sm:w-fit">Join Group</Button>
</div>