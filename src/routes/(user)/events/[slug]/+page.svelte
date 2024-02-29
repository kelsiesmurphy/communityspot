<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let { title, content } = data;
</script>

<h1>{title}</h1>
<p>{content}</p>
