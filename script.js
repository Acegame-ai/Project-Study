// Join Now Button Interaction
const joinButtons = document.querySelectorAll('.join-btn');

joinButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerText === 'Join Now') {
      button.innerText = 'Joined';
      button.style.backgroundColor = '#4CAF50'; // Change color to green
    } else {
      button.innerText = 'Join Now';
      button.style.backgroundColor = '#2e6cd5'; // Change back to blue
    }
  });
});

// Animate Progress Bars
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 1s ease-in-out';
      bar.style.width = width;
    }, 200);
  });
});
