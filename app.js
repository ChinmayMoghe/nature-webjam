'use strict';
const targets = document.querySelectorAll('.grid-item');
if (window.IntersectionObserver) {
  const observercb = (entries) => {
    entries.forEach(entry => {
      console.log(entry, entry.intersectionRatio);
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        entry.unobserve();
      }
    });
  }

  const intersectObserve = new IntersectionObserver(observercb);
  targets.forEach(target => intersectObserve.observe(target));
} else {
  targets.forEach(target => target.classList.add('appear'));
}