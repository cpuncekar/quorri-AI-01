import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                AI Assistant for
              </span>
              Modern Professionals
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Quorr-AI helps you solve daily work challenges with elegant AI solutions that save time, enhance productivity, and deliver exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#pricing" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md text-center hover:shadow-lg transition-all duration-300 font-medium">
                Get Started
              </a>
              <a href="#dashboard" className="px-8 py-4 border border-purple-200 text-purple-600 rounded-md text-center hover:bg-purple-50 transition-all duration-300 font-medium flex justify-center items-center">
                See How It Works <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="mt-10">
              <p className="text-gray-500 text-sm mb-4">Trusted by professionals from</p>
              <div className="mt-6">
                  <div className="flex items-center gap-6">
                    <img
                      src="/notion-logo.png"
                      alt="Notion"
                      className="h-6 object-contain opacity-80 grayscale"
                    />
                    <img
                      src="/microsoft-logo.png"
                      alt="Microsoft"
                      className="h-6 object-contain opacity-80 grayscale"
                    />
                  </div>
                </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -z-10 top-0 -right-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -z-10 bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-6 relative z-10">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    Q
                  </div>
                  <h3 className="font-semibold">Quorr-AI Assistant</h3>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
                  <p className="text-gray-700">How can I improve team collaboration on our quarterly report?</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg p-4">
                  <p className="text-gray-800">
                    I recommend implementing these 3 strategies:
                    <br />
                    1. Create a shared document with clearly assigned sections
                    <br />
                    2. Schedule brief daily standups to track progress
                    <br />
                    3. Use collaborative annotation tools for feedback
                    <br /><br />
                    Would you like me to set up a template for your team?
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Powered by advanced AI</div>
                <div className="flex space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-sm text-gray-600">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;