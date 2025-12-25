# Portfolio Website - Divyansh

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.
This project showcases a clean, professional design with centralized data
management and seamless user experience.

## 📋 Table of Contents

- [Design](#design)
  - [Color Scheme](#color-scheme)
  - [Typography](#typography)
  - [Layout Structure](#layout-structure)
  - [Component Architecture](#component-architecture)
- [Responsiveness](#responsiveness)
  - [Mobile-First Approach](#mobile-first-approach)
  - [Breakpoint Strategy](#breakpoint-strategy)
  - [Responsive Components](#responsive-components)
- [Data Centralization](#data-centralization)
  - [Context Architecture](#context-architecture)
  - [Data Flow](#data-flow)
  - [Benefits](#benefits)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## 🎨 Design

### Color Scheme

The portfolio uses a carefully crafted dark theme with purple accents:

```css
/* Primary Colors */
--background: #0f0f0f; /* Deep dark background */
--surface: #151515; /* Card/component backgrounds */
--surface-secondary: #1f1f1f; /* Secondary surfaces */
--accent: #8b5cf6; /* Purple accent */
--text-primary: #ffffff; /* White text */
--text-secondary: #9ca3af; /* Gray text */
--text-muted: #6b7280; /* Muted text */
```

**Design Philosophy:**

- **Dark Theme**: Reduces eye strain and creates a modern, professional look
- **Purple Accents**: Adds personality and visual interest
- **High Contrast**: Ensures excellent readability
- **Consistent Spacing**: Uses Tailwind's spacing scale for harmony

### Typography

```css
/* Font Hierarchy */
--heading: font-bold text-3xl md:text-4xl;  /* Section headings */
--subheading: font-semibold text-xl;        /* Component titles */
--body: text-gray-300;                      /* Regular text */
--accent-text: text-purple-400;             /* Highlighted text */
```

**Typography Features:**

- **Responsive Scaling**: Text sizes adapt to screen size
- **Bold Hierarchy**: Clear visual hierarchy with font weights
- **Color Coding**: Purple for interactive elements and highlights

### Layout Structure

The portfolio follows a single-page application structure with distinct
sections:

```
┌─────────────────────────────────────┐
│           Fixed Navbar              │
├─────────────────────────────────────┤
│                                     │
│           Hero Section              │
│                                     │
├─────────────────────────────────────┤
│           About Section             │
├─────────────────────────────────────┤
│           Skills Section            │
├─────────────────────────────────────┤
│           Projects Section          │
├─────────────────────────────────────┤
│           Contact Section           │
│                                     │
└─────────────────────────────────────┘
```

### Component Architecture

**Atomic Design Approach:**

- **Atoms**: Buttons, icons, skill tags
- **Molecules**: Skill cards, navigation items
- **Organisms**: Hero section, skills grid, contact form
- **Templates**: Page layouts
- **Pages**: Complete portfolio page

**Key Components:**

- `Navbar`: Fixed navigation with smooth scrolling
- `Hero`: Introduction with call-to-action buttons
- `AboutMe`: Personal information and highlights
- `Skills`: Technical skills with icons
- `Projects`: Portfolio showcase
- `Contact`: Contact form and information

---

## 📱 Responsiveness

### Mobile-First Approach

The portfolio is built with a mobile-first responsive design strategy:

```css
/* Mobile-First Breakpoints */
.mobile: 320px - 767px
.tablet: 768px - 1023px
.desktop: 1024px+
```

**Mobile-First Principles:**

- **Progressive Enhancement**: Start with mobile, enhance for larger screens
- **Touch-Friendly**: Adequate touch targets (44px minimum)
- **Readable Text**: Appropriate font sizes for mobile reading
- **Efficient Space Usage**: Optimized layouts for small screens

### Breakpoint Strategy

```css
/* Tailwind Breakpoint Usage */
sm: '640px'   // Small tablets
md: '768px'   // Tablets and small laptops
lg: '1024px'  // Desktops
xl: '1280px'  // Large desktops
2xl: '1536px' // Extra large screens
```

**Responsive Patterns Used:**

- **Grid Systems**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Flexible Layouts**: `flex-col md:flex-row`
- **Responsive Text**: `text-2xl md:text-4xl`
- **Adaptive Spacing**: `p-4 md:p-6 lg:p-8`

### Responsive Components

**Navbar:**

```jsx
// Mobile: Hamburger menu
// Tablet+: Horizontal menu
<button className="md:hidden">☰</button>
<ul className="hidden md:flex">
```

**Hero Section:**

```jsx
// Mobile: Stacked layout
// Desktop: Side-by-side layout
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
```

**Skills Grid:**

```jsx
// Mobile: Single column
// Tablet: 2 columns
// Desktop: 3 columns
<div className="grid md:grid-cols-3 gap-8">
```

**Contact Form:**

```jsx
// Mobile: Stacked form
// Desktop: Side-by-side with contact info
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
```

---

## 🔄 Data Centralization

### Context Architecture

The portfolio uses React Context for centralized state management:

```jsx
// Context Structure
const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const portfolioData = useMemo(
    () => ({
      personal: {
        /* Personal info */
      },
      skills: [
        /* Skills data */
      ],
      projects: [
        /* Projects data */
      ],
      contact: {
        /* Contact info */
      },
      social: {
        /* Social links */
      },
      experience: [
        /* Work experience */
      ],
      education: [
        /* Education */
      ],
    }),
    []
  );

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};
```

### Data Flow

**Data Flow Diagram:**

```
PortfolioProvider (Context)
        │
        ├── personal (name, bio, avatar)
        ├── skills (categories with skills)
        ├── highlights (key points)
        ├── projects (portfolio items)
        ├── contact (email, phone, location)
        ├── social (social media links)
        ├── experience (work history)
        └── education (academic background)
```

**Component Data Access:**

```jsx
// In any component
import { usePortfolio } from "../Context/PortfolioProvider";

const MyComponent = () => {
  const { personal, skills, contact } = usePortfolio();

  return (
    <div>
      <h1>{personal.name}</h1>
      <p>{contact.email}</p>
    </div>
  );
};
```

### Benefits

**Advantages of Centralized Data:**

1. **Single Source of Truth**

   - All data managed in one location
   - Easy to update information globally
   - Consistent data across components

2. **Maintainability**

   - Changes in one place reflect everywhere
   - Reduced code duplication
   - Easier debugging and testing

3. **Scalability**

   - Easy to add new data sections
   - Simple to extend functionality
   - Future-proof architecture

4. **Developer Experience**

   - Clear data structure
   - Type-safe with PropTypes
   - Hot reload support

5. **Performance**
   - useMemo prevents unnecessary re-renders
   - Optimized context updates
   - Efficient data access

---

## ✨ Features

- **Modern Design**: Clean, professional dark theme with purple accents
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: CSS transitions and hover effects
- **Interactive Navigation**: Smooth scrolling between sections
- **Skill Icons**: Visual representation of technical skills
- **Contact Form**: Functional contact form (ready for backend integration)
- **SEO Ready**: Proper semantic HTML and meta tags
- **Performance Optimized**: Fast loading with Vite bundler
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

**Frontend:**

- **React 19**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and formatting

**Architecture:**

- **React Context**: Centralized state management
- **Component Composition**: Reusable, modular components
- **Mobile-First Design**: Responsive design approach

**Development Tools:**

- **VS Code**: Primary IDE
- **Git**: Version control
- **npm**: Package management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/xoxo-Divyansh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── Components/         # Reusable components
│   │   ├── Hero/          # Hero section
│   │   ├── About/         # About section
│   │   ├── Skills/        # Skills section
│   │   ├── Navbar/        # Navigation component
│   │   └── common/        # Shared components
│   ├── Sections/          # Page sections
│   │   ├── Projects.jsx   # Projects section
│   │   └── Contact.jsx    # Contact section
│   ├── Context/           # Context providers
│   │   └── PortfolioProvider.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Key Design Decisions

### Why This Architecture?

1. **Context for Data**: Single source of truth prevents data inconsistencies
2. **Component-Based**: Modular, reusable, and maintainable code
3. **Mobile-First**: Better performance and user experience on mobile
4. **Dark Theme**: Modern, professional, and eye-friendly
5. **Tailwind CSS**: Rapid development with consistent design system

### Performance Considerations

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Proper sizing and formats
- **Minimal Bundle**: Tree-shaking removes unused code
- **Fast Refresh**: Instant updates during development

## 🔧 Customization

### Adding New Skills

```javascript
// In PortfolioProvider.jsx
skills: [
  {
    category: "New Category",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
];
```

### Adding New Projects

```javascript
// In PortfolioProvider.jsx
projects: [
  {
    id: 2,
    title: "New Project",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    link: "https://project-link.com",
    github: "https://github.com/user/repo",
  },
];
```

### Updating Colors

```css
/* In tailwind.config.js */
theme: {
  extend: {
    colors: {
      primary: '#8b5cf6', // Purple
      background: '#0f0f0f', // Dark
    }
  }
}
```

## 📞 Contact

**Divyansh**

- Email: drt.vip777@gmail.com
- LinkedIn: [linkedin.com/in/Divyansh](https://linkedin.com/in/Divyansh)
- GitHub: [github.com/xoxo-Divyansh](https://github.com/xoxo-Divyansh)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Divyansh**</content> <parameter name="oldString"># React +
Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in
  [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev
& build performances. To add it, see
[this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript
with type-aware lint rules enabled. Check out the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
for information on how to integrate TypeScript and
[`typescript-eslint`](https://typescript-eslint.io) in your project.
