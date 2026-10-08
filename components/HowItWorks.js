const steps = [
  {
    number: '1',
    title: 'Search Your Clinic',
    description: 'Type your clinic name - we auto-detect it from Google.'
  },
  {
    number: '2',
    title: 'See Your Quick Score',
    description: 'Instant visibility score from your Google presence.'
  },
  {
    number: '3',
    title: 'Unlock Full Report',
    description: 'Enter your email - we run the deep scan and send the full report.'
  },
  {
    number: '4',
    title: 'Get the Action Plan',
    description: 'Receive a prioritized roadmap with the right next steps, tools, and services.'
  }
];

export default function HowItWorks() {
  return (
    <section className="alt">
      <div className="c ctr">
        <div className="hd ctr rv">
          <span className="tag">HOW IT WORKS</span>
          <h2>Simple, fast, and fully automated</h2>
        </div>

        <div className="st rv">
          {steps.map((step) => (
            <div className="card" key={step.number}>
              <b>{step.number}</b>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
