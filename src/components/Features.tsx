import React from 'react';
import { Brain, Sparkles, Clock, Lock, MessageSquare, LineChart, Globe, Rocket } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center mb-4">
      <div className="text-purple-600">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Advanced AI Understanding",
      description: "Quorr-AI understands complex queries and professional contexts with remarkable accuracy."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Creative Problem Solving",
      description: "Generate innovative solutions for challenging scenarios with AI-powered creativity."
    },
    {
      icon: <Clock size={24} />,
      title: "Time-Saving Automation",
      description: "Automate repetitive tasks and receive instant solutions to save valuable time."
    },
    {
      icon: <Lock size={24} />,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with state-of-the-art encryption and privacy controls."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Natural Conversations",
      description: "Communicate naturally with an AI that understands context and responds like a professional colleague."
    },
    {
      icon: <LineChart size={24} />,
      title: "Data Analysis",
      description: "Extract insights from complex data sets with intelligent analysis capabilities."
    },
    {
      icon: <Globe size={24} />,
      title: "Knowledge Integration",
      description: "Connect with your existing tools and knowledge bases for seamless workflow integration."
    },
    {
      icon: <Rocket size={24} />,
      title: "Continuous Learning",
      description: "Quorr-AI evolves with your needs, learning from interactions to improve over time."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quorr-AI brings intelligent solutions to your everyday professional challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;