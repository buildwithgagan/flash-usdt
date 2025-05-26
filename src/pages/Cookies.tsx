import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-tether-dark-gray mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Last updated: December 2024
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">What Are Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Essential Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies are necessary for our website to function properly. They enable basic 
                  functions like page navigation, access to secure areas, and transaction processing.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Session management cookies</li>
                  <li>Security and authentication cookies</li>
                  <li>Load balancing cookies</li>
                </ul>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Google Analytics cookies</li>
                  <li>Performance monitoring cookies</li>
                  <li>User behavior tracking cookies</li>
                </ul>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Functional Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your preferences and settings.
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Language preference cookies</li>
                  <li>Theme and display preference cookies</li>
                  <li>User interface customization cookies</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Third-Party Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Some cookies are placed by third-party services that appear on our pages. These may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Social Media Plugins:</strong> For social sharing functionality</li>
                  <li><strong>Security Services:</strong> For fraud prevention and security monitoring</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Managing Cookies</h2>
                <p className="text-gray-600 mb-4">
                  You have several options for managing cookies:
                </p>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Browser Settings</h3>
                <p className="text-gray-600 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when you close your browser</li>
                </ul>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Opt-Out Tools</h3>
                <p className="text-gray-600 mb-4">
                  You can opt out of analytics cookies using these tools:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Google Analytics Opt-out Browser Add-on</li>
                  <li>Browser privacy settings</li>
                  <li>Do Not Track browser settings</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Impact of Disabling Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Please note that disabling certain cookies may affect your experience on our website:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Some features may not work properly</li>
                  <li>You may need to re-enter information repeatedly</li>
                  <li>Personalization features may be limited</li>
                  <li>Security features may be compromised</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about our use of cookies:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Privacy Team</strong><br />
                    Email: support@f-usdt.xyz<br />
                    Subject: Cookie Policy Inquiry
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
