<script lang="ts">
    import type { PageData } from './$types';
	import LeftSide from './LeftSide.svelte';
	import RightSide from './RightSide.svelte';

    export let data: PageData;
</script>


<section class="container py-12 flex-1 flex flex-col gap-6 lg:flex-row lg:relative">
    <div class="lg:max-w-lg">
        <div class="lg:sticky top-12">
            <a href="/" class="text-muted-foreground hover:underline">{'<-'} See more communities</a>
            <LeftSide {data} />
        </div>
    </div>
    <div class="flex-none lg:flex-1 lg:overflow-auto h-[2000px]">
        <RightSide {data}/>
    </div>
</section>