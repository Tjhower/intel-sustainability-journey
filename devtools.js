document.querySelector('.timeline').scrollLeft = 0;

const progressBar = document.querySelector('.timeline-progress span');

const leftArrow = document.querySelector('.timeline-arrow.left');
const rightArrow = document.querySelector('.timeline-arrow.right');

const scrollAmount = () => timeline.clientWidth * 0.8;

leftArrow?.addEventListener('click', () => {
  timeline.scrollBy({
    left: -scrollAmount(),
    behavior: 'smooth'
  });
});

rightArrow?.addEventListener('click', () => {
  timeline.scrollBy({
    left: scrollAmount(),
    behavior: 'smooth'
  });
});
