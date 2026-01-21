export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
        {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}
