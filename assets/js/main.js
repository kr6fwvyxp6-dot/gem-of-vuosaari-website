// Gem of Vuosaari — shared site behaviour
// No analytics, no third-party requests until the guest explicitly asks for
// the booking calendar. Keeps the site cookie-free by default.

document.addEventListener('DOMContentLoaded', function () {

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var answer = item.querySelector('.faq-a');
    if (!btn || !answer) return;
    btn.addEventListener('click', function () {
      var isOpen = item.getAttribute('data-open') === 'true';
      // close any other open items for a tidy single-open accordion
      document.querySelectorAll('.faq-item[data-open="true"]').forEach(function (other) {
        if (other !== item) {
          other.setAttribute('data-open', 'false');
          other.querySelector('.faq-a').style.maxHeight = null;
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        }
      });
      item.setAttribute('data-open', String(!isOpen));
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
    });
  });

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.gap = '14px';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.right = '24px';
      navLinks.style.background = '#0F2029';
      navLinks.style.padding = '18px 20px';
      navLinks.style.border = '1px solid rgba(241,236,222,0.16)';
      navToggle.setAttribute('aria-expanded', String(!open));
    });
  }

  /* ---- Lazy-load the Smoobu booking widget ----
     Privacy-by-design: the Smoobu script (and any cookies it sets) is only
     requested after the guest clicks "Show availability & book". Until then,
     no third-party request is made and no consent banner is needed for it.
     See /en/privacy.html (and the fi/sv equivalents) for the explanation
     shown to guests. Smoobu's widget auto-detects the guest's browser
     language, so the same snippet is used on all three language pages. */
  var loadBtn = document.getElementById('load-booking-widget');
  var mount = document.getElementById('booking-widget-mount');
  if (loadBtn && mount) {
    loadBtn.addEventListener('click', function () {
      mount.hidden = false;
      mount.innerHTML = '<div id="apartmentIframe3135646"></div>';

      var script = document.createElement('script');
      script.src = 'https://login.smoobu.com/js/Settings/BookingToolIframe.js';
      script.onload = function () {
        if (window.BookingToolIframe) {
          window.BookingToolIframe.initialize({
            "url": "https://login.smoobu.com/en/booking-tool/iframe/1617201/3135646",
            "baseUrl": "https://login.smoobu.com",
            "target": "#apartmentIframe3135646"
          });
        }
      };
      document.body.appendChild(script);

      loadBtn.remove();
    });
  }
});
