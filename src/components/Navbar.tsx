
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/d858fd52-056d-41a8-b060-b1157483ee7c.png" 
              alt="USDT Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-tether-dark-gray">USDT</span>
          </Link>
          <div className="hidden md:flex ml-10 space-x-8">
            <NavLink href="#future" text="Future" />
            <NavLink href="#transparent" text="Transparent" />
            <NavLink href="#adoption" text="Adoption" />
            <NavLink href="#faqs" text="FAQs" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle if it's an anchor link
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        // Scroll to the element with a smooth animation
        element.scrollIntoView({ behavior: 'smooth' });
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
