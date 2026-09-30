# ByteSpace 🚀

A modern, high-performance, and responsive online learning & course discovery platform web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed pixel-for-pixel based on modern Figma UI/UX specifications.

---

## 🌟 Key Features

* **🏠 Home / Landing Page:**
  * Immersive hero section with dynamic `BlueGridBackground` and animated branding.
  * Highlighted feature perks, interactive course cards, creator showcase, student testimonials, and call-to-action (CTA).
* **📚 Course Discovery & Catalog (`/courses`):**
  * Live search and dynamic category filter tags.
  * Responsive course grid with pagination.
  * Empty-state fallback illustration when no courses match search query.
  * Skeleton loaders for seamless UX while fetching data.
* **🎥 Interactive Course Details Page (`/courses/[id]`):**
  * High-resolution video presentation preview with custom frosted squircle play button.
  * Interactive 16:9 YouTube video popup modal on play click.
  * Sticky overview sidebar card on desktop (`lg:sticky lg:top-[90px]`) containing lesson outlines, pricing (`$25/lifetime`), full-width enrollment CTA, feature checklists, and creator preview.
  * Tabbed content system (`About`, `Lessons`, `Reviews`) with lime active pills, sneak peek image gallery, and comprehensive curriculum points.
* **👤 Creator Profile Page (`/creators`):**
  * Instructor biography, verification badges, teaching stats, and published course catalogs.
* **🔐 Authentication Suite (`/signin` & `/signup`):**
  * Modern split-screen layout with interactive form fields, show/hide password toggles, and customized branding illustrations.
* **⚡ Global Design System & Components:**
  * Responsive navigation header (`Navbar`) with dynamic blur-on-scroll.
  * Comprehensive footer featuring an expanded newsletter subscription input, social navigation columns, and standardized typography (`#242528`).
  * Custom font stack integration: **Poppins** (Headings & Prices), **Satoshi** (Body, Badges & Buttons), and **Clash Display** (Logo branding).

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
* **Library:** [React 19](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
* **Fonts:** Fontshare (`Satoshi`, `Clash Display`), Google Fonts (`Poppins`)

---

## 📂 Project Structure

```text
ByteSpace/
├── public/                     # Static media, generated previews, & mock JSON data
│   ├── data/                   # Data sources (courses, reviews, lessons, categories, testimonials)
│   ├── course_video_preview.jpg
│   ├── purepearl_avatar.jpg
│   ├── sneak_*.jpg             # Sneak peek gallery thumbnails
│   └── Vector.png              # Brand vector logo
├── src/
│   ├── app/                    # Next.js App Router pages & layouts
│   │   ├── courses/            # Course listing & dynamic details route [id]
│   │   ├── creators/           # Creator profile page
│   │   ├── signin/             # Sign-in authentication route
│   │   ├── signup/             # Sign-up registration route
│   │   ├── layout.tsx          # Root layout with font definitions & head metadata
│   │   ├── globals.css         # Global styles & font-family configurations
│   │   ├── error.tsx           # Global error boundary
│   │   └── not-found.tsx       # Custom 404 page
│   ├── components/             # Reusable modular UI components
│   │   ├── auth/               # Auth form fields, layout, & illustrations
│   │   ├── courses/            # CourseDetails, CourseCard, pagination, & listing views
│   │   ├── creators/           # Creator profile & stats components
│   │   ├── home/               # HeroSection, FeatureSection, CtaSection, etc.
│   │   └── shared/             # Navbar, Footer, BlueGridBackground, Subtitle, etc.
│   └── data/                   # Data helpers & typescript definitions
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.18.0 or higher recommended) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pronoy656/ByteSpace.git
   cd ByteSpace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🧪 Available Scripts

* `npm run dev` - Launches the local development server with Turbopack / Hot Module Replacement.
* `npm run build` - Builds the application for production.
* `npm run start` - Starts the Next.js production server.
* `npm run lint` - Runs ESLint to check for code quality and syntax issues.

---

## 🎨 Design Reference

Designed and engineered according to Figma specifications with strict adherence to typography, spacing scales, responsive breakpoints, and brand aesthetics.

---

## 📄 License

This project is licensed under the MIT License - feel free to use and customize for your own projects.
