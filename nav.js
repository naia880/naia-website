(function () {
  'use strict';

  var header = document.getElementById('site-header');

  /* ---- Solid header on interior pages ---- */
  if (header && header.dataset.solid === 'true') {
    header.classList.add('solid');
  }

  /* ---- Scroll: transparent → white ---- */
  if (header && header.dataset.solid !== 'true') {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }, { passive: true });
  }

  /* ---- Mobile menu ---- */
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileClose = document.getElementById('mobile-close');

  function openMenu()  { mobileMenu.classList.add('open');  document.body.style.overflow = 'hidden'; }
  function closeMenu() { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }

  if (hamburger)  hamburger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  }

  /* ---- Intersection Observer (reveal) ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

})();
