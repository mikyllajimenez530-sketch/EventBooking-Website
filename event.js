const searchInput = document.querySelector('.search-box input');
const filterBtns = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.event-card');

// SEARCH FUNCTION
searchInput.addEventListener('keyup', () => {
  const searchValue = searchInput.value.toLowerCase();

  eventCards.forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = title.includes(searchValue) ? 'block' : 'none';
  });
});

// FILTER FUNCTION
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // remove active class
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.textContent.toLowerCase();

    eventCards.forEach(card => {
      const cardCategory = card.dataset.category;

      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});

const slider = document.getElementById('eventGrid');
const leftArrow = document.querySelector('.slider-arrow.left');
const rightArrow = document.querySelector('.slider-arrow.right');

// UPDATE ARROW VISIBILITY
function updateArrows() {
  const scrollLeft = slider.scrollLeft;
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  // Hide left arrow if at start
  if (scrollLeft <= 0) {
    leftArrow.style.display = 'none';
  } else {
    leftArrow.style.display = 'flex';
  }

  // Hide right arrow if at end
  if (scrollLeft >= maxScrollLeft - 1) {
    rightArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'flex';
  }
}

// SLIDE LEFT
leftArrow.addEventListener('click', () => {
  slider.scrollBy({
    left: -slider.clientWidth,
    behavior: 'smooth'
  });
});

// SLIDE RIGHT
rightArrow.addEventListener('click', () => {
  slider.scrollBy({
    left: slider.clientWidth,
    behavior: 'smooth'
  });
});

// LISTEN TO SCROLL & RESIZE
slider.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);

// INITIAL CHECK
updateArrows();
