
import { Button } from "@/components/ui/button";

export const FutureOfMoney = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <img 
                src="/lovable-uploads/097c7ca3-4b91-4175-9c6f-1b822378f012.png" 
                alt="Flash USDT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-tether-dark-gray mb-6">
              Driving the Future of Money
            </h2>
            <p className="text-gray-600 mb-6">
              Flash USDT tokens are assets that move across the blockchain just as easily as other digital currencies but that are pegged to real-world currencies on a 1-to-1 basis.
            </p>
            <p className="text-gray-600 mb-6">
              Flash USDT tokens are referred to as stablecoins because they offer price stability as they are pegged to a fiat currency. This offers traders, merchants and funds a low volatility solution when exiting positions in the market.
            </p>
            <p className="text-gray-600 mb-6">
              All Flash USDT tokens are pegged at 1-to-1 with a matching fiat currency and are backed 100% by Flash USDT's reserves.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="link" className="text-tether-primary hover:text-tether-dark underline">
                Learn More About Flash USDT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
