/* Rock Bag Filter Units — site interactions */
(function () {
  "use strict";

  /* ----- footer year ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ----- mobile navigation ----- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- reveal on scroll ----- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----- contact form (mailto handoff — static site, no backend) ----- */
  var form = document.getElementById("quote-form");
  var note = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var size = form.elements.size.value;
      var message = form.elements.message.value.trim();

      if (!name || !email || !message) {
        if (note) note.textContent = "Please fill in your name, email and project details.";
        return;
      }

      var subject = "Quote request — Rock Bag Filter Units" + (size ? " (" + size + ")" : "");
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        (size ? "Unit size of interest: " + size + "\n" : "") +
        "\nProject details:\n" + message;

      window.location.href =
        "mailto:design@rockbagfilterunits.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      if (note) note.textContent = "Opening your email client… If nothing happens, email us directly at design@rockbagfilterunits.com.";
    });
  }
})();
