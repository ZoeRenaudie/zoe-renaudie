<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import Footer from './lib/components/Footer.svelte';
  import Home from './routes/Home.svelte';
  import Research from './routes/Research.svelte';
  import CV from './routes/CV.svelte';
  
  let currentRoute = 'home';
  
  function handleRoute() {
    const path = window.location.pathname;
    switch(path) {
      case '/':
        currentRoute = 'home';
        break;
      case '/research':
        currentRoute = 'research';
        break;
      case '/cv':
        currentRoute = 'cv';
        break;
      default:
        currentRoute = 'home';
    }
  }
  
  $: {
    handleRoute();
  }
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  
  <main class="flex-grow">
    {#if currentRoute === 'home'}
      <Home />
    {:else if currentRoute === 'research'}
      <Research />
    {:else if currentRoute === 'cv'}
      <CV />
    {/if}
  </main>
  
  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f9fafb;
  }
</style>