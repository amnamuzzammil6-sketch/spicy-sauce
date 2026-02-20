# Koffiracha - Premium Neo-Brutalist E-Commerce Landing Page

![Live Demo](https://img.shields.io/badge/Live-Demo-ccff00?style=for-the-badge&logo=vercel&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

> A high-performance, awwwards-style e-commerce landing page built to showcase advanced frontend capabilities, complex scroll physics, and modern UI/UX principles.

**🔗 [Click Here to View Live Demo](https://spicy-sauce.vercel.app)**

---

## The Vision
Koffiracha isn't just a layout; it's an experience. The goal was to break away from generic templates and build a highly interactive, "Neo-Brutalist" design. It features bold typography, sharp borders, and high-contrast colors, combined with buttery-smooth scroll animations that guide the user's eye from the hero section all the way to checkout.

## Key Features & Technical Highlights

* **Advanced Scroll Physics:** Utilized Framer Motion's `useScroll`, `useTransform`, and `useSpring` to create a seamless 3D parallax effect where the product bottle falls and rotates interactively as the user scrolls.
* **Smart Exit-Intent Popup:** Implemented a custom React hook to detect when a user is about to leave the page (mouse movement tracking) or after a 12-second delay on mobile, triggering a high-converting 10% OFF discount modal.
* **Fluid & Staggered Typography:** Built responsive, edge-to-edge typography using CSS `clamp()` and Framer Motion staggered reveals for a cinematic loading experience.
* **Cinematic Noise Texture:** Added a custom SVG noise overlay to give the UI a premium, physical magazine-like texture.
* **Custom Agency Cursor:** Replaced the default cursor with a smooth, trailing dot that follows mouse movements (desktop only) for a tailored, high-end feel.
* **Mobile-First Perfection:** Meticulously optimized z-indexes, spacing, and animations to ensure the complex layout doesn't break on smaller screens. Hover effects dynamically disable on touch devices for a flawless UX.

## Tech Stack

* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons & Components:** React Icons, React Fast Marquee
* **Deployment:** Vercel

## Run Locally

To run this project on your local machine:

```bash
# Clone the repository
git clone [https://github.com/amnamuzzammil6-sketch/spicy-sauce.git](https://github.com/amnamuzzammil6-sketch/spicy-sauce.git)

# Navigate into the directory
cd spicy-sauce

# Install dependencies
npm install

# Start the development server
npm run dev