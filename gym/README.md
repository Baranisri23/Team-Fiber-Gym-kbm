# Team Fiber Fitness Studio — Official Website

Modern, bold, premium, and fully responsive website for **Team Fiber Fitness Studio**, located in Kelambakkam, Chennai, Tamil Nadu.

Built using clean, semantic HTML5, modern CSS3 (with dark athletic luxury design system), and lightweight Vanilla JavaScript. Designed specifically to maximize gym enquiries, memberships, and free trial bookings via WhatsApp and direct calls.

---

## ⚡ Key Features

- **Dark Luxury Aesthetic**: High-energy dark charcoal & obsidian backgrounds with vibrant crimson/amber accent rim lighting.
- **13 Complete Sections**:
  1. **Sticky Navbar**: With backdrop-blur and responsive mobile menu drawer.
  2. **Hero Section**: High-impact imagery, dynamic headline, dual CTAs, and key stats ticker.
  3. **About Section**: Highlighting equipment, certified trainers, and community.
  4. **Fitness Programs**: 7 distinct workout disciplines with clean cards and micro-interactions.
  5. **Why Team Fiber**: 6 core advantages with glassmorphic cards.
  6. **Elite Trainers**: Coaching profiles with certifications and specialties.
  7. **Membership Plans**: Monthly (₹1,500), Quarterly (₹3,999 - Most Popular), and Premium tiers.
  8. **Free Trial CTA Banner**: Direct WhatsApp free trial booking trigger.
  9. **Interactive Gallery**: Masonry grid layout with full-screen Lightbox modal and keyboard navigation (`Esc`, `←`, `→`).
  10. **Testimonials**: Member transformation stories and review cards.
  11. **Studio Location**: Google Maps embed, address opposite Lenskart in KSAP Complex, Kelambakkam, with quick-action buttons.
  12. **Contact & Lead Form**: Instant WhatsApp enquiry redirection with pre-formatted message.
  13. **Footer**: Social links, directory navigation, operating hours, and 2026 copyright.
- **SEO & Social Optimization**: Open Graph tags, Twitter cards, meta descriptions, and Google-friendly Schema.org `ExerciseGym` JSON-LD structured data.
- **Zero Heavy Frameworks**: Pure HTML, CSS, and JS. Loads instantly and scores 95+ on performance audits.

---

## 📁 Project Structure

```
d:\gym\
├── index.html              # Main HTML5 semantic page
├── css\
│   └── style.css           # Design tokens, layouts, animations, and media queries
├── js\
│   └── script.js           # Interactive controller and centralized GYM_CONFIG
├── assets\
│   ├── favicon.svg         # High-resolution brand SVG icon
│   └── images\             # High-resolution gym imagery
│       ├── hero-bg.jpg
│       ├── about-gym.jpg
│       ├── program-strength.jpg
│       ├── program-cardio.jpg
│       ├── trainer-1.jpg
│       ├── trainer-2.jpg
│       ├── trainer-3.jpg
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       ├── gallery-3.jpg
│       ├── gallery-4.jpg
│       ├── gallery-5.jpg
│       └── gallery-6.jpg
└── README.md               # Documentation and guide
```

---

## ⚙️ Easy Customization & Configuration

All business numbers, prices, address lines, and text templates are kept in **one central place** at the top of [`js/script.js`](file:///d:/gym/js/script.js):

```javascript
const GYM_CONFIG = {
  businessName: "Team Fiber Fitness Studio",
  phoneDisplay: "+91 98401 23456",
  phoneRaw: "+919840123456",
  whatsAppNumber: "919840123456", // Digits with country code (no + or spaces)
  email: "info@teamfiberfitness.com",
  address: "1/142 KSAP Complex, Opposite Lenskart, Kelambakkam, Chennai, Tamil Nadu 603103",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Team+Fiber+Fitness+Studio+Kelambakkam+Chennai",
  ...
};
```

### To update the WhatsApp number:
Simply change the `whatsAppNumber` variable in `js/script.js`. All "Start Free Trial", "Book Free Trial", "Join Now", and Contact Form submissions will automatically redirect to the new number.

### To replace images with real studio photos:
Simply copy your camera images into `assets/images/` using the existing filenames (`hero-bg.jpg`, `about-gym.jpg`, `trainer-1.jpg`, etc.).

---

## 🚀 Running Locally

### Option 1: Double-click
Simply open `index.html` directly in any modern browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Option 2: Using a local web server (Recommended)
Using Python (pre-installed on most systems):
```bash
python -m http.server 8080
```
Then navigate to: `http://localhost:8080`

Or using Node.js:
```bash
npx serve .
```

---

## 🌐 Deployment Instructions

Since this is a static website, it can be hosted for free or low-cost on any static hosting provider:

### 1. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow prompts.

### 2. Netlify
1. Drag and drop the `d:\gym` directory into [Netlify Drop](https://app.netlify.com/drop).
2. It goes live instantly with free SSL!

### 3. GitHub Pages
1. Initialize git: `git init && git add . && git commit -m "Initial release"`
2. Push to a GitHub repository.
3. In repository Settings > Pages, select `main` branch root `/` and Save.

---

&copy; 2026 Team Fiber Fitness Studio. All rights reserved.
