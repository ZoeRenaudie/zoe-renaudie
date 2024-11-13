<script lang="ts">
  import { onMount } from 'svelte';
</script>

<div class="min-h-screen flex items-center justify-center pt-16">
  <div class="text-center px-4">
    <h1 class="text-6xl font-light mb-6">VOTRE NOM</h1>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Chercheur en [Votre Domaine] explorant l'intersection entre [domaine 1] et [domaine 2]. 
      Consultant spécialisé dans [expertise principale].
    </p>
    <div class="mt-12">
      <a href="/about" class="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
        EN SAVOIR PLUS
      </a>
    </div>
  </div>
</div>

<section class="container mx-auto px-4 py-20">
  <div class="grid md:grid-cols-2 gap-16">
    <div>
      <h2 class="text-3xl font-light mb-6">RECHERCHES RÉCENTES</h2>
      <p class="text-gray-600 mb-8">
        Découvrez mes derniers travaux de recherche et publications dans le domaine de [votre spécialité].
      </p>
      <a href="/research" class="text-black hover:underline">Explorer →</a>
    </div>
    
    <div>
      <h2 class="text-3xl font-light mb-6">CONSULTING</h2>
      <p class="text-gray-600 mb-8">
        Services de conseil pour les institutions académiques et les entreprises.
      </p>
      <a href="/consulting" class="text-black hover:underline">En savoir plus →</a>
    </div>
  </div>
</section>