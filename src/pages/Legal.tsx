import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-tether-dark-gray mb-8">Legal Information</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Terms of Service</h2>
                <p className="text-gray-600 mb-4">
                  By using Flash USDT services, you agree to comply with our terms and conditions. 
                  These terms govern your use of our platform, tokens, and associated services.
                </p>
                
                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Acceptance of Terms</h3>
                <p className="text-gray-600 mb-4">
                  Your access to and use of Flash USDT services constitutes your acceptance of these terms. 
                  If you do not agree to these terms, please do not use our services.
                </p>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Use of Services</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You are responsible for maintaining the security of your wallet and private keys</li>
                  <li>You agree not to use our services for any illegal or unauthorized purposes</li>
                  <li>You understand that cryptocurrency transactions are irreversible</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Regulatory Compliance</h2>
                <p className="text-gray-600 mb-4">
                  Flash USDT operates in compliance with applicable financial regulations and maintains 
                  appropriate licenses where required. We work closely with regulatory authorities to 
                  ensure our operations meet the highest standards.
                </p>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Anti-Money Laundering (AML)</h3>
                <p className="text-gray-600 mb-4">
                  We implement robust AML procedures including transaction monitoring, 
                  customer verification, and suspicious activity reporting to prevent financial crimes.
                </p>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Know Your Customer (KYC)</h3>
                <p className="text-gray-600 mb-4">
                  Certain services may require identity verification to comply with regulatory requirements 
                  and ensure the security of our platform.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Liability and Disclaimers</h2>
                <p className="text-gray-600 mb-4">
                  Flash USDT services are provided "as is" without warranties. Users acknowledge the risks 
                  associated with cryptocurrency transactions and agree that Flash USDT is not liable for 
                  losses resulting from market volatility, technical issues, or user error.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For legal inquiries, compliance questions, or regulatory matters, please contact our legal team:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Legal Department</strong><br />
                    Email: legal@flashusdt.com<br />
                    Subject: Legal Inquiry - [Your Topic]
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

export default Legal;
