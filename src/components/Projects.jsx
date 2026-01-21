export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card__top">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__desc">{project.description}</p>
      </div>

      <div className="tags">
        {project.tech.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="card__links">
        <a className="btn btn--ghost" href={project.repo} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn btn--primary" href={project.live} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  );
}
