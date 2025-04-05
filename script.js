document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            console.log('Target ID:', targetId);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                console.log('Target element found:', targetElement); 
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.log('Target element not found');
            }
        });
    });
});









let typed = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI - UX Designer",
      "Backend Developer",
      "Frontend Developer"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  });   

  document.getElementById('hamburger').addEventListener('click', function() {
    const navItem = document.getElementById('nav-item');
    navItem.classList.toggle('active');
});