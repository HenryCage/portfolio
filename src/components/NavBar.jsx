import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
  const links = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = "home";

      for (const link of links) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (mid >= top && mid < bottom) current = link.id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  const handleGo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav__link ${active === l.id ? "is-active" : ""}`}
              onClick={() => handleGo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>
    </header>
  );
}
