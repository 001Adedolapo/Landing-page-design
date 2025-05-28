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

