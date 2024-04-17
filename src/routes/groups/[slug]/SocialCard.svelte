<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";

</script>

<div class="aspect-square w-48 h-48 border p-4 space-y-4 bg-slate-200/40 border-slate-300 rounded-xl">
    <div class="w-10 p-2.5 aspect-square rounded-sm shadow-sm bg-slate-950">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" class="invert" alt="X logo" />
    </div>
    <div>
        <p class="text-slate-600 text-sm">Follow us</p>
        <p class="text-slate-500 text-sm">@lit_lovers_club</p>
    </div>
    <Button class="bg-slate-800 hover:bg-slate-900 text-white" size="sm">Follow</Button>
</div>