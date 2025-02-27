  // Función para animar el formulario al cargar la página
  window.addEventListener('load', function() {
    anime({
      targets: '.sign-in-container',
      translateY: ['100%', '0%'],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutQuart'
    });
  });

  // Función para animar los campos de entrada al enfocarlos
  const formInputs = document.querySelectorAll('.form-group input');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      anime({
        targets: this,
        scale: [1, 1.05],
        duration: 300,
        easing: 'easeOutQuart'
      });
    });
    input.addEventListener('blur', function() {
      anime({
        targets: this,
        scale: [1.05, 1],
        duration: 300,
        easing: 'easeOutQuart'
      });
    });
  });

  // Función para animar el botón de Sign In al hacer hover
  const signInButton = document.querySelector('.sign-in-button');
  signInButton.addEventListener('mouseenter', function() {
    anime({
      targets: this,
      scale: [1, 1.1],
      duration: 300,
      easing: 'easeOutQuart'
    });
  });
  signInButton.addEventListener('mouseleave', function() {
    anime({
      targets: this,
      scale: [1.1, 1],
      duration: 300,
      easing: 'easeOutQuart'
    });
  });
