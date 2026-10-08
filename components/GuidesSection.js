const guides = [
  { title: 'Local SEO for Dentists', description: "Rank in Google's local pack for dental searches in your area" },
  { title: 'Local SEO for Dermatologists', description: 'Attract more patients searching for dermatology clinics nearby' },
  { title: 'Local SEO for Med Spas', description: 'Dominate local search results for aesthetic and med spa services' },
  { title: 'Local SEO for Gynecologists', description: "Improve your clinic's visibility for OB-GYN related searches" },
  { title: 'Google Ranking for Clinics', description: 'Understand the key factors that determine your clinic\'s Google position' },
  { title: 'Browse Clinic Directory', description: 'Explore clinic visibility scores across cities and specialties' }
];

export default function GuidesSection() {
  return (
    <section className="alt">
      <div className="c">
        <div className="hd rv">
          <span className="tag">SPECIALTY GUIDES</span>
          <h2>Local SEO Guides by Specialty</h2>
          <p>
            We build tailored local SEO strategies for different clinic types - because a dentist's ranking factors
            aren't the same as a med spa's
          </p>
        </div>

        <div className="gl rv">
          {guides.map((guide) => (
            <a href="#" key={guide.title}>
              <div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
              <i aria-hidden="true">→</i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
