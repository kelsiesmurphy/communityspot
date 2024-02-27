import { supabase } from '../subabaseClient';
import type { Database } from '../types_db';

type Group = Database['public']['Tables']['groups']['Row'];

export const getAllGroups = async (): Promise<Group[]> => {
    try {
        const { data: groups, error } = await supabase.from('groups').select('*');
        if (error) {
            throw new Error('Error fetching groups from the database');
        }
        return groups;
    } catch (error: unknown) {
        console.error(error);
        throw error;
    }
};

export const getSpecificGroup = async (id: string): Promise<Group> => {
    try {
        const { data: group, error } = await supabase.from('groups').select('*').eq('column', id).limit(1);
        if (error) {
            throw new Error('Error fetching groups from the database');
        }
        return group[0];
    } catch (error: unknown) {
        console.error(error);
        throw error;
    }
};