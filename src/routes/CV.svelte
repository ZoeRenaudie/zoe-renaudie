<script lang="ts">
  let education = [
    {
      degree: "Doctorat en [Domaine]",
      institution: "Université XYZ",
      year: "2018-2022"
    },
    {
      degree: "Master en [Domaine]",
      institution: "Université ABC",
      year: "2016-2018"
    }
  ];
  
  let experience = [
    {
      title: "Chercheur Post-doctoral",
      institution: "Laboratoire XYZ",
      period: "2022-Présent",
      description: "Description des responsabilités et réalisations..."
    }
  ];
</script>

<div class="container mx-auto py-8 px-4">
  <h1 class="text-3xl font-bold mb-8">Curriculum Vitae</h1>
  
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-6">Formation</h2>
    <div class="space-y-4">
      {#each education as edu}
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-semibold">{edu.degree}</h3>
          <p class="text-gray-600">{edu.institution}</p>
          <p class="text-gray-500">{edu.year}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-6">Expérience Professionnelle</h2>
    <div class="space-y-4">
      {#each experience as exp}
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-semibold">{exp.title}</h3>
          <p class="text-gray-600">{exp.institution}</p>
          <p class="text-gray-500">{exp.period}</p>
          <p class="mt-2">{exp.description}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <div class="text-center mt-8">
    <a href="/cv.pdf" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
      Télécharger CV (PDF)
    </a>
  </div>
</div>