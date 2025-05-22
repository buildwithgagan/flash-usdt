
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-20 bg-tether-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <FAQItem value="item-1" question="What is Tether?">
              <p>
                Launched in 2014, Tether tokens (USD₮) pioneered the stablecoin model and are the most widely traded. 
                Tether tokens offer the stability and simplicity of fiat currencies coupled with the innovative nature 
                of blockchain technology, representing a perfect combination of both worlds.
              </p>
            </FAQItem>
            
            <FAQItem value="item-2" question="How do Tether tokens work?">
              <p>
                Tether tokens are assets that move across the blockchain just as easily as other digital currencies 
                but that are pegged to real-world currencies on a 1-to-1 basis. Tether tokens are referred to as stablecoins 
                because they offer price stability as they are pegged to a fiat currency.
              </p>
            </FAQItem>
            
            <FAQItem value="item-3" question="What are Tether tokens?">
              <p>
                Tether tokens are assets that move across the blockchain just as easily as other digital currencies 
                but that are pegged to real-world currencies on a 1-to-1 basis.
              </p>
            </FAQItem>
            
            <FAQItem value="item-4" question="What currencies and commodities does Tether support?">
              <p>
                Tether supports US Dollar (USD₮), Euro (EUR₮), offshore Chinese Yuan (CNH₮), 
                Mexican Peso (MXN₮), and Gold (XAU₮).
              </p>
            </FAQItem>
            
            <FAQItem value="item-5" question="Who can use Tether tokens?">
              <p>
                Tether tokens enable businesses, individuals and institutions to move value across 
                the blockchain without the inherent volatility of digital currencies.
              </p>
            </FAQItem>
          </Accordion>
          
          <div className="mt-8 text-center">
            <a href="#" className="text-white underline hover:text-tether-light inline-flex items-center">
              Read all FAQs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  value: string;
  question: string;
  children: React.ReactNode;
}

const FAQItem = ({ value, question, children }: FAQItemProps) => {
  return (
    <AccordionItem value={value} className="border-b border-white/20">
      <AccordionTrigger className="text-left font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-white/90 text-sm">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};
