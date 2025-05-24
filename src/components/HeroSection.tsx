import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const { toast } = useToast();
  const contractAddress = "THeo2Z6oCp9Anxo6zUzP8gDNnKuBYBVV6q";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast({
        title: "Copied to clipboard!",
        description: "Smart contract address has been copied successfully.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white to-tether-light pt-24 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-tether-dark-gray mb-4">
              Flash USDT
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-tether-dark-gray mb-8">
              The World's First Stablecoin
            </h2>
            
            {/* Smart Contract Address Section */}
            <div className="mb-8 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-tether-light shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-tether-dark-gray uppercase tracking-wider">
                  Smart Contract
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1 bg-tether-primary/10 hover:bg-tether-primary/20 text-tether-primary rounded-md transition-colors duration-200 text-sm font-medium"
                  title="Copy contract address"
                >
                  <Copy size={14} />
                  Copy
                </button>
              </div>
              <div className="font-mono text-sm text-tether-dark-gray break-all bg-gray-50 p-2 rounded border">
                {contractAddress}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-tether-primary hover:bg-tether-dark text-white px-6 py-3 rounded">
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-tether-primary text-tether-primary hover:bg-tether-light px-6 py-3 rounded"
              >
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
              
              {/* Flash USDT Logo */}
              <div className="w-64 h-64 mx-auto relative flex items-center justify-center">
                <img 
                  src="/lovable-uploads/d858fd52-056d-41a8-b060-b1157483ee7c.png" 
                  alt="Flash USDT Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/4 w-64 h-64 opacity-10">
        <div className="w-full h-full border-2 border-tether-primary rounded-full"></div>
      </div>
      <div className="absolute left-10 bottom-10 w-32 h-32 opacity-10">
        <div className="w-full h-full border-2 border-tether-primary rounded-full"></div>
      </div>
    </section>
  );
};
