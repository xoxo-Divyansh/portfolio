import PropTypes from "prop-types";
import { useContext, useMemo } from "react";
import { PortfolioContext } from "./PortfolioContext";

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }

  return context;
};

export const PortfolioProvider = ({ children }) => {
  const portfolioData = useMemo(() => {
    const resumePath = `${import.meta.env.BASE_URL}resume/Divyansh_Raj_Tripathi_Resume.pdf`;

    return {
      personal: {
        name: "Divyansh Raj Tripathi",
        title: "Full-Stack JavaScript Developer",
        subtitle: [
          "React + Next.js interfaces",
          "Node + Express services",
          "MongoDB-backed products",
          "UI/UX-led delivery",
        ],
        bio: [
          "I build real-world web products where interface quality, performance, and scalable architecture all matter at the same time.",
          "My work sits at the intersection of full-stack JavaScript systems and thoughtful UI/UX decisions, with a strong bias toward clarity and usability.",
          "From utility platforms to content products and portfolio experiences, I like turning ideas into structured builds that feel polished and practical.",
        ],
        heroSummary:
          "I build real-world web products with strong UI/UX thinking, performance discipline, and scalable architecture across React, Node.js, and MongoDB.",
        availability:
          "Open to internships, freelance work, and product collaborations.",
        resume: resumePath,
      },

      skills: [
        {
          category: "Frontend Experience",
          description:
            "Readable, interactive interfaces shaped around product clarity.",
          skills: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "GSAP",
            "JavaScript",
          ],
        },
        {
          category: "Backend Foundations",
          description:
            "Structured services and data layers built to scale cleanly.",
          skills: ["Node.js", "Express.js", "MongoDB", "Authentication"],
        },
        {
          category: "Product Craft",
          description:
            "System thinking that balances usability, architecture, and polish.",
          skills: [
            "REST API Design",
            "Modular Architecture",
            "UI/UX Design",
            "Performance Thinking",
          ],
        },
      ],

      stackStrip: [
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "GSAP",
        "REST APIs",
        "UI/UX Design",
      ],

      projects: [
        {
          id: 1,
          title: "OneTool",
          meta: [
            { label: "Type", value: "Multi-utility web platform" },
            { label: "Focus", value: "Usability + modular growth" },
            { label: "Role", value: "Product design and full-stack build" },
          ],
          description:
            "A centralized web platform that brings everyday developer and productivity utilities into one cleaner workflow.",
          proofTitle:
            "A tool platform built so added functionality does not turn into interface sprawl.",
          proofSummary:
            "Instead of scattering small utilities across separate pages, OneTool keeps the experience consistent, quick to navigate, and ready for extension as more tools are added.",
          highlights: [
            "Combined JSON formatting, API testing, PDF generation, image compression, and study tools into one usable system",
            "Used modular architecture so new tools can be added without destabilizing existing flows",
            "Handled processing on the client where it improved speed and reduced unnecessary server load",
          ],
          outcome:
            "This project shows how I approach utility, structure, and performance in a build designed for real repeat-use value.",
          tech: ["JavaScript", "React", "Client-side Processing"],
          live: "",
          github: "",
          status: "Project links available on request",
          visualType: "masonry",
        },
        {
          id: 2,
          title: "Personal Portfolio",
          meta: [
            { label: "Type", value: "Interactive portfolio experience" },
            { label: "Focus", value: "Motion-led navigation" },
            { label: "Role", value: "Design and frontend development" },
          ],
          description:
            "A developer portfolio built as a guided experience rather than a standard scroll-and-card presentation.",
          proofTitle:
            "A portfolio that controls pacing, hierarchy, and transitions to shape how the work is read.",
          proofSummary:
            "The build was meant to present work with stronger narrative control, using motion and section-based flow so the interface feels deliberate instead of generic.",
          highlights: [
            "Built section-based navigation and GSAP-driven transitions to guide attention",
            "Used a non-scrollable structure to keep the reading rhythm controlled",
            "Focused on spacing, typography, and motion as part of the product language, not as decoration",
          ],
          outcome:
            "It became proof that interface direction and implementation discipline can reinforce each other in a personal product.",
          tech: ["React", "GSAP", "Section Navigation"],
          live: "https://xoxo-divyansh.github.io/portfolio",
          github: "",
          status: "Source shared selectively",
          visualType: "pulse",
        },
        {
          id: 3,
          title: "Noorvii Shayari",
          meta: [
            { label: "Type", value: "Content sharing platform" },
            { label: "Focus", value: "Publishing and reading flow" },
            { label: "Role", value: "Full-stack development" },
          ],
          description:
            "A reading-first platform for publishing and browsing Shayari posts with clean structure and dependable data flow.",
          proofTitle:
            "A content product shaped around readability, routing clarity, and reliable retrieval.",
          proofSummary:
            "Rather than overwhelming the interface, the build keeps the experience calm for reading while the backend handles structured storage and retrieval.",
          highlights: [
            "Built MongoDB and Express foundations for publishing, storage, and retrieval",
            "Designed a cleaner reading UI to support engagement without visual clutter",
            "Structured routing and data flow so the platform stays straightforward as content grows",
          ],
          outcome:
            "This project reflects a product-minded content system, where backend decisions directly support a better reading experience.",
          tech: ["MongoDB", "Express.js", "Structured Routing"],
          live: "",
          github: "",
          status: "Project links available on request",
          visualType: "masonry",
        },
        {
          id: 4,
          title: "Reels Food App",
          meta: [
            { label: "Type", value: "Food discovery product" },
            { label: "Focus", value: "Short-form browsing" },
            { label: "Role", value: "UI systems and ongoing backend work" },
          ],
          description:
            "An in-progress food discovery app that borrows from short-form media to make browsing feel faster, richer, and more engaging.",
          proofTitle:
            "A discovery flow that treats food browsing like content, without losing clarity.",
          proofSummary:
            "The product direction uses video-led browsing and a scalable UI structure to keep the experience lively while the backend and business logic continue to take shape.",
          highlights: [
            "Designed a browsing model inspired by modern short-form content habits",
            "Built the UI structure to support video-based discovery without visual overload",
            "Currently extending the backend layer and business logic toward a fuller product flow",
          ],
          outcome:
            "It serves as current proof of how I think about entertainment-driven discovery, interface structure, and staged product development.",
          tech: ["React", "Scalable UI", "Backend Logic"],
          live: "",
          github: "https://github.com/xoxo-Divyansh/Reels-Foods-app",
          status: "In progress",
          visualType: "feed",
        },
      ],

      contact: {
        email: "drt.vip777@gmail.com",
        phone: "+91 87872 47613",
        location: "Lucknow, Uttar Pradesh, India",
        resume: resumePath,
        linkedin:
          "https://linkedin.com/in/divyansh-raj-tripathi",
        github: "https://github.com/xoxo-Divyansh",
        twitter: "",
      },

      about: {
        heading: "About",
        intro:
          "I am a full-stack JavaScript developer focused on real-world web products where interface quality matters as much as engineering stability.",
        philosophy:
          "I care about usable interfaces, performance that holds up, and architecture that can grow cleanly, so my process leans on modular systems instead of quick visual fixes.",
        highlights: [
          "Interactive UI decisions shaped around readability and user flow",
          "Performance-minded frontend choices that keep products responsive",
          "Modular backend structure designed for extension, not patchwork",
          "Product thinking that balances utility, clarity, and polish",
        ],
        stats: [
          { value: "04", label: "Resume projects" },
          { value: "JS", label: "Primary language" },
          { value: "MERN", label: "Core build mode" },
          { value: "UI/UX", label: "Primary lens" },
        ],
        roles: [
          {
            title: "Interface Systems",
            text: "I build interactive fronts that stay readable, responsive, and grounded in real user flow.",
          },
          {
            title: "Backend Structure",
            text: "Node, Express, and MongoDB work together in patterns that keep routing, storage, and retrieval dependable.",
          },
          {
            title: "Product Usability",
            text: "I prefer multi-feature products that solve repeat problems, not isolated demos built for a single screenshot.",
          },
          {
            title: "Build Discipline",
            text: "Modular architecture, REST thinking, and measured motion help the product stay clean as it grows.",
          },
        ],
      },
    };
  }, []);

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
