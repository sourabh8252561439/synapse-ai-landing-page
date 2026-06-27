import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Sparkles } from 'lucide-react';

interface PricingProps {
  onOpenSignup: () => void;
  onOpenDemo: () => void;
}

export default function Pricing({ onOpenSignup, onOpenDemo }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [workflowVolume, setWorkflowVolume] = useState<number>(100000); // Default to 100k tasks

  const formatVolume = (val: number) => {
    if (val >= 1000000) {
      return `${(val / 1000000).toFixed(1)}M`;
    }
    return `${(val / 1000).toFixed(0)}K`;
  };

  // Pricing Model Rules
  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for early-stage teams testing basic AI pipelines.',
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        'Up to 10,000 runs / month',
        '3 active visual pipelines',
        'Standard LLM latency priority',
        'Single database cluster sync',
        'Community email support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Perfect for fast-growing companies automating core operations.',
      priceMonthly: 79,
      priceYearly: 59, // ~25% off
      features: [
        'Up to 250,000 runs / month',
        'Unlimited active visual pipelines',
        'High-speed LLM gateway API',
        'Multi-regional cluster syncing',
        'HubSpot, Slack & Salesforce connectors',
        'Dedicated SLA email support',
        'Advanced visual analytics tools',
      ],
      cta: 'Get Professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom setups for high-scale, secure enterprise deployments.',
      priceMonthly: 349,
      priceYearly: 279,
      features: [
        'Unlimited monthly runs',
        'Custom fine-tuned LLM support',
        'Zero-delay gateway pipelines',
        'SOC-2 certification compliance package',
        'SAML/SSO secure user provisioning',
        '24/7 Phone & Slack dedicated engineer',
        'Custom webhook pipelines built for you',
      ],
      cta: 'Contact Enterprise',
      popular: false,
    },
  ];

  // Dynamic Plan recommendation based on volume slider
  const getRecommendedPlan = (vol: number) => {
    if (vol <= 25000) return 'Starter';
    if (vol <= 500000) return 'Professional';
    return 'Enterprise';
  };

  const recPlan = getRecommendedPlan(workflowVolume);

  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10 inline-block mb-3 backdrop-blur-md">
            Simple & Predictable Billing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Plans Built for Scale
          </h2>
          <p className="text-zinc-400 font-sans text-base sm:text-lg">
            Choose a plan that fits your execution volume. All plans include 14-day free trials, and can be adjusted anytime.
          </p>

          {/* Billing Toggle Button */}
          <div className="flex items-center justify-center mt-10 gap-4">
            <span className={`text-sm font-semibold transition-colors ${billingPeriod === 'monthly' ? 'text-white' : 'text-zinc-400'}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
              className="relative h-7 w-14 rounded-full bg-zinc-850 p-0.5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              id="billing-period-toggle"
            >
              <div
                className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${billingPeriod === 'yearly' ? 'text-white' : 'text-zinc-400'}`}>
              Billed Yearly
              <span className="text-[10px] bg-indigo-400/15 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full font-bold">
                Save 25%
              </span>
            </span>
          </div>
        </div>

        {/* Interactive Slider Tool - Frosted Glass Container */}
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-16 backdrop-blur-md shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-zinc-500">Volume Estimator</span>
              <h4 className="text-sm font-bold text-zinc-200 mt-0.5">How many runs do you need?</h4>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-indigo-400 font-display">
                {formatVolume(workflowVolume)}
              </span>
              <span className="text-xs text-zinc-400 font-mono block">runs / mo</span>
            </div>
          </div>

          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={workflowVolume}
            onChange={(e) => setWorkflowVolume(Number(e.target.value))}
            className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-400 mb-4"
            id="volume-slider"
          />

          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>10K runs</span>
            <span>500K runs</span>
            <span>1M runs</span>
          </div>

          {/* Suggested Plan Badge */}
          <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-zinc-400 flex items-center gap-1.5">
              <Info className="h-4 w-4 text-indigo-400" />
              Recommended Plan:
            </span>
            <span className="font-bold text-white bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-lg">
              {recPlan === 'Starter' && 'Starter Plan (Free)'}
              {recPlan === 'Professional' && 'Professional Plan'}
              {recPlan === 'Enterprise' && 'Enterprise Plan'}
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const isRec = recPlan === plan.name;
            const price = billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceYearly;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-md ${
                  plan.popular 
                    ? 'border-indigo-400 bg-indigo-500/5 shadow-xl shadow-indigo-500/5' 
                    : isRec
                    ? 'border-indigo-500/40 bg-white/10'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-indigo-400 text-black text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wide shadow flex items-center gap-1 font-sans">
                    <Sparkles className="h-3.5 w-3.5 fill-black" /> Most Popular
                  </span>
                )}

                {/* Rec Badge */}
                {!plan.popular && isRec && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-zinc-800 text-indigo-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-indigo-500/30">
                    Suggested Match
                  </span>
                )}

                <div>
                  <h3 className="font-display text-xl font-bold text-gray-100 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-white font-display">
                      ${price}
                    </span>
                    {price > 0 && (
                      <span className="text-zinc-400 text-sm ml-2 font-mono">
                        / mo
                      </span>
                    )}
                  </div>

                  {/* Pricing Features */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <Check className="h-4.5 w-4.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={plan.name === 'Enterprise' ? onOpenDemo : onOpenSignup}
                  className={`w-full py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer text-center ${
                    plan.popular
                      ? 'bg-white hover:bg-zinc-100 text-black shadow-lg shadow-indigo-500/10'
                      : 'bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
