# NayePankh Foundation - Landing Page & Impact Portal (web development internship selection task)

A beautiful, high-performance, responsive single-page visual portal for **NayePankh Foundation**—one of India's closest student-alliance youth organizations based out of Uttar Pradesh. 

This platform showcases the organization's ground operations, real-time distribution indices, official government tax exemption compliances, regional newspaper scans, and interactive client-side calculator widgets.

⚠️ **Disclaimer & Ownership Announcement**
* **Project Nature**: This project is developed solely as an **internship assignment** to showcase front-end web development, modular refactoring, and visual design layout structures.
* **Ownership**: I **do not claim ownership** over NayePankh Foundation, its branding, registered patents, logos, or legal trust data.
* **Redirection Safeguards**: All persistent outbound button interactions, checkouts, and certificate links exit cleanly and redirect directly to the **original, official NayePankh Foundation website** (`https://nayepankh.com`).

---

## 🎨 Design Philosophy & visual Aesthetics

- **Golden Amber Dark Theme**: Styled with a deep Obsidian / Dark-Slate theme complimented by glowing amber and warm yellow active accents representing youth, energy, and hope.
- **Micro-Animations & Particles**: Implements an interactive 2D Canvas custom-engineered backdrop that pulses slowly, shifting radial ambient light bubbles and floating golden embers gracefully.
- **Brake-Free Performance**: 100% lightweight build written in standard **pure JavaScript React** paired directly with utility-first **Tailwind CSS Classes** and elegant Google Fonts (*Inter* & *Playfair Display*).
- **Zero-Flicker Layouts**: Fully responsive grids adapting smoothly across mobile viewports, tablet touchpoints, and large desktop screens.

---

## 🏗️ Folder & Component Architecture

To maintain high legibility and modular maintainability, the application code has been extracted from a single monolithic file into modular, reusable, single-responsibility React components:

```bash
├── index.html                           # Main entry document
├── package.json                         # Node dependency config
├── tailwind.config.js                   # Styles configuration
├── src/
│   ├── main.jsx                         # React root bootstrap element
│   ├── App.jsx                          # Main wrapper containing routing & states
│   ├── index.css                        # Global CSS containing custom themes & fonts
│   ├── data.js                          # Static database records (retained for clean backups)
│   └── components/
│       ├── AmbientBackground.jsx        # Smooth ambient backdrop rendering system
│       ├── Header.jsx                   # Fixed transparent-blur header & mobile burger drawer
│       ├── Hero.jsx                     # Core value statement & landing actions
│       ├── LiveMetrics.jsx              # live counter indices (simulating real-time relief output)
│       ├── Interventions.jsx            # Multi-column grid containing physical ground operations
│       ├── ImpactCalculator.jsx         # Micro-calculator mapping currencies directly to physical relief commodities
│       ├── CertificatesHighlight.jsx    # Secure government trust registry (80G & 12A tax exemption)
│       ├── PressCoverage.jsx            # Publication cards highlighting Hindi & English news prints
│       ├── VolunteerSignUp.jsx          # Interactive form for prospective youth volunteers
│       └── Footer.jsx                   # Responsive contacts, office coordinates, and legal compliance notes
```

---

## 🚀 Commands & Development Scripts

Run the package-specific automation commands straight from your workspace root:

* **Install dependencies:**
  ```bash
  npm install
  ```
* **Start local development server:**
  ```bash
  npm run dev
  ```
* **Lint codebase configurations:**
  ```bash
  npm run lint
  ```
* **Build optimized compilation bundle:**
  ```bash
  npm run build
  ```
