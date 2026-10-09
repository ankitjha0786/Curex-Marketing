const chips = ['Dentists', 'Dermatologists', 'Med Spas', 'Gynecologists'];

export default function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-orb">
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
          <span className="hero-orbit hero-orbit-three" />
        </div>
        <span className="hero-spark hero-spark-one" />
        <span className="hero-spark hero-spark-two" />
        <span className="hero-spark hero-spark-three" />
      </div>

      <div className="c hg">
        <div>
          <span className="tag">LOCAL SEO SOFTWARE</span>
          <h1>
            How Visible Is Your <em>Clinic</em> on Google?
          </h1>
          <p>
            Search your clinic name below for a fast local visibility check. Then use Curex to fix listings,
            improve GBP, strengthen map-pack rankings, and convert more of the traffic your clinic already earns.
          </p>

          <div className="s" role="search">
            <input type="text" placeholder="Search your clinic name" aria-label="Search your clinic" />
            <button className="btn" type="button">Check Clinic</button>
          </div>

          <div className="ch" aria-label="Popular clinic categories">
            {chips.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="tr">No credit card. Instant preview. Full report delivered by email.</div>
        </div>

        <div className="shot" aria-label="Clinic visibility dashboard preview">
          <img
            src="/images/herosection.png"
            alt="Clinic dashboard preview"
          />
        </div>
      </div>
    </header>
  );
}
