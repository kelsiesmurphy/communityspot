<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let user = data.userdata;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

{#if user != null}
	<div>
		<form method="POST" action="?/updateUser">
			<div class="field">
				<label for="full_name" class="label">Full Name</label>
				<p class="control">
					<input
						id="full_name"
						name="full_name"
						class="input"
						type="text"
						value={user.full_name}
						required
					/>
				</p>
			</div>
			<div class="field">
				<label for="address" class="label">Address</label>
				<p class="control">
					<input
						id="address"
						name="address"
						class="input"
						type="text"
						value={user.billing_address}
						required
					/>
				</p>
			</div>
			<div>
				<Button>Save</Button>
			</div>
		</form>
	</div>

	<Button class="btn variant-filled" on:click={handleSignOut}>Sign out</Button>
{:else}
	<div>Error loading user</div>
{/if}
