# Photos

Real photos are in place. Filenames used across `/en/index.html`, `/fi/index.html`,
and `/sv/index.html`:

| File                        | Used for                              |
|------------------------------|----------------------------------------|
| `hero-balcony.jpg`           | Hero "porthole" photo (`.porthole` div in the hero section) — private balcony/patio |
| `gallery-living-room.jpg`    | Gallery — Living room (tall slot)      |
| `gallery-bedroom.jpg`        | Gallery — Bedroom                      |
| `gallery-kitchen.jpg`        | Gallery — Kitchen                      |
| `gallery-sauna.jpg`          | Gallery — Sauna (tall slot)            |
| `gallery-bathroom.jpg`       | Gallery — Bathroom                     |
| `gallery-exterior.jpg`       | Gallery — Building entrance & garden view |

Note: the apartment has a garden view, not a harbour view — don't use "harbour"
in photo captions/alt text for the exterior or hero shots.

Notes for whoever (or whatever) edits this next:
- Each `.photo-slot` div in the gallery, and the `.porthole` div in the hero,
  has a text label inside it saying which photo goes there — match by label,
  not just by position, in case the order gets shuffled later.
- Same photos should be swapped into `/en/index.html`, `/fi/index.html`, and
  `/sv/index.html` — it's the same apartment, so the same files work in all
  three; just update the `<img src="...">` path in each.
- Keep files under ~300KB each (resize/compress) so the site stays fast —
  1600px on the longest side is plenty for web display.
- Use descriptive `alt` text on every `<img>` (e.g. `alt="Living room with sauna view"`) — it matters for accessibility and image search.
