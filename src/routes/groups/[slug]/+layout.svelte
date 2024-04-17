<script lang="ts">
    import { fade } from 'svelte/transition';
    
    export let data
</script>
 
{#key data.pathname}
    <div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }} class="container flex-1 bg-background border-t border-x rounded-t-3xl shadow-lg p-12">
        <slot />
    </div>
{/key}