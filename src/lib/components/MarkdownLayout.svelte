<script>
  export let title;
</script>

<div class="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
  <article class="prose prose-lg max-w-none">
    <slot />
  </article>
</div>

<style>
  :global(.prose) {
    max-width: none;
  }
  
  :global(.prose h1) {
    font-weight: 300;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  :global(.prose h2) {
    font-weight: 300;
    font-size: 1.875rem;
    margin-top: 2.5rem;
  }
  
  :global(.prose p) {
    line-height: 1.8;
  }
</style>