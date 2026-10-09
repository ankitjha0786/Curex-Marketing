export default function StudioSection() {
  return (
    <section className="snap">
      <div className="studio-scene" aria-hidden="true">
        <span className="studio-orbit studio-orbit-one" />
        <span className="studio-orbit studio-orbit-two" />
        <span className="studio-glow" />
      </div>

      <div className="c ctr">
        <div className="hd ctr rv">
          <span className="tag">CLINIC REPORTS</span>
          <h2>Your Clinic Found Locally Chosen First</h2>
          <p>Real Reports. Real Insights. Real Results</p>
        </div>

        <div className="note rv">Your Clinic Found Locally Chosen First</div>

        <div className="shot rv">
          <img
            src="/images/veloraskin.png"
            alt="Clinic marketing report preview"
          />
        </div>
      </div>
    </section>
  );
}
