export default function Navigation() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#" className="logo" aria-label="Curex home">
          <img src="/images/image.png" alt="Curex" />
        </a>
        <ul>
          <li><a href="#">Local SEO Software</a></li>
          <li><a href="#">Listings &amp; SEO Services</a></li>
          <li><a href="#">Free Tools</a></li>
          <li><a href="#">Learning Hub</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <a className="btn" href="#">Run Free Scan</a>
      </div>
    </nav>
  );
}
