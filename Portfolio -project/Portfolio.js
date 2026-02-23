   const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        const bottom = top + sec.offsetHeight;
        if (scrollY >= top && scrollY < bottom) current = sec.getAttribute('id');
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
      });
    });