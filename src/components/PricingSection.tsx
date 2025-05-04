
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "$0/Month",
      features: [
        "Basic access to platform",
        "Connect with 5 travelers",
        "Limited storage",
        "Basic customer support",
        "Access to community forums"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      title: "Premium",
      price: "$70/Month",
      features: [
        "Full access to platform",
        "Unlimited traveler connections",
        "Unlimited storage",
        "Priority customer support",
        "Verified profile badge",
        "Advanced analytics"
      ],
      buttonText: "Get Started",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 relative">
      <div className="geometric-overlay-bottom"></div>
      
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Plans for all sizes</h2>
        <p className="text-gray-400">Choose the plan that works best for you</p>
      </div>
      
      <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-6">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-avendry-gray-dark rounded-xl p-6 flex flex-col relative ${
              plan.popular ? 'border border-avendry-purple' : ''
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-2xl font-bold mb-6">{plan.price}</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                  <div className="w-4 h-4 bg-avendry-purple rounded-full shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full ${
                plan.popular 
                  ? 'bg-avendry-purple hover:bg-avendry-purple-dark' 
                  : 'bg-black border border-gray-700 hover:bg-gray-900'
              } text-white`}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
