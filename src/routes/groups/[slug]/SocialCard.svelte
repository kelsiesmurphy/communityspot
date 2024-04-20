<script lang="ts">
	// import Button from '$lib/components/ui/button/button.svelte';

	import { ArrowUpRight } from "lucide-svelte";

	export let groupSocial

    const generateStylesForContainer = () => {
        return `border flex justify-between items-center p-4 space-x-4 rounded-xl border-${groupSocial.social_links.border_colour} bg-${groupSocial.social_links.bg_colour} hover:bg-${groupSocial.social_links.bg_colour}_hover`;
    };
</script>


<a
    href={groupSocial.url}
    target="_blank"
    class="border flex justify-between items-center shadow-sm hover:shadow-md p-4 space-x-4 rounded-xl duration-300 transition-shadow"
    style={`border-color: ${groupSocial.social_links.border_colour}; background-color: ${groupSocial.social_links.bg_colour}`}
>
    <div class="space-x-4 flex items-center">
            <img src={groupSocial.social_links.logo} alt={`logo for ${groupSocial.social_links.name}`} />
        <div>
            <p class="text-sm">
                {groupSocial.social_links.action_word} us at @<span class="text-accent-foreground">{groupSocial.title}</span>
            </p>
        </div>
    </div>
    <ArrowUpRight class="h-4 w-4" />
</a>
