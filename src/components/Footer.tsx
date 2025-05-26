import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-tether-dark-gray text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* First Column with Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/637bbd2d-57f4-4448-b9fe-76cf8e5e15d1.png" 
                alt="Flash USDT Logo" 
                className="h-12 w-auto"
              />
              <span className="ml-2 text-xl font-bold">Flash USDT</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Flash USDT tokens are the most widely adopted stablecoins, having pioneered the concept in the digital token space. 
              A disruptor to the conventional financial system and a trailblazer in the digital use of traditional currencies.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Resources</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#validity" text="Flash Validity" />
              <FooterLink href="#adoption" text="Adoption" />
              <FooterLink href="#faqs" text="FAQs" />
              <FooterLink href="#" text="Fees" />
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Company</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/legal" text="Legal" />
              <FooterLink href="/privacy" text="Privacy Policy" />
              <FooterLink href="/cookies" text="Cookie Policy" />
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@f-usdt.xyz" className="text-gray-400 hover:text-white transition-colors">
                  support@f-usdt.xyz
                </a>
              </li>
              <li>
                <a href="https://x.com/vib88_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  X.com
                </a>
              </li>
              <li>
                <a href="https://t.me/flashusdt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">© 2025 Flash USDT. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="https://x.com/vib88_" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://t.me/flashusdt" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => {
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

  // Use Link for internal routes, regular anchor for external or hash links
  if (href.startsWith('/')) {
    return (
      <li>
        <Link 
          to={href} 
          className="text-gray-400 hover:text-white transition-colors"
        >
          {text}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-white transition-colors" 
        onClick={handleClick}
      >
        {text}
      </a>
    </li>
  );
};
