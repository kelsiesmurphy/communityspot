<script lang="ts">
	import { Search, Map } from 'lucide-svelte';
	import { Input } from '../ui/input';
	import { Button } from '../ui/button';
	import CitySearch from './CitySearch.svelte';
</script>

<section
	class="container sm:rounded-3xl sm:mt-6 space-y-10 pt-20 pb-32 text-center text-white bg-green-900"
>
	<div class="flex justify-center">
		<div class="max-w-lg space-y-6">
			<h1 class="text-5xl md:text-6xl font-semibold">Find your next community</h1>
			<p class="text-green-200">
				Empowering local communities to have an online presence. Tailor-made online spaces for
				events, news and more from their community.
			</p>
		</div>
	</div>
	<div class="flex gap-2 justify-center flex-wrap">
		<div class="w-[300px] sm:w-full sm:max-w-sm relative">
			<Search class="absolute left-2 top-3 h-4 w-4 text-zinc-500" />
			<Input
				placeholder="Search events"
				class="pl-8 bg-white  placeholder:text-zinc-500 text-zinc-900 font-medium"
			/>
		</div>
		<div class="relative">
			<Map class="absolute left-2 top-3 h-4 w-4 text-zinc-500" />
			<CitySearch />
		</div>
		<Button class="w-[300px] sm:w-fit">Search</Button>
	</div>
</section>
