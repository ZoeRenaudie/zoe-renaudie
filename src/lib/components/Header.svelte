<script lang="ts">
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="fixed w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-xl font-light tracking-wide">PORTFOLIO</a>
      
      <button class="md:hidden" on:click={toggleMenu}>
        <span class="block w-6 h-0.5 bg-black mb-1"></span>
        <span class="block w-6 h-0.5 bg-black mb-1"></span>
        <span class="block w-6 h-0.5 bg-black"></span>
      </button>
      
      <ul class="hidden md:flex space-x-8 font-light">
        <li><a href="/about" class="hover:text-gray-600">À PROPOS</a></li>
        <li><a href="/research" class="hover:text-gray-600">RECHERCHES</a></li>
        <li><a href="/publications" class="hover:text-gray-600">PUBLICATIONS</a></li>
        <li><a href="/consulting" class="hover:text-gray-600">CONSULTING</a></li>
      </ul>
    </div>
    
    {#if isMenuOpen}
      <ul class="md:hidden mt-4 space-y-2 pb-4">
        <li><a href="/about" class="block py-2">À PROPOS</a></li>
        <li><a href="/research" class="block py-2">RECHERCHES</a></li>
        <li><a href="/publications" class="block py-2">PUBLICATIONS</a></li>
        <li><a href="/consulting" class="block py-2">CONSULTING</a></li>
      </ul>
    {/if}
  </nav>
</header>