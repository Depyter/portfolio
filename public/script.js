var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
var mobileMenu = document.getElementById('mobile-menu');
var menuIcon = document.getElementById('menu-icon');
var heroOutline = document.getElementById('hero-outline');

function isScreenWidthGreaterThan640() {
  return window.innerWidth >= 640;
}

mobileMenuToggle.addEventListener('click', function () {
  // Toggle visibility using Tailwind classes
  if (!mobileMenu.classList.contains('menu-transition')) {
    menuIcon.src = 'assets/close.svg';
    mobileMenu.classList.remove('menu-transition-closed');
    mobileMenu.classList.add('menu-transition');
  } else {
    menuIcon.src = 'assets/burger.svg';
    mobileMenu.classList.remove('menu-transition');
    mobileMenu.classList.add('menu-transition-closed');
  }
  
});

if (isScreenWidthGreaterThan640()) {
  heroOutline.style.webkitTextStrokeWidth = "3px";
}

// Debounce function
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

var optimizedResize = debounce(function() {

  if (window.innerWidth >= 640) {
    mobileMenu.classList.remove('menu-transition');
    mobileMenu.classList.add('menu-transition-closed');
    menuIcon.src = 'assets/burger.svg';
    heroOutline.style.webkitTextStrokeWidth = "3px";
  } else {
    heroOutline.style.webkitTextStrokeWidth = "1px";
  }
}, 30);

window.addEventListener('resize', optimizedResize);