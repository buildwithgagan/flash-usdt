
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-tether-dark-gray mb-8">About Flash USDT</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Flash USDT is pioneering the future of digital payments with the world's most trusted stablecoin technology.
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  We're building the infrastructure for a more accessible, transparent, and efficient financial system. 
                  Flash USDT tokens serve as the bridge between traditional finance and the digital economy, 
                  enabling instant, secure, and cost-effective transactions worldwide.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">What We Do</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Stablecoin Innovation</h3>
                    <p className="text-gray-600">
                      Our USDT tokens are fully backed and maintain a 1:1 peg with the US Dollar, 
                      providing stability in the volatile crypto market.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Flash Validity</h3>
                    <p className="text-gray-600">
                      Revolutionary verification system that ensures USDT transactions are not just fast, 
                      but secure and verifiable in real-time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Global Adoption</h3>
                    <p className="text-gray-600">
                      Working with businesses, streamers, and financial institutions worldwide to 
                      integrate reliable cryptocurrency payment solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-tether-dark-gray mb-3">Transparency</h3>
                    <p className="text-gray-600">
                      Daily transparency reports and real-time reserve verification to maintain 
                      trust and accountability in our ecosystem.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-tether-dark-gray mb-6">Our Values</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-tether-primary font-bold mr-3">•</span>
                    <div>
                      <strong>Transparency:</strong> We believe in open, verifiable operations with daily reporting of our reserves and activities.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tether-primary font-bold mr-3">•</span>
                    <div>
                      <strong>Security:</strong> Advanced cryptographic protocols and multi-layered security measures protect our users' assets.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tether-primary font-bold mr-3">•</span>
                    <div>
                      <strong>Innovation:</strong> Continuously developing new solutions like Flash Validity to enhance the cryptocurrency experience.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tether-primary font-bold mr-3">•</span>
                    <div>
                      <strong>Accessibility:</strong> Making digital finance accessible to everyone, from individual users to large enterprises.
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
