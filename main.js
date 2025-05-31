document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

    const backToTopButton = document.querySelector('.back-to-top');

  // Show the button only after scrolling down 100px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // When button is clicked, scroll to top and hide it
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    backToTopButton.style.display = 'none';
  });

  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }

 const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });

    // Optional: Close menu when a link is clicked (mobile UX)
    document.querySelectorAll('#navLinks a').forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth <= 900){
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', false);
        }
      });
    });