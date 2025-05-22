
export const Footer = () => {
  return (
    <footer className="bg-tether-dark-gray text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* First Column with Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-tether-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path fill="white" d="M17.2 10.25c0-.451-.37-.82-.82-.82h-8.76c-.451 0-.82.369-.82.82v1.42h10.4v-1.42z"/>
                <path fill="white" d="M12 15.75c-2.069 0-3.75-1.681-3.75-3.75 0-2.069 1.681-3.75 3.75-3.75 2.069 0 3.75 1.681 3.75 3.75 0 2.069-1.681 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"/>
              </svg>
              <span className="ml-2 text-xl font-bold">tether</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Driving the Future of Money</h3>
            <p className="text-gray-400 text-sm mb-4">
              Tether tokens are the most widely adopted stablecoins, having pioneered the concept in the digital token space. 
              A disruptor to the conventional financial system and a trailblazer in the digital use of traditional currencies.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Resources</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#" text="Why Tether" />
              <FooterLink href="#" text="How it Works" />
              <FooterLink href="#" text="Knowledge Base" />
              <FooterLink href="#" text="Transparency" />
              <FooterLink href="#" text="Fees" />
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Company</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#" text="Careers" />
              <FooterLink href="#" text="Legal" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Cookie Policy" />
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Contact</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#" text="Support" />
              <FooterLink href="#" text="Request Integration" />
              <FooterLink href="#" text="Media Inquiries" />
              <FooterLink href="#" text="General Inquiries" />
              <FooterLink href="#" text="Legal Requests" />
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">© 2024 Tether. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white transition-colors">
        {text}
      </a>
    </li>
  );
};
