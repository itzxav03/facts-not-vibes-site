# YouTube channel kit

Everything a first-time visitor sees on the Facts Not Vibes channel page: the banner, the profile picture, and the description (bio). Upload them in **YouTube Studio → Customization → Branding / Basic info**.

| File | What it is | Where it goes |
| --- | --- | --- |
| `banner-signal.png` | Main banner: a heartbeat (health) on the left, a planet in orbit (space) on the right | Branding → Banner image |
| `banner-verdict.png` | Alternate banner: two example "myth → FALSE" cards flanking the title | Branding → Banner image (pick one) |
| `profile-picture.png` | Channel icon: a check mark inside an orbit | Branding → Picture |

Both banners are 2560 × 1440 and under YouTube's 6 MB limit. The title, tagline and badges stay inside the 1546 × 423 safe area, so phones show all of the text. The heartbeat, the planet and the myth cards sit outside it and only appear on desktop and TV.

> The two myths on `banner-verdict.png` ("You only use 10% of your brain", "You can see the Great Wall from the Moon") are both well-established false claims, but they're just examples. Swap them for myths you've actually covered so the banner matches your videos. Edit the `.card` blocks in `source/banner.html`, then re-render.

## Channel description (bio)

Paste this into **Basic info → Description**. It's 901 of the 1,000 allowed characters. The first line is what shows on the channel page before "...more", so it's the hook.

```text
Your feed is full of confident people saying things that aren't true. This channel is the fix.

Facts Not Vibes makes short, sharp explainers about the two things the internet loves to get wrong: your body and the universe.

🧠 HEALTH: nutrition, metabolism, sleep, and exercise, checked against PubMed research and health authorities.
🚀 SPACE: myths and big questions about the cosmos, checked against NASA, ESA, and peer-reviewed journals.

One rule: every claim traces to a major agency or a peer-reviewed study, and the source is right there on screen. No blogs. No news recaps. No un-reviewed preprints. No vibes.

Don't take our word for it. That's the whole point. Pause the video, look up the source, and check us.

Subscribe if you'd rather be right than viral.

⚕️ Health videos are general education, not medical advice. Talk to your doctor about your own health.
📩 contact@factsnotvibes.com
```

## Banner links

Add these under **Basic info → Links**. The first link shows as an overlay on the banner.

1. **Website**: https://factsnotvibes.com
2. **Privacy policy**: https://factsnotvibes.com/privacy.html (optional)

## Making the page work for first-time visitors

In **Customization → Layout**:

- **Channel trailer for people who haven't subscribed**: use your strongest 30 to 60 second video. Open with the myth, then the verdict, then the source on screen. It's the bio in motion.
- **Featured sections**, in this order:
  1. *Popular videos*, so new viewers see proof first.
  2. A **Health** playlist ("Health myths, checked").
  3. A **Space** playlist ("Space myths, checked").
  4. *Shorts*, if you post them.
- **Playlist titles** should follow the banner's voice, for example "Body myths, fact-checked" and "Space myths, fact-checked".

## Re-rendering the art

The PNGs are rendered from the HTML in `source/` with Playwright's Chromium and the Inter font:

```sh
NODE_PATH=$(npm root -g) node youtube/source/render.cjs
```
