 
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeIn');
          entry.target.classList.remove('hidden');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1  
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  });
 