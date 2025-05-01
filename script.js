const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// فتح وإغلاق القايمة بالضغط على الهمبرغر
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// إغلاق القايمة لما اليوزر يضغط خارجها
document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});
