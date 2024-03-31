<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let { groups } = data;
</script>

<section class="sm:p-8">
	<ul class="container relative space-y-6">
		{#each groups ?? [] as group}
			<li class="flex justify-center">
				<div class="flex-1 flex max-w-3xl">
					<a href={`/groups/${group.slug}`}>{group.name}</a>
				</div>
			</li>
		{/each}
	</ul>
</section>
