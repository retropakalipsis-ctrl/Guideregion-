// Open and close the mobile menu
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

menuButton.addEventListener('click', function () {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

// Close the menu after clicking a link
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Change between light and dark themes
const themeButton = document.querySelector('#theme-toggle');
const themeLabel = document.querySelector('#theme-label');
const themeIcon = document.querySelector('.theme-icon');

themeButton.addEventListener('click', function () {
  const isDark = document.body.classList.toggle('dark-theme');
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeLabel.textContent = isDark ? 'Switch to light' : 'Switch to dark';
  themeIcon.textContent = isDark ? '☀' : '☾';
});

// Save a place by clicking the heart button
const saveButtons = document.querySelectorAll('.save-place');
saveButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const saved = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', String(!saved));
    button.textContent = saved ? '♡' : '♥';
  });
});

// Search for places by name or location
const searchInput = document.querySelector('#place-search');
const cards = document.querySelectorAll('.place-card');
const emptyState = document.querySelector('#empty-state');

function searchPlaces() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCards = 0;

  cards.forEach(function (card) {
    const text = (card.dataset.search + ' ' + card.innerText).toLowerCase();
    const matches = text.includes(query);
    card.hidden = !matches;
    if (matches) visibleCards++;
  });

  emptyState.hidden = visibleCards > 0;
}

searchInput.addEventListener('input', searchPlaces);
document.querySelector('.search').addEventListener('submit', function (event) {
  event.preventDefault();
  searchPlaces();
  document.querySelector('#places').scrollIntoView({ behavior: 'smooth' });
});

// Validate the form and download a simple trip checklist
const plannerForm = document.querySelector('#planner-form');
plannerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!plannerForm.checkValidity()) {
    plannerForm.reportValidity();
    return;
  }

  const days = document.querySelector('#duration').value;
  const groupSize = document.querySelector('#group-size').value;
  const email = document.querySelector('#email').value;

  const checklist =
    'GUIDEREGION - EXPEDITION CHECKLIST\n' +
    'Trip duration: ' + days + ' day(s)\n' +
    'Group size: ' + groupSize + '\n' +
    'Email: ' + email + '\n\n' +
    'Before departure:\n' +
    '[ ] Check the weather and local travel advice.\n' +
    '[ ] Tell someone about your route.\n' +
    '[ ] Pack water, food, suitable clothes and a first-aid kit.\n' +
    '[ ] Charge your phone and save emergency contacts.\n' +
    '[ ] Take your rubbish with you.';

  const file = new Blob([checklist], { type: 'text/plain;charset=utf-8' });
  const fileUrl = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'guideregion-checklist.txt';
  link.click();
  URL.revokeObjectURL(fileUrl);

  document.querySelector('#form-feedback').textContent =
    'Checklist downloaded. This demo does not send email or create a PDF.';
});
