# Gem of Vuosaari — website

A simple, static, three-language (EN/FI/SV) site for direct bookings.
No backend, no database, no tracking — built to run on GitHub Pages for free.

**Working from this folder with Cowork or another AI agent?** Real photos go
in `assets/img/` — see `assets/img/README.md` for exact filenames and which
placeholder each one replaces. Everything else in this README still applies.

## 1. Publish it on GitHub Pages

1. Create a new **public** repository on GitHub (e.g. `gem-of-vuosaari`).
2. Upload everything in this folder to the repo (keep the folder structure as-is).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `root`**.
4. GitHub gives you a URL like `https://ottosusername.github.io/gem-of-vuosaari/`. It's live.
5. Custom domain — use `gemofvuosaari.aptos.fi` (matches your Airbnb/Booking.com listing name, and the site's canonical/hreflang URLs are already set to it):
   - In your aptos.fi DNS settings, add a `CNAME` record: `gemofvuosaari` → `yourgithubusername.github.io`
   - Add a file named exactly `CNAME` (no extension) at the repo root containing one line: `gemofvuosaari.aptos.fi`
   - Repo → Settings → Pages → Custom domain → enter `gemofvuosaari.aptos.fi` → wait for the DNS check → enable "Enforce HTTPS" (GitHub issues the certificate automatically).
   - Redirect the old `vacation.aptos.fi` to the new address (a DNS-level 301/forwarding record if your registrar supports it, otherwise a one-line redirect page) so existing links and bookmarks don't break.
   - Update the "personal website" field on your Airbnb and Booking.com listings, and your Google Business Profile if you have one, to the new URL.

## 2. Smoobu booking widget — done

The real widget (apartment ID `3135646`) is wired up in `assets/js/main.js`. It
loads only when a guest clicks "Show availability & book" (better for speed,
and it avoids needing a cookie-consent banner — see the privacy pages). Smoobu's
widget auto-detects the guest's browser language, so the same snippet covers
all three language pages — nothing to duplicate per language.

If you ever change apartments or add a second unit, get the new snippet from
**Configuration → Booking Engine → Embed in website** in Smoobu, and swap the
`apartmentIframe...` id and the `url`/`target` values in `assets/js/main.js`
(inside the `load-booking-widget` click handler) to match.

## 3. Fill in the placeholders

Search each file for text wrapped like `[this]` or highlighted with a light
yellow background (`<span class="placeholder">`) and replace with the real
details. The important ones:

- **Contact details** — email, phone number, WhatsApp number (`wa.me/358…`) in the header/contact/footer of all three homepages.
- **Business info** — legal business name, Y-tunnus / FO-nummer (Business ID), registered address — required by Finnish law to be visible on the site, currently in the footer and the privacy policy.
- **House rules, terms, cancellation policy** — `policies.html` / `kaytannot.html` / `riktlinjer.html`. This is the content most worth spending real time on; guests do read it.
- **Privacy policy retention periods** — `privacy.html` / `tietosuoja.html` / `integritet.html`, section 5. Have an accountant or lawyer confirm this, since it touches Finnish accommodation-registration obligations, not just GDPR.
- **Photos** — replace the dashed placeholder boxes (`.photo-slot` in the gallery, `.porthole` in the hero) with real `<img>` tags once you have photos. Keep image files under `assets/img/` and compress them (under ~300KB each) so the site stays fast.

## 4. Translation note

The Finnish and Swedish text was drafted to a solid working standard, but
since this is guest- and public-facing (and the privacy/policy pages carry
legal weight), it's worth having a native Finnish and a native
Finland-Swedish speaker read the final copy before you publish — especially
the policy pages.

## 5. Why this setup is GDPR-friendly by default

- No contact form, no database — contact is via `mailto:`, `tel:`, and `wa.me` links, so this site itself never stores personal data.
- No analytics or tracking scripts.
- No live Google Maps embed (avoids another silent cookie source).
- The one third-party component — Smoobu's booking calendar — only loads after a guest actively clicks for it (unless you switch to the "always visible" option above, in which case add a small cookie notice).
- Each language has its own privacy policy explaining exactly this.

This is still a template, not legal advice — the business-info and
retention-period placeholders specifically should go through a professional
before the site goes live.
