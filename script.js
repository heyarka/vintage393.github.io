
// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Read More button functionality
  const readMoreBtn = document.getElementById('readMoreBtn');
  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', function() {
      window.scrollTo({
        top: document.getElementById('news').offsetTop,
        behavior: 'smooth'
      });
    });
  }

  // Add hover effect to article cards
  const articleCards = document.querySelectorAll('.article-card');
  articleCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'all 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
      this.style.transform = 'translateY(0)';
    });
  });

  // Add current year to copyright if desired
  // const currentYear = new Date().getFullYear();
  // document.querySelector('.copyright').textContent = `Copyright © ${currentYear} | All Rights Reserved`;
});
