  // Toggle Menu for Mobile
  function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    menu.classList.toggle('active');
  }


  function searchFunction() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    } else {
      alert('Por favor, ingresa un término de búsqueda.');
    }
  }