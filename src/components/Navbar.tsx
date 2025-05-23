
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg className="h-8 w-8 text-tether-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
              <path fill="white" d="M17.2 10.25c0-.451-.37-.82-.82-.82h-8.76c-.451 0-.82.369-.82.82v1.42h10.4v-1.42z"/>
              <path fill="white" d="M12 15.75c-2.069 0-3.75-1.681-3.75-3.75 0-2.069 1.681-3.75 3.75-3.75 2.069 0 3.75 1.681 3.75 3.75 0 2.069-1.681 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"/>
            </svg>
            <span className="ml-2 text-xl font-bold text-tether-dark-gray">tether</span>
          </Link>
          <div className="hidden md:flex ml-10 space-x-8">
            <NavLink href="#" text="Why Tether?" />
            <NavLink href="#" text="USDT" />
            <NavLink href="#" text="Euro" />
            <NavLink href="#" text="Tether Gold" />
            <NavLink href="#" text="Transparency" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link to={href} className="text-gray-600 hover:text-tether-primary text-sm font-medium">
      {text}
    </Link>
  );
};
