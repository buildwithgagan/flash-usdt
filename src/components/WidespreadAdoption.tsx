
export const WidespreadAdoption = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-tether-dark-gray mb-6 text-center">
          Widespread adoption
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Flash USDT tokens are the most widely adopted stablecoins across major blockchains and protocols, supporting a growing number of use cases in the digital economy.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12">
          {/* Partner Logos - Using gray placeholders */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 flex items-center opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-24 h-6 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-tether-dark-gray mb-4">
            "The token that is disrupting the global financial industry"
          </h3>
        </div>
      </div>
    </section>
  );
};
