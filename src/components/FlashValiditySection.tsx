import { Shield, Clock, CheckCircle, Zap } from "lucide-react";

export const FlashValiditySection = () => {
  return (
    <section id="validity" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tether-dark-gray mb-6">
            What is Flash USDT Validity — And Why It Matters for You
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're a company onboarding crypto payments or a streamer earning from online casinos, 
            one thing is clear: speed, security, and certainty matter when you're dealing with money. Especially in USDT.
          </p>
          <p className="text-lg text-gray-600 mt-4 font-medium">
            But not all USDT transfers are equal.
          </p>
        </div>

        {/* Flash USDT Validity Intro */}
        <div className="bg-gradient-to-r from-tether-light/50 to-tether-primary/10 rounded-xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-tether-dark-gray mb-4">
              Enter: Flash USDT Validity
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A new standard for confirming that the USDT you've received is not just visible in your wallet — 
              but secure, verifiable, and safe to act on.
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-tether-dark-gray mb-8 text-center">Why This Matters</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In the crypto world, USDT (Tether) transactions are fast — but finality isn't always instant. 
              Especially on chains like TRON, a USDT transfer can appear before it's been validated. 
              That opens the door to potential:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-2">Reversal risks</h4>
                <p className="text-red-700 text-sm">(in rare edge cases)</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Fraudulent screenshots</h4>
                <p className="text-orange-700 text-sm">claiming "sent" funds</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Misuse in workflows</h4>
                <p className="text-yellow-700 text-sm">like casino deposits or instant commissions</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-xl font-semibold text-tether-primary">Flash USDT Validity closes that gap.</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-tether-dark-gray mb-8 text-center">How It Works</h3>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Our system checks on-chain confirmation status across supported blockchains 
            (e.g. TRON, Ethereum, BNB Chain) to verify:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-tether-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-tether-primary" />
              </div>
              <h4 className="font-semibold text-tether-dark-gray mb-2">Transaction Finalized</h4>
              <p className="text-sm text-gray-600">Confirms the transaction has completed</p>
            </div>
            <div className="text-center">
              <div className="bg-tether-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-tether-primary" />
              </div>
              <h4 className="font-semibold text-tether-dark-gray mb-2">No Double-Spends</h4>
              <p className="text-sm text-gray-600">Ensures no fork-risk scenarios are present</p>
            </div>
            <div className="text-center">
              <div className="bg-tether-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-tether-primary" />
              </div>
              <h4 className="font-semibold text-tether-dark-gray mb-2">Wallet Ownership</h4>
              <p className="text-sm text-gray-600">Verifies the wallet actually owns the funds</p>
            </div>
            <div className="text-center">
              <div className="bg-tether-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-tether-primary" />
              </div>
              <h4 className="font-semibold text-tether-dark-gray mb-2">Correct Conditions</h4>
              <p className="text-sm text-gray-600">Validates timestamp and payment conditions</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl font-semibold text-tether-primary">
              Think of it as "proof of clean USDT" — at lightning speed.
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* For Businesses */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-tether-dark-gray mb-6">For Businesses Accepting USDT</h3>
            <p className="text-gray-600 mb-6">If you're onboarding crypto payments:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">No more guessing whether a transaction is "really in"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Automate workflows with webhooks triggered only after full Flash Validity</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Avoid refund disputes or double-counting revenue</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Enhance compliance tracking with verified payment logs</span>
              </li>
            </ul>
          </div>

          {/* For Streamers */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-tether-dark-gray mb-6">For Streamers & Casino Affiliates</h3>
            <p className="text-gray-600 mb-6">If you're running giveaways, shoutouts, or handling fast-paced casino payments:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Know instantly when you've been paid — and when it's safe to deliver bonuses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Protect yourself from fake receipts or early-appearing but invalid transfers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Speed up your engagement flow with trustable instant checks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* One-Click Integration */}
        <div className="bg-gradient-to-r from-tether-primary/10 to-tether-dark/10 rounded-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-tether-dark-gray mb-6 text-center">One-Click Integration</h3>
          <p className="text-lg text-gray-600 mb-8 text-center">Our API & dashboard make it dead-simple to:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Zap className="w-8 h-8 text-tether-primary" />
              </div>
              <h4 className="font-semibold text-tether-dark-gray mb-2">Verify USDT deposits</h4>
              <p className="text-sm text-gray-600">in seconds</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Clock className="w-8 h-8 text-tether-primary" />
              </div>
              <h4 className="font-semibold text-tether-dark-gray mb-2">Track validity status</h4>
              <p className="text-sm text-gray-600">in real time</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="w-8 h-8 text-tether-primary" />
              </div>
              <h4 className="font-semibold text-tether-dark-gray mb-2">Receive alerts</h4>
              <p className="text-sm text-gray-600">for invalid or risky transfers</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-tether-dark-gray mb-4">
            Speed You Can Trust. Validity You Can Act On.
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Flash USDT Validity isn't just about speed — it's about confidence.
            The confidence to release product. Pay out bonuses. Accept clients. Reward affiliates. All without fear.
          </p>
          <div className="bg-tether-primary/5 rounded-xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-tether-dark-gray mb-4">Get Started Today</h4>
            <p className="text-gray-600 mb-6">
              Whether you're an operations lead, a crypto cashier, or a casino content creator — 
              Flash USDT Validity lets you move with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
