# HILLMUNC Website

This is a simple, editable static website for the inaugural HILLMUNC conference.

## Quick edits

### 1. Change conference information
Open `data.js`. The top section contains the conference name, date, location, email, Instagram, and important links.

### 2. Add or remove committees
Edit the `committees` array in `data.js`. Every committee needs:
- `type`
- `name`
- `description`
- `chair`
- `coChair`
- `school`
- `crisis` (`true` or `false`)

### 3. Add board members and photos
Edit the `board` array in `data.js`.

Put each photo inside the `assets` folder and change the person's `image` value, for example:
`image: 'assets/jordan-smith.jpg'`

You can use JPG, PNG, or WebP images.

### 4. Add background guides
The site has a Background Guides button. Change `links.backgroundGuides` in `data.js` to the folder or page you use to host the guides.

### 5. Add registration, payment, and position-paper links
Replace the `#` values in the `links` section of `data.js` with your actual Google Form, payment page, Google Drive, Dropbox, etc.

## Files
- `index.html` — Home
- `committees.html` — Committees
- `schedule.html` — Schedule
- `registration.html` — Registration
- `position-papers.html` — Position papers
- `board.html` — Meet the Board
- `contact.html` — Contact
- `faq.html` — FAQ
- `data.js` — Main editable content
- `styles.css` — Colors, fonts, layout, buttons, cards
- `script.js` — Interactive navigation + dynamic content
- `assets/` — Put images and other visual files here

## Publishing

Because this is a static site, it can be hosted on GitHub Pages, Netlify, Vercel, or another static web host. You do not need a database for the current version.
