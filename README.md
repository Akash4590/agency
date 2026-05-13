# Agency Landing Page

A modern agency landing page built with **React JS**, **Tailwind CSS**, and **Framer Motion**. The project features smooth animations throughout, dark and light mode support, and a working contact form powered by the Web3Forms API.

---

## Tech Stack

- **React JS** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **Web3Forms** — Contact form via POST API

---

## Project Structure & How It's Built

The project is built step by step using reusable components. Here's the order and what each piece does:

### 1. `Navbar` Component
The navigation bar sits at the top of the page. It includes the agency logo, nav links, a theme toggle button for switching between dark and light mode, and smooth entrance animations using Framer Motion.

### 2. `Title` Component
A reusable title component used across every section of the page. Instead of repeating heading markup, each section passes its own heading text and subtitle as props. This keeps the code clean and consistent throughout.

### 3. `Hero` Component
The first section the visitor sees. It contains the main headline, a short description, and a call-to-action button. Everything animates in with staggered Framer Motion transitions — text slides and fades in sequentially to create a polished entrance effect.

### 4. `Services` Component
Displays the agency's core services as a grid of cards. Each card animates into view as the user scrolls down using Framer Motion's `whileInView`. The `Title` component is reused here for the section heading.

### 5. `Teams` Component
Introduces the team members with their names, roles, and photos laid out in a responsive grid. This section also uses scroll-triggered animations and the shared `Title` component for the heading.

### 6. `Contact` (Form) Component
A fully functional contact form. It collects the user's name, email, and message, then sends the data to the Web3Forms API via a `POST` request — no backend required. Form feedback (success/error) is handled in the UI. Animated using Framer Motion on entry.

### 7. `Footer` Component
Closes out the page with agency info, navigation links, and social media icons. Clean layout with subtle animations.

---

## Dark & Light Mode

Both themes are fully designed and animated. A toggle button in the navbar switches between modes. The user's preference is saved to `localStorage` so it persists on return visits. Tailwind's `dark:` variant classes handle all the visual switching.

---

## Animations

Every section and component uses **Framer Motion** for:
- Staggered entrance animations on page load
- Scroll-triggered reveals as the user moves down the page
- Hover effects on cards and buttons
- Smooth dark/light mode icon transitions

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/agency-landing-page.git
cd agency-landing-page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Web3Forms key

Create a `.env` file in the root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Get a free key at [web3forms.com](https://web3forms.com)

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Title.jsx        ← reused in every section
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Teams.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css
```

---

Author 
Akash
