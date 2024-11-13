<script lang="ts">
  let researchTopics = [
    {
      title: "Thème de recherche 1",
      description: "Description détaillée du premier axe de recherche...",
      keywords: ["Mot-clé 1", "Mot-clé 2", "Mot-clé 3"]
    },
    {
      title: "Thème de recherche 2",
      description: "Description détaillée du deuxième axe de recherche...",
      keywords: ["Mot-clé 4", "Mot-clé 5", "Mot-clé 6"]
    }
  ];
</script>

<div class="container mx-auto py-8 px-4">
  <h1 class="text-3xl font-bold mb-8">Mes Recherches</h1>
  
  <div class="grid gap-8">
    {#each researchTopics as topic}
      <div class="bg-white p-6 rounded shadow">
        <h2 class="text-2xl font-semibold mb-4">{topic.title}</h2>
        <p class="text-gray-700 mb-4">{topic.description}</p>
        <div class="flex flex-wrap gap-2">
          {#each topic.keywords as keyword}
            <span class="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {keyword}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  
  <section class="mt-12">
    <h2 class="text-2xl font-bold mb-6">Projets en cours</h2>
    <div class="prose max-w-none">
      <p>Description détaillée de vos projets de recherche actuels...</p>
    </div>
  </section>
</div>