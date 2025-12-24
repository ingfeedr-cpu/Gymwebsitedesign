import { Check } from 'lucide-react';
import { Button } from './ui/button';

const individualPlans = [
  {
    name: '1 Month',
    price: '180',
    originalPrice: '185',
    period: 'month',
    savings: 'Save 5 AED',
    features: [
      'Full gym access',
      'Modern equipment',
      'Locker room facilities',
      'Free parking',
      'Professional support'
    ]
  },
  {
    name: '3 Months',
    price: '450',
    originalPrice: '470',
    period: '3 months',
    savings: 'Save 20 AED',
    popular: true,
    features: [
      'Everything in 1 Month',
      'Extended commitment discount',
      'Progress tracking',
      'Priority support',
      'Nutrition guidance'
    ]
  },
  {
    name: '6 Months',
    price: '800',
    originalPrice: '898',
    period: '6 months',
    savings: 'Save 98 AED',
    features: [
      'Everything in 3 Months',
      'Best value for commitment',
      'Free fitness assessment',
      'Personalized training plan',
      'Diet consultation'
    ]
  },
  {
    name: '1 Year',
    price: '1500',
    originalPrice: '1655',
    period: 'year',
    savings: 'Save 155 AED',
    features: [
      'Everything in 6 Months',
      'Maximum savings',
      'VIP member status',
      'Guest passes included',
      'Priority class booking'
    ]
  }
];

const couplePlans = [
  {
    name: '1 Month',
    price: '330',
    period: 'month',
    features: [
      'Full gym access for 2',
      'Couple training sessions',
      'Shared locker facilities',
      'Free parking',
      'Professional support'
    ]
  },
  {
    name: '3 Months',
    price: '880',
    period: '3 months',
    popular: true,
    features: [
      'Everything in 1 Month',
      'Extended discount',
      'Partner workout plans',
      'Joint progress tracking',
      'Nutrition guidance for both'
    ]
  },
  {
    name: '6 Months',
    price: '1500',
    period: '6 months',
    features: [
      'Everything in 3 Months',
      'Best couple value',
      'Free fitness assessments',
      'Personalized couple plans',
      'Diet consultations'
    ]
  },
  {
    name: '1 Year',
    price: '2800',
    period: 'year',
    features: [
      'Everything in 6 Months',
      'Maximum couple savings',
      'VIP couple status',
      'Guest passes included',
      'Priority booking'
    ]
  }
];

export function Pricing() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971523131909', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-500">⭐</span>
            <span className="text-white/70 uppercase text-sm tracking-wider">Pricing</span>
          </div>
          <h2 className="text-white uppercase mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            MEMBERSHIP PLANS
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            Choose the perfect plan for your fitness journey
          </p>
          
          {/* Tabby Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-2 rounded-full mb-8">
            <span className="uppercase tracking-wider">Split Payments Available with Tabby</span>
          </div>
        </div>

        {/* Individual Plans */}
        <div className="mb-16">
          <h3 className="text-white uppercase text-center mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.02em' }}>
            Individual Gym Membership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {individualPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 ${
                  plan.popular
                    ? 'bg-yellow-500 text-black'
                    : 'bg-zinc-900 text-white border border-zinc-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-yellow-500 px-4 py-1 rounded-full text-xs uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className={`uppercase mb-2 ${plan.popular ? 'text-black' : 'text-white'}`} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.02em' }}>
                    {plan.name}
                  </h4>
                  
                  {plan.savings && (
                    <p className="text-yellow-500 text-sm mb-2">{plan.savings}</p>
                  )}
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {plan.originalPrice && (
                      <span className={`line-through text-sm ${plan.popular ? 'text-black/50' : 'text-white/50'}`}>
                        {plan.originalPrice} AED
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-baseline justify-center gap-2">
                    <span className={`${plan.popular ? 'text-black' : 'text-white'}`} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', letterSpacing: '0.02em' }}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-black/70' : 'text-white/70'}`}>
                      AED
                    </span>
                  </div>
                  <p className={`text-xs ${plan.popular ? 'text-black/70' : 'text-white/70'}`}>
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-black' : 'text-yellow-500'
                      }`} />
                      <span className={plan.popular ? 'text-black' : 'text-white/90'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleWhatsApp}
                  className={`w-full uppercase tracking-wider text-sm ${
                    plan.popular
                      ? 'bg-black text-yellow-500 hover:bg-zinc-900'
                      : 'bg-yellow-500 text-black hover:bg-yellow-600'
                  }`}
                >
                  Join Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Couple Plans */}
        <div>
          <h3 className="text-white uppercase text-center mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.02em' }}>
            Couple Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {couplePlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 ${
                  plan.popular
                    ? 'bg-yellow-500 text-black'
                    : 'bg-zinc-900 text-white border border-zinc-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-yellow-500 px-4 py-1 rounded-full text-xs uppercase tracking-wider">
                    Best Value
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className={`uppercase mb-4 ${plan.popular ? 'text-black' : 'text-white'}`} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.02em' }}>
                    {plan.name}
                  </h4>
                  
                  <div className="flex items-baseline justify-center gap-2">
                    <span className={`${plan.popular ? 'text-black' : 'text-white'}`} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', letterSpacing: '0.02em' }}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-black/70' : 'text-white/70'}`}>
                      AED
                    </span>
                  </div>
                  <p className={`text-xs ${plan.popular ? 'text-black/70' : 'text-white/70'}`}>
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-black' : 'text-yellow-500'
                      }`} />
                      <span className={plan.popular ? 'text-black' : 'text-white/90'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleWhatsApp}
                  className={`w-full uppercase tracking-wider text-sm ${
                    plan.popular
                      ? 'bg-black text-yellow-500 hover:bg-zinc-900'
                      : 'bg-yellow-500 text-black hover:bg-yellow-600'
                  }`}
                >
                  Join Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
