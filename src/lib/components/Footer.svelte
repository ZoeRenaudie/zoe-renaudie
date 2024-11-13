<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-gray-200 mt-20">
  <div class="container mx-auto px-4 py-8">
    <div class="grid md:grid-cols-3 gap-8">
      <div>
        <h3 class="font-light text-lg mb-4">CONTACT</h3>
        <p class="text-gray-600">email@example.com</p>
        <p class="text-gray-600">+33 (0)1 23 45 67 89</p>
      </div>
      
      <div>
        <h3 class="font-light text-lg mb-4">LIENS</h3>
        <ul class="space-y-2">
          <li><a href="https://github.com/yourusername" class="text-gray-600 hover:text-black">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourusername" class="text-gray-600 hover:text-black">LinkedIn</a></li>
          <li><a href="https://twitter.com/yourusername" class="text-gray-600 hover:text-black">Twitter</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="font-light text-lg mb-4">LOCALISATION</h3>
        <p class="text-gray-600">Université / Institution</p>
        <p class="text-gray-600">Ville, Pays</p>
      </div>
    </div>
    
    <div class="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
      <p>© {currentYear} - Tous droits réservés</p>
    </div>
  </div>
</footer>