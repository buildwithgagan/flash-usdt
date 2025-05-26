
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/');
      // Add a small delay to ensure the page loads before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={handleLogoClick}>
            <img 
              src="/lovable-uploads/637bbd2d-57f4-4448-b9fe-76cf8e5e15d1.png" 
              alt="Flash USDT Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-tether-dark-gray">Flash USDT</span>
          </Link>
          <div className="hidden md:flex ml-10 space-x-8">
            <NavLink href="#validity" text="Flash Validity" />
            <NavLink href="#adoption" text="Adoption" />
            <NavLink href="#faqs" text="FAQs" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Add a delay to ensure the page loads before scrolling
        setTimeout(() => {
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, scroll directly
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <a 
      href={href} 
      className="text-gray-600 hover:text-tether-primary text-sm font-medium"
      onClick={handleClick}
    >
      {text}
    </a>
  );
};
