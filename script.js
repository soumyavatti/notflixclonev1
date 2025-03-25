// Sample data - in a real app you'd fetch this from an API
const contentData = {
  popular: [
    { id: 1, title: "Stranger Things", image: "assets/posters/stranger-things.jpg" },
    { id: 2, title: "The Witcher", image: "assets/posters/witcher.jpg" },
    { id: 3, title: "Money Heist", image: "assets/posters/money-heist.jpg" },
    { id: 4, title: "The Queen's Gambit", image: "assets/posters/queens-gambit.jpg" },
    { id: 5, title: "Bridgerton", image: "assets/posters/bridgerton.jpg" },
    { id: 6, title: "Dark", image: "assets/posters/dark.jpg" },
  ],
  continueWatching: [
    { id: 7, title: "Ozark", image: "assets/posters/ozark.jpg", progress: 65 },
    { id: 8, title: "The Crown", image: "assets/posters/crown.jpg", progress: 30 },
    { id: 9, title: "Narcos", image: "assets/posters/narcos.jpg", progress: 80 },
  ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Load carousels
  loadCarousel('popular-carousel', contentData.popular);
  loadCarousel('continue-carousel', contentData.continueWatching, true);
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

function loadCarousel(carouselId, items, showProgress = false) {
  const carousel = document.getElementById(carouselId);
  
  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'carousel-item';
    itemElement.style.backgroundImage = `url('${item.image}')`;
    
    if (showProgress && item.progress) {
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.style.width = `${item.progress}%`;
      itemElement.appendChild(progressBar);
    }
    
    itemElement.addEventListener('click', () => {
      alert(`Playing ${item.title}`);
    });
    
    carousel.appendChild(itemElement);
  });
}
