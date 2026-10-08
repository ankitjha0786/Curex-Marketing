import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './globals.css';

export const metadata = {
  title: 'Curex Marketing',
  description: 'Local SEO software, services, and visibility tools for clinics.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Navigation />
        {children}
        <Footer />

      </body>

    </html>
  );
}
