import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Work Experience?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using Quorr-AI to solve complex problems and boost productivity.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow py-3 px-4 rounded-lg sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="mt-3 sm:mt-0 bg-white text-purple-600 font-medium py-3 px-6 rounded-lg sm:rounded-l-none hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
            <p className="text-sm opacity-80 mt-4">
              Free 14-day trial. No credit card required. Cancel anytime.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">20k+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">94%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-white/80">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;