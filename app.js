'use strict';
const targets = document.querySelectorAll('.grid-item');
if (window.IntersectionObserver) {
  const observercb = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        intersectObserve.unobserve(entry.target);
      }
    });
  };

  const intersectObserve = new IntersectionObserver(observercb);
  targets.forEach(target => intersectObserve.observe(target));
} else {
  targets.forEach(target => target.classList.add('appear'));
}
