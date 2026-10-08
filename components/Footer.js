const companyLinks = ['Home', 'About', 'Pricing', 'Contact'];
const solutions = [
  'Medical Listings & Local SEO Services',
  'Medical Website Design',
  'Medical SEO Services',
  'Citation Builder',
  'Citation Tracker',
  'GBP Reinstatement Service',
  'Text Replacement Service'
];
const freeTools = [
  'Local Search Preview Tool',
  'Competitor Breakdown Tool',
  'Google Review Link Generator',
  'Missed Revenue Calculator'
];
const guides = [
  'Local SEO',
  'Learning Hub',
  'Top Citation Sources by Industry',
  'Clinic SEO Metric Variations',
  'Hidden Address GBP Guide',
  'Clinic Visibility Methodology'
];
const trust = ['Editorial Team', 'Local SEO Review Team', 'Clinic Directory', 'Sitemap'];

export default function Footer() {
  return (
    <footer>
      <div className="c">
        <div className="fg">
          <div>
            <div className="logo" aria-label="Curex home">
              <span className="logo-mark" aria-hidden="true" />
              <span>Curex</span>
            </div>
            <p>
              Local SEO software, services, and visibility tools for clinics, local businesses, agencies, and multi-location brands.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Solutions</h4>
            <ul>
              {solutions.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Free Tools</h4>
            <ul>
              {freeTools.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Guides</h4>
            <ul>
              {guides.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Trust</h4>
            <ul>
              {trust.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bt">
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Terms of Service</span>
          <span>Disclaimer</span>
        </div>
      </div>
    </footer>
  );
}
