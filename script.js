const ratingButtons = document.querySelectorAll('.rating-option');
const submitButton = document.querySelector('.submit-button');
const thankYouState = document.querySelector('.thank-you-state');
const ratingNumber = document.querySelector('.rating-number');

let selectedRating;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedRating = button.textContent;
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});

submitButton.addEventListener('click', () => {
  if (selectedRating) {
    document.querySelector('.wrapper').classList.add('hidden');
    thankYouState.classList.remove('hidden');
    ratingNumber.textContent = selectedRating;
  }
});