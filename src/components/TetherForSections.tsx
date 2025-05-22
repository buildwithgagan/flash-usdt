
import { Button } from "@/components/ui/button";

export const TetherForSections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TetherForCard 
            title="Tether for Individuals"
            icon="👤"
            description="Fast, low-cost digital transactions for all. Send money across the globe in seconds with minimal fees."
          />
          <TetherForCard 
            title="Tether for Merchants"
            icon="🏪"
            description="Accept payments from anyone, anywhere in the world. Fast settlement, low fees, no chargebacks."
          />
          <TetherForCard 
            title="Tether for Exchanges"
            icon="📊"
            description="The most liquid, stable trading pair. Enhance your exchange with the world's most used stablecoin."
          />
        </div>
      </div>
    </section>
  );
};

interface TetherForCardProps {
  title: string;
  icon: string;
  description: string;
}

const TetherForCard = ({ title, icon, description }: TetherForCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-tether-dark-gray">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">
        {description}
      </p>
      <Button variant="link" className="text-tether-primary hover:text-tether-dark p-0 h-auto text-sm">
        Learn more
      </Button>
    </div>
  );
};
