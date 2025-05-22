
import { Button } from "@/components/ui/button";

export const FutureOfMoney = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-tether-primary rounded-full p-8 w-64 h-64 mx-auto">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6z"/>
                <path d="M12 11h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 0H6v2h2v-2z"/>
              </svg>
              <span className="sr-only">Tether Logo</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-tether-dark-gray mb-6">
              Driving the Future of Money
            </h2>
            <p className="text-gray-600 mb-6">
              Tether tokens are assets that move across the blockchain just as easily as other digital currencies but that are pegged to real-world currencies on a 1-to-1 basis.
            </p>
            <p className="text-gray-600 mb-6">
              Tether tokens are referred to as stablecoins because they offer price stability as they are pegged to a fiat currency. This offers traders, merchants and funds a low volatility solution when exiting positions in the market.
            </p>
            <p className="text-gray-600 mb-6">
              All Tether tokens are pegged at 1-to-1 with a matching fiat currency and are backed 100% by Tether's reserves.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="link" className="text-tether-primary hover:text-tether-dark underline">
                Learn More About Tether
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
