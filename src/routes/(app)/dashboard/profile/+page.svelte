<script lang="ts">
	import { Separator } from "$lib/components/ui/separator";
	import type { PageData } from "./$types";
	import ProfileForm from "./profile-form.svelte";
	
	export let data: PageData;
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Profile</h3>
		<p class="text-sm text-muted-foreground">This is how others will see you across CommunitySpot.</p>
	</div>
	<Separator />
	<ProfileForm data={data.form} />
</div>