
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-tether-light pt-24 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-tether-dark-gray mb-4">
              Tether token
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-tether-dark-gray mb-8">
              The World's First Stablecoin
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-tether-primary hover:bg-tether-dark text-white px-6 py-3 rounded">
                Get Started
              </Button>
              <Button variant="outline" className="border-tether-primary text-tether-primary hover:bg-tether-light px-6 py-3 rounded">
                Learn More About USDT
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Background Design Elements */}
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-tether-light opacity-60"></div>
              <div className="absolute right-20 bottom-0 w-24 h-24 rounded-full bg-tether-light opacity-40"></div>
              <div className="absolute left-10 top-10 w-16 h-16 rounded-full bg-tether-light opacity-30"></div>
              
              {/* Tether Logo */}
              <div className="bg-tether-primary rounded-full p-8 w-64 h-64 mx-auto relative">
                <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6z"/>
                  <path d="M12 11h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 0H6v2h2v-2z"/>
                </svg>
                <span className="sr-only">Tether Logo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern Elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 opacity-10">
        <div className="w-full h-full border-2 border-tether-primary rounded-full"></div>
      </div>
      <div className="absolute left-10 bottom-10 w-32 h-32 opacity-10">
        <div className="w-full h-full border-2 border-tether-primary rounded-full"></div>
      </div>
    </section>
  );
};
