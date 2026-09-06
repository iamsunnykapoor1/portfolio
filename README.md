# Sunny's Personal Portfolio Website

A modern, premium, fully responsive animated personal portfolio website for **Sunny**, an Engineering Student and aspiring Software Developer specializing in **Artificial Intelligence, Machine Learning, Deep Learning, and Software Development**.

Built with **React**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

---

## ✨ Features & Design Highlights

- **Aesthetic Dark Theme:** Deep space background (`#07090e`) with subtle glowing ambient orbs, cyber grids, and blue/purple gradient accents.
- **Dynamic Typing Effect:** Interactive hero role cycle through *Engineering Student*, *Software Developer*, *AI & ML Enthusiast*, and *Problem Solver*.
- **Interactive Visual Workflows:** Includes a dedicated multi-stage architecture flow for the **Deep Learning Fertilizer Recommendation** project (`Soil Data + Crop Type → DL Model → Fertilizer Recommendation`) and decentralized topology for **FedSentry**.
- **Smooth Animations:** Powered by Framer Motion—smooth scroll navigation, active section indicators, 3D card tilts, and viewport reveal transitions.
- **Sticky Glassmorphic Navigation:** Transparent backdrop blur header with mobile hamburger drawer and interactive Resume modal.
- **Centralized Configuration (`src/data/portfolioData.js`):** Easily edit your personal details, links, placeholders, and projects in one single file.
- **Zero Fake Information:** Uses clearly marked placeholders for college name, graduation year, CGPA, and social links.

---

## 🚀 Quickstart Guide

### 1. Prerequisites
Make sure **Node.js** (v18 or newer) and **npm** are installed on your machine.
- Verify installation:
  ```bash
  node -v
  npm -v
  ```

### 2. Installing Dependencies
In your terminal, navigate to the portfolio directory and run:
```bash
npm install
```

### 3. Running the Project Locally
Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

To build for production:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 🛠️ Personalization & Customization Guide

All personal data, links, placeholders, and descriptions are cleanly organized inside:
📁 `src/data/portfolioData.js`

### 4. Adding Your Profile Image
1. Prepare your photo in `.jpg`, `.png`, or `.webp` format (square aspect ratio recommended, e.g., 500x500 px).
2. Copy your image into the `public/` directory and name it `profile.jpg`:
   ```
   c:\portfolio\public\profile.jpg
   ```
3. Open `src/data/portfolioData.js` and change `avatarUrl`:
   ```javascript
   // Change:
   avatarUrl: "/avatar.svg",
   
   // To:
   avatarUrl: "/profile.jpg",
   ```

### 5. Adding Your GitHub, LinkedIn & Email Links
Open `src/data/portfolioData.js` and locate `personalInfo.socialLinks`:
```javascript
socialLinks: {
  github: "https://github.com/your-username",      // Replace with your GitHub URL
  linkedin: "https://linkedin.com/in/your-profile", // Replace with your LinkedIn URL
  email: "sunny@example.com",                       // Replace with your actual email
}
```

### 6. Adding Project Links & Repositories
In `src/data/portfolioData.js`, locate the `projectsData` array:
- For **FedSentry**:
  ```javascript
  githubUrl: "https://github.com/your-username/fedsentry",
  liveUrl: "https://your-live-demo.com",
  ```
- For **Deep Learning Fertilizer Recommendation**:
  ```javascript
  githubUrl: "https://github.com/your-username/fertilizer-recommendation",
  liveUrl: "https://your-live-demo.com",
  ```

### 7. Updating Education & Placeholder Information
In `src/data/portfolioData.js`, locate `educationData`:
```javascript
export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Engineering",
    institution: "Your College / University Name",  // Replace placeholder
    year: "2022 - 2026",                          // Replace placeholder
    cgpa: "8.5 / 10",                             // Replace placeholder
    // ...
  }
];
```

### 8. Adding Your Resume PDF
1. Save your resume as `resume.pdf`.
2. Place it directly inside the `public/` folder:
   ```
   c:\portfolio\public\resume.pdf
   ```
The "Resume" button and download triggers will automatically serve this file to recruiters.

---

## 🌐 Deploying to Vercel

Vercel provides free, instant, and high-performance hosting for React + Vite projects.

### Option A: Deploy via GitHub (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sunny Portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your code to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
5. Click **"Add New..."** → **"Project"**.
6. Select your portfolio repository from the list.
7. Framework Preset will be automatically detected as **Vite**.
8. Click **"Deploy"**. Your website will be live in seconds with a free `.vercel.app` domain and automatic HTTPS!

### Option B: Deploy via Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deploy command from the project root:
   ```bash
   vercel
   ```
3. Follow the quick terminal prompts. To deploy to production:
   ```bash
   vercel --prod
   ```

---

## 📂 Project Structure

```
portfolio/
├── index.html                  # HTML entry with Google fonts & metadata
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind styling, dark theme & animations
├── postcss.config.js           # PostCSS configuration
├── public/
│   ├── favicon.svg             # Modern glowing 'S' tech favicon
│   ├── avatar.svg              # Clean developer illustration placeholder
│   └── resume.pdf              # Resume placeholder file
├── src/
│   ├── main.jsx                # React app mount
│   ├── App.jsx                 # Main layout assembly
│   ├── index.css               # Tailwind directives & glassmorphism utilities
│   ├── data/
│   │   └── portfolioData.js    # ⭐ Central configuration for all content
│   └── components/
│       ├── BackgroundEffect.jsx# Animated glowing orbs, cyber grid & particles
│       ├── Navbar.jsx          # Sticky blurred navbar, drawer menu & scroll spy
│       ├── Hero.jsx            # Fullscreen hero with animated typing role banner
│       ├── About.jsx           # Bio narrative, avatar frame & animated stats
│       ├── Skills.jsx          # 4 categorized skill groups with subtle indicators
│       ├── Projects.jsx        # 3D cards, ML workflows & FedSentry architecture
│       ├── Education.jsx       # B.Tech timeline with placeholders
│       ├── Achievements.jsx    # Coding, certifications, hackathons cards
│       ├── Contact.jsx         # Functional form with validation & direct links
│       ├── Footer.jsx          # Copyright, social badges & back-to-top button
│       └── ResumeModal.jsx     # Resume preview & download modal
└── README.md                   # Setup & deployment documentation
```

---

© 2026 Sunny. Built with React and passion.
