const metrics = [
  { title: 'Local Citations', description: 'Check presence across 30+ key directories' },
  { title: 'Reviews & Ratings', description: 'Analyze reputation vs local competitors' },
  { title: 'Competitor Analysis', description: "See who's outranking you and why" },
  { title: 'Website SEO Signals', description: 'Schema, mobile, HTTPS, and more' },
  { title: 'Google Business Profile', description: 'Completeness and optimization gaps' },
  { title: 'Ranking Visibility', description: "Your local search visibility position" }
];

export default function AnalysisSection() {
  return (
    <section className="dark">
      <div className="c">
        <div className="hd rv">
          <span className="tag">WHAT WE ANALYZE</span>
          <h2>
            A <em>6-point</em> Local SEO health check built for medical and aesthetic clinics
          </h2>
        </div>

        <div className="g3 st rv">
          {metrics.map((metric) => (
            <div className="card" key={metric.title}>
              <h3>{metric.title}</h3>
              <p>{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
