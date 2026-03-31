import EdgeParticles from "./Components/background/EdgeParticles";
import MinimalNavbar from "./Components/Rebuild/MinimalNavbar";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";

function App() {
  return (
    <div className="rebuild-shell">
      <div className="rebuild-shell__background" aria-hidden="true">
        <div className="rebuild-shell__veil" />
        <div className="rebuild-shell__glow rebuild-shell__glow--top" />
        <div className="rebuild-shell__glow rebuild-shell__glow--bottom" />
        <div className="rebuild-shell__spotlight" />
        <EdgeParticles />
        <div className="rebuild-shell__texture" />
        <div className="rebuild-shell__vignette" />
        <div className="rebuild-shell__rails">
          <span className="rebuild-shell__rail rebuild-shell__rail--left" />
          <span className="rebuild-shell__rail rebuild-shell__rail--right" />
        </div>
      </div>

      <div className="rebuild-shell__content">
        <MinimalNavbar />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
