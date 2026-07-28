// Rock Bag Filter Units — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight the current page in the nav
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (target === here) a.classList.add('active');
  });

  // Scroll-reveal animation
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js-reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Contact form: build a pre-filled mailto so the enquiry works with no backend
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };

      var subject = 'Rock Bag Filter Units enquiry — ' + (get('f-size') || 'general');
      var body = [
        'Name: ' + get('f-name'),
        'Company: ' + get('f-company'),
        'Email: ' + get('f-email'),
        'Phone: ' + get('f-phone'),
        'Unit size of interest: ' + get('f-size'),
        'Application: ' + get('f-application'),
        '',
        'Message:',
        get('f-message')
      ].join('\n');

      window.location.href = 'mailto:design@rockbagfilterunits.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      var status = document.getElementById('form-status');
      if (status) status.classList.add('ok');
    });
  }

  // Current year in the footer
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
});
