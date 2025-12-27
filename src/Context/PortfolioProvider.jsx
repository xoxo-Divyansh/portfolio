import PropTypes from "prop-types";
import { createContext, useContext, useMemo } from "react";
// Create the Portfolio Context
const PortfolioContext = createContext();

// Custom hook to use the Portfolio Context
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

// Portfolio Provider Component
export const PortfolioProvider = ({ children }) => {
  // Centralized data for the portfolio
  const portfolioData = useMemo(
    () => ({
      // Personal Information
      personal: {
        name: "Divyansh",
        title: "Creative Full-Stack Developer (MERN)",
        subtitle: ["Frontend", "Backend", "Animation", "MongoDB"],
        bio: [
          "I'm a Creative Full-Stack Developer working with the MERN stack, with a deep interest in frontend engineering, animations, and user experience.",
          "I enjoy transforming ideas into clean, scalable, and expressive web applications — from designing interactive UIs to building reliable backend systems.",
          "I believe good software is not just functional, but also thoughtful, performant, and enjoyable to use.",
        ],
        // ✅ Use import.meta.env.BASE_URL for correct path
        resume: `${
          import.meta.env.BASE_URL
        }resume/Divyansh_Raj_Tripathi_Resume.pdf`,
        avatar: "xoxo", // Placeholder for avatar
      },

      // Skills Data
      skills: [
        {
          category: "Frontend",
          skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
        },
        {
          category: "Backend",
          skills: ["Node.js", "Express.js", "MongoDB"],
        },
        {
          category: "Animations & Tools",
          skills: ["GSAP", "Git", "GitHub", "REST APIs"],
        },
      ],

      // About Highlights
      highlights: [
        "Frontend-focused UI/UX",
        "GSAP Animations",
        "MERN Full-Stack",
        "Scalable Code",
        "Responsive Design",
        "Performance-Driven",
      ],

      // Projects (placeholder - you can expand this)
      projects: [
        {
          id: 1,
          title: "Reels Food App",
          description:
            "A reel-based food discovery app with interactive UI and order flow.",
          tech: ["React", "Tailwind", "Node", "MongoDB"],
          live: "",
          github: "https://github.com/xoxo-Divyansh/Reels-Foods-app",
        },
        {
          id: 2,
          title: "Mood Based Music App",
          description:
            "Detects user mood using camera API and recommends music accordingly.",
          tech: ["React", "API", "GSAP"],
          live: "",
          github: "https://github.com/xoxo-Divyansh/Mood-Based-Music-Player",
        },
        {
          id: 3,
          title: "Pintrest Clone (MERN) App",
          description:
            "Detects user mood using camera API and recommends music accordingly.",
          tech: ["React", "API", "GSAP"],
          live: "",
          github: "https://github.com/xoxo-Divyansh/pinterest-web-app",
        },
      ],

      // Contact Information
      contact: {
        email: "drt.vip777@gmail.com",
        phone: "+91 87872 47613",
        location: "Hardoi, Uttar Pradesh, India",
        resume: "personal.resume",
        linkedin:
          "https://linkedin.com/in/Divyansh-raj-tripathi-3211b8266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/xoxo-Divyansh",
        // Add more contact details
      },

      // Social Links

      education: [
        {
          id: 1,
          degree: "Engineering Diploma",
          field: "Electrical",
          institution:
            "Goel Institute of Technology and Management, Lucknow, UttarPredesh",
          year: "2019 - 2022",
        },
        // Add more education
      ],

      // ✅ About Section
      about: {
        heading: "About Me",
        paragraph: `
      I’m a MERN stack developer passionate about crafting interactive web experiences.
      I build scalable, responsive, and expressive web applications focusing on frontend, animations, and performance.
    `,
        highlights: [
          "Proficient in React.js, Tailwind CSS, and GSAP",
          "Experience with Node.js, Express.js, and MongoDB",
          "Strong focus on UI/UX and web animations",
          "Build full-stack scalable applications",
        ],
      },
    }),[]);

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
