
import { Button } from "@/components/ui/button";

export const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-tether-dark-gray mb-10 text-center">
          Latest news
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <NewsCard 
            title="Tether and Paulo Freire Network: Collaborating to Provide Digital Asset Education in Turkey and the Region"
            date="15 April 2024"
            imageUrl="https://placehold.co/400x240/e2fafa/00a4a4"
          />
          <NewsCard 
            title="TUP and TUMS: A Commitment to Electronic Education Utensils in the Philippines"
            date="10 April 2024"
            imageUrl="https://placehold.co/400x240/e2fafa/00a4a4"
          />
        </div>
        
        <div className="text-center">
          <a href="#" className="text-tether-primary underline hover:text-tether-dark inline-flex items-center">
            Read all News
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

interface NewsCardProps {
  title: string;
  date: string;
  imageUrl: string;
}

const NewsCard = ({ title, date, imageUrl }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-gray-500 block mb-3">{date}</span>
        <h3 className="text-xl font-semibold text-tether-dark-gray mb-4 line-clamp-2">{title}</h3>
        <Button variant="link" className="text-tether-primary hover:text-tether-dark p-0 h-auto">
          Read more
        </Button>
      </div>
    </div>
  );
};
