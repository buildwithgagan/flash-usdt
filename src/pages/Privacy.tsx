import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-tether-dark-gray mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Last updated: December 2024
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information to provide better services to our users and ensure compliance with applicable regulations.
                </p>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Identity verification documents (when required for KYC compliance)</li>
                  <li>Contact information (email, phone number)</li>
                  <li>Transaction history and wallet addresses</li>
                  <li>IP addresses and device information</li>
                </ul>

                <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Usage Data</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>How you interact with our services</li>
                  <li>Transaction patterns and frequencies</li>
                  <li>API usage and integration data</li>
                  <li>Error logs and performance metrics</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li><strong>Service Provision:</strong> Processing transactions and providing Flash Validity verification</li>
                  <li><strong>Compliance:</strong> Meeting regulatory requirements including AML and KYC obligations</li>
                  <li><strong>Security:</strong> Detecting and preventing fraud, abuse, and security threats</li>
                  <li><strong>Communication:</strong> Sending important updates about our services</li>
                  <li><strong>Improvement:</strong> Analyzing usage to enhance our platform and develop new features</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Data Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell your personal information. We may share your information in limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or regulatory authorities</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure data centers with physical access controls</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  Depending on your jurisdiction, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your information (subject to legal requirements)</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about this Privacy Policy or your personal information:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Privacy Team</strong><br />
                    Email: support@f-usdt.xyz<br />
                    Subject: Privacy Inquiry
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

export default Privacy;
