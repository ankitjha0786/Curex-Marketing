const featureCards = [
  {
    title: 'Control GBP and listing accuracy',
    description: 'Monitor profile changes, fix listing issues, and protect the business information patients rely on.',
    image: '/images/gbp.png'
  },
  {
    title: 'Improve local rankings',
    description: 'Turn the audit into action with ranking insights, map visibility tools, and medical SEO strategy.',
    image: '/images/ranking.png'
  },
  {
    title: 'Clean up and expand listings',
    description: 'Strengthen citation coverage, improve consistency, and build a healthier local presence across key directories.',
    image: '/images/citation.png'
  },
  {
    title: 'Convert more visitors into patients',
    description: 'Use automation to capture leads, answer questions, and turn traffic you already paid for into booked appointments.',
    image: '/images/curexai.png'
  }
];

export default function FeatureShowcase() {
  return (
    <section>
      <div className="c nx">
        <div className="hd rv">
          <span className="tag">WHAT WE DO</span>
          <h2>
            The free scan shows the gaps. <em>Curex</em> helps you fix them.
          </h2>
          <p>
            Your homepage scanner is the entry point. The broader platform helps clinics improve visibility,
            control listings, optimize Google Business Profiles, and turn more local traffic into patient inquiries.
          </p>
        </div>

        <div className="g2">
          {featureCards.map((card) => (
            <article className="card rv" key={card.title}>
              <img src={card.image} alt={card.title} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#">See ranking tools →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
