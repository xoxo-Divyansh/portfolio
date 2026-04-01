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
    const resumePath = `${import.meta.env.BASE_URL}resume/Divyansh_Raj_Tripathi_Resume 2026.pdf`;
    const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
    const createProjectImages = (folder, entries) =>
      entries.map(({ file, type = "image", alt, caption, poster }) => ({
        type,
        src: assetPath(`ProjectsVisuals/${folder}/${file}`),
        alt,
        caption,
        ...(poster
          ? { poster: assetPath(`ProjectsVisuals/${folder}/${poster}`) }
          : {}),
      }));

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

      identity: {
        heading: "Visual Identity",
        summary: [
          "I build cinematic, emotion-driven web experiences.",
          "Focused on clean UI, meaningful interactions, and real-world products.",
          "The goal is always the same: products that feel intentional, useful, and production-ready.",
        ],
        cards: [
          {
            title: "UI Design Thinking",
            description: "Clean, minimal, and emotion-first interfaces.",
            icon: "layout",
          },
          {
            title: "Development Approach",
            description: "Scalable architecture with real-world use cases.",
            icon: "system",
          },
          {
            title: "Performance Mindset",
            description: "Fast, optimized, production-ready builds.",
            icon: "speed",
          },
          {
            title: "Problem Solving",
            description: "Focused on building useful and usable products.",
            icon: "focus",
          },
        ],
        tech: [
          "React",
          "Node",
          "MongoDB",
          "Next.js",
          "Tailwind",
          "Framer Motion",
        ],
        preview: {
          mediaSrc: "",
          mediaPoster: "",
          mediaType: "video",
          items: [
            {
              name: "OneTool",
              label: "Utility platform",
              title: "Modular everyday tooling",
              description:
                "A clean, extendable workspace for real repeat-use tools.",
              accent: "System thinking",
            },
            {
              name: "Noorvii",
              label: "Content product",
              title: "Reading-first content flow",
              description:
                "A calmer publishing interface backed by structured retrieval.",
              accent: "Usability focus",
            },
            {
              name: "Portfolio",
              label: "Narrative interface",
              title: "Editorial motion and hierarchy",
              description:
                "A guided presentation that turns personal work into product proof.",
              accent: "Experience design",
            },
          ],
        },
      },

      projects: [
        {
          id: "onetool",
          title: "OneTool",
          eyebrow: "Utility platform / modular workflow",
          description:
            "A multi-utility web platform that brings recurring developer and productivity tasks into one cleaner, faster workspace.",
          problem:
            "The product solves the friction of jumping across disconnected single-purpose tools by keeping formatting, testing, conversion, and study actions inside one consistent system.",
          strength:
            "Its strongest quality is structural clarity: every utility fits the same interface rhythm, so the product can expand without becoming visually noisy.",
          features: [
            "Combines JSON formatting, API testing, PDF generation, image compression, and study tools in one environment.",
            "Uses modular composition so new utilities can be added without breaking the overall product flow.",
            "Keeps high-frequency tasks fast with client-side handling where server round-trips are unnecessary.",
            "Maintains one readable interaction pattern across tools, which lowers friction for repeat use.",
          ],
          tech: ["React", "JavaScript", "Client-side Processing", "Utility UX"],
          liveUrl: "https://one-tool-xoxo.vercel.app/",
          repoUrl: "https://github.com/xoxo-Divyansh/OneTool",
          images: createProjectImages("onetool", [
            {
              file: "Onetool_Home.png",
              alt: "OneTool home interface screenshot",
              caption:
                "The main surface organizes multiple utilities into a calm, navigable workspace instead of a scattered tool list.",
            },
            {
              file: "Onetool_JSON_Formatter.png",
              alt: "OneTool JSON formatter interface screenshot",
              caption:
                "Formatting tools stay inside the same product shell, so utility work feels connected instead of fragmented.",
            },
            {
              file: "OneTool_JSON_Formatter-II.png",
              alt: "OneTool JSON formatter expanded interface screenshot",
              caption:
                "A wider working state shows how the interface keeps structure and readability even when tool density increases.",
            },
            {
              file: "onetool_API_tester.png",
              alt: "OneTool API tester interface screenshot",
              caption:
                "Testing flows inherit the same visual rhythm, which makes switching between utilities feel immediate and familiar.",
            },
            {
              file: "Onetool_PDF_generater.png",
              alt: "OneTool PDF generator interface screenshot",
              caption:
                "Document generation lives inside the same product logic, extending the platform without breaking visual consistency.",
            },
            {
              file: "Onetool_ImgCompresser.png",
              alt: "OneTool image compressor interface screenshot",
              caption:
                "Media handling tools keep the same calm framing, helping the product scale like one system instead of separate widgets.",
            },
            {
              file: "Onetool_StudyTimer.png",
              alt: "OneTool study timer interface screenshot",
              caption:
                "The study timer proves the interface can stretch beyond developer tooling while still feeling cohesive.",
            },
          ]),
        },
        {
          id: "noorvii",
          title: "Noorvii Shayaris",
          eyebrow: "Content product / reading-first interface",
          description:
            "A Shayari publishing and discovery platform designed around calmer reading, clearer browsing, and dependable content retrieval.",
          problem:
            "It addresses the clutter common in content-heavy products by giving poetry, categories, and discovery flows more breathing room and stronger reading focus.",
          strength:
            "The product feels strongest where backend structure and reading experience meet: content stays organized, while the interface remains easy to scan and return to.",
          features: [
            "Supports publishing, storage, and retrieval through a structured MongoDB and Express foundation.",
            "Shapes the interface around reading comfort instead of overloading the screen with noisy decoration.",
            "Keeps routing and category access straightforward so growing content still feels browsable.",
            "Turns a niche content idea into a more complete product experience with usability in mind.",
          ],
          tech: ["MongoDB", "Express.js", "Content Routing", "Reading UX"],
          liveUrl: "https://noorvii-shayaris.vercel.app/",
          repoUrl: "https://github.com/xoxo-Divyansh/noorvii-shayaries",
          images: createProjectImages("noorvii", [
            {
              file: "noorvi_home.png",
              alt: "Noorvii Shayaris home interface screenshot",
              caption:
                "The home screen uses cleaner spacing and hierarchy so content discovery feels quieter and more intentional.",
            },
            {
              file: "noorvii_shayaries.png",
              alt: "Noorvii Shayaris listing interface screenshot",
              caption:
                "The content list leans on readable spacing and hierarchy so the experience stays reading-first rather than ornamental.",
            },
            {
              file: "noorvii-catagory_pg.png",
              alt: "Noorvii Shayaris category page screenshot",
              caption:
                "Category browsing stays structured and easy to scan, which matters more as the content library grows.",
            },
            {
              file: "noorvi_dashboard.png",
              alt: "Noorvii Shayaris dashboard screenshot",
              caption:
                "Backend management screens carry the same restrained visual language, keeping editorial workflows usable and focused.",
            },
            {
              file: "noorvi_dashbord_bottom.png",
              alt: "Noorvii Shayaris dashboard lower section screenshot",
              caption:
                "The dashboard continues the same spacing logic deeper into the interface, which helps the product feel reliably composed.",
            },
            {
              file: "noorvi_Download_opt.png",
              alt: "Noorvii Shayaris download options screenshot",
              caption:
                "Utility actions appear with enough separation and clarity that secondary tasks do not disrupt the reading atmosphere.",
            },
            {
              file: "noorvi_download .png",
              alt: "Noorvii Shayaris download flow screenshot",
              caption:
                "Even functional states such as downloading stay visually calm, reinforcing the product's quieter tone.",
            },
            {
              file: "noorvi_shayari_pannel.png",
              alt: "Noorvii Shayaris reading panel screenshot",
              caption:
                "The reading panel shows the project at its best: content centered, distractions reduced, and hierarchy doing the work.",
            },
            {
              file: "noorvi_II.png",
              alt: "Noorvii Shayaris alternate interface screenshot",
              caption:
                "An alternate screen confirms the system holds together across multiple content surfaces, not just one polished page.",
            },
          ]),
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
