import Navbar from "./components/NavBar";
import Section from "./components/Section";
import ProjectCard from "./components/Projects";
import { portfolioData } from "./data/PortfolioData.js";
import "./styles.css";

export default function App() {
  const { name, role, location, intro, socials, skills, projects } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="hero__content">
            <p className="pill">Available for internships & junior roles</p>
            <h1 className="hero__title">{name}</h1>
            <p className="hero__role">
              {role} • <span className="muted">{location}</span>
            </p>
            <p className="hero__intro">{intro}</p>

            <div className="hero__cta">
              <button className="btn btn--primary" onClick={() => scrollTo("projects")}>
                View Projects
              </button>
              <a className="btn btn--ghost" href={socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero__panel" aria-hidden="true">
            <div className="panel">
              <div className="panel__row">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="panel__body">
                <p className="panel__label">Focus</p>
                <p className="panel__text">Clean UI • Strong fundamentals • Backend-ready structure • Security</p>
                <div className="panel__line"></div>
                <p className="panel__label">Current stack</p>
                <p className="panel__text">React + CSS + JavaScript + ExpressJS</p>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="about"
          title="About"
          subtitle="A quick summary of what I’m building and where I’m going."
        >
          <div className="grid-2">
            <div className="box">
              <h3 className="box__title">My approach</h3>
              <p className="box__text">
                I enjoy building systems that make sense. I’m frontend-first for portfolio proof,
                but I prefer Backend and i'm looking to expand into the field..
              </p>
            </div>

            <div className="box">
              <h3 className="box__title">What I’m improving</h3>
              <ul className="list">
                <li>React component structure & state handling</li>
                <li>Reusable UI patterns</li>
                <li>API-ready authentication flows</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Tools and fundamentals I’m actively using.">
          <div className="chips">
            {skills.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="A few builds that show my progress and how I think."
        >
          <div className="cards">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
          <p className="hint">
            <i>More coming soon. Check back for updates.</i>
          </p>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s connect.">
          <div className="contact">
            <a className="btn btn--primary" href={socials.email}>
              Email Me
            </a>
            <a className="btn btn--ghost" href={socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </Section>

        <footer className="footer">
          <p className="muted">© {new Date().getFullYear()} {name}. Built with React + CSS.</p>
        </footer>
      </main>
    </div>
  );
}
