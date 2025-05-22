
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
              All Tether tokens (USD₮) are pegged at 1-to-1 with a matching fiat currency (e.g., 1 USD₮ = 1 USD) and are backed 100% by Tether's reserves. We publish a daily record of the current total assets and reserves.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-tether-primary hover:text-tether-dark underline text-sm">
                See Transparency Page
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              {/* Circular Design Element */}
              <div className="w-72 h-72 rounded-full bg-tether-primary relative overflow-hidden mx-auto">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white"></div>
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-tether-primary rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6z"/>
                    <path d="M12 11h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 0H6v2h2v-2z"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-white rounded-full border-4 border-tether-light flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-4 border-tether-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
