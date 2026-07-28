// Mobile navigation toggle
(function () {
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
})();

// Scroll reveal
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { observer.observe(el); });
})();

// Contact form: build a mailto enquiry so the site works without a backend
(function () {
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var subject = 'Project enquiry — ' + (data.get('subject') || 'Rock Bag Filter Units');
    var body =
      'Name: ' + (data.get('name') || '') + '\n' +
      'Company: ' + (data.get('company') || '') + '\n' +
      'Email: ' + (data.get('email') || '') + '\n' +
      'Phone: ' + (data.get('phone') || '') + '\n' +
      'Unit size of interest: ' + (data.get('size') || 'Not sure yet') + '\n\n' +
      (data.get('message') || '');
    window.location.href =
      'mailto:sales@rockbagfilterunits.com' +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  });
})();

// Current year in footer
(function () {
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
