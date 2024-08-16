function scrollCarousel(direction) {
  const container = document.querySelector('.carousel');
  container.scrollBy({
    left: direction * 200,
    behavior: 'smooth'
  });
}
