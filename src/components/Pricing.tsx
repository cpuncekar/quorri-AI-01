import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  isPopular = false,
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-purple-600',
}) => (
  <div className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${isPopular ? 'ring-2 ring-purple-500 transform scale-105 lg:scale-110 shadow-lg' : 'hover:shadow-md'}`}>
    {isPopular && (
      <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white text-sm text-center py-1.5 font-medium`}>
        Most Popular
      </div>
    )}
    
    <div className="p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-end mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-500 ml-1">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} flex items-center justify-center text-white mr-3 mt-0.5`}>
              <Check size={12} />
            </span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-lg font-medium transition-all ${
        isPopular 
          ? `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white hover:shadow-lg` 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}>
        {buttonText}
      </button>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to match your professional needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            title="Starter"
            price="$29"
            period="/month"
            description="Perfect for individuals looking to enhance productivity"
            features={[
              "Basic AI assistance",
              "10 advanced queries per day",
              "Document analysis (up to 10 pages)",
              "Email support",
              "Mobile app access"
            ]}
            buttonText="Get Started"
            gradientFrom="from-blue-400"
            gradientTo="to-blue-600"
          />
          
          <PricingTier
            title="Professional"
            price="$79"
            period="/month"
            description="Ideal for professionals with complex work requirements"
            features={[
              "Advanced AI assistance",
              "Unlimited queries",
              "Document analysis (unlimited)",
              "Priority support",
              "Team collaboration features",
              "Custom workflows",
              "API access"
            ]}
            buttonText="Start Free Trial"
            isPopular={true}
          />
          
          <PricingTier
            title="Enterprise"
            price="$199"
            period="/month"
            description="Comprehensive solution for teams and organizations"
            features={[
              "Everything in Professional",
              "Dedicated instance",
              "Custom model training",
              "Advanced analytics",
              "SSO integration",
              "Dedicated account manager",
              "24/7 priority support",
              "Custom integrations"
            ]}
            buttonText="Contact Sales"
            gradientFrom="from-purple-500"
            gradientTo="to-purple-700"
          />
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <a href="#" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
            See full comparison <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;