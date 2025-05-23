
export const BackedTransparent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-tether-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tether-dark-gray mb-6">
              100% backed and fully transparent
            </h2>
            <p className="text-gray-600 mb-6">
              All Flash USDT tokens (USD₮) are pegged at 1-to-1 with a matching fiat currency (e.g., 1 USD₮ = 1 USD) and are backed 100% by Flash USDT's reserves. We publish a daily record of the current total assets and reserves.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-tether-primary hover:text-tether-dark underline text-sm">
                See Transparency Page
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative w-64 h-64 p-4">
              <img 
                src="/lovable-uploads/ec147ca9-4d05-46c8-bba5-e0c91bcd5a7f.png" 
                alt="USDT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
