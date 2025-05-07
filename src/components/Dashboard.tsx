import React from 'react';
import { MessageSquare, ArrowRight, FileText, Calendar, Settings, User, HelpCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intuitive AI-Powered Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a seamless interface designed to help professionals solve problems efficiently
          </p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -z-10 top-20 -left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -z-10 bottom-20 -right-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
          
          {/* Dashboard preview */}
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden max-w-6xl mx-auto">
            {/* Dashboard header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="font-bold">Q</span>
                  </div>
                  <h3 className="text-lg font-medium">Quorr-AI Dashboard</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <HelpCircle size={16} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Settings size={16} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <User size={16} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="flex h-[500px]">
              {/* Sidebar */}
              <div className="w-56 bg-gray-50 border-r border-gray-100 p-4">
                <div className="space-y-2">
                  <div className="flex items-center p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <MessageSquare size={18} className="mr-2" />
                    <span>Chat</span>
                  </div>
                  <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <FileText size={18} className="mr-2" />
                    <span>Documents</span>
                  </div>
                  <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Calendar size={18} className="mr-2" />
                    <span>Calendar</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xs uppercase text-gray-500 font-medium mb-2">Recent Projects</h4>
                  <div className="space-y-2">
                    <div className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">Q2 Marketing Plan</div>
                    <div className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">Budget Analysis</div>
                    <div className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">Team Productivity</div>
                  </div>
                </div>
              </div>
              
              {/* Main content area */}
              <div className="flex-1 flex flex-col">
                {/* Chat area */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-blue-50 rounded-lg p-3 max-w-md">
                        <p className="text-gray-800">I need to prepare a competitive analysis for our new product launch. What approach do you recommend?</p>
                      </div>
                    </div>
                    
                    {/* AI response */}
                    <div className="flex">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white mr-2 flex-shrink-0">
                        Q
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                        <p className="text-gray-800">
                          For a comprehensive competitive analysis, I recommend this structured approach:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                          <li>Identify your top 5 competitors based on market share</li>
                          <li>Analyze their product features, pricing, and positioning</li>
                          <li>Conduct a SWOT analysis for each competitor</li>
                          <li>Map competitive advantages on a quadrant chart</li>
                        </ul>
                        <p className="mt-2 text-gray-800">
                          Would you like me to create a template for this analysis?
                        </p>
                      </div>
                    </div>
                    
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-blue-50 rounded-lg p-3 max-w-md">
                        <p className="text-gray-800">Yes, please create a template and help me identify our top competitors.</p>
                      </div>
                    </div>
                    
                    {/* AI typing indicator */}
                    <div className="flex">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white mr-2 flex-shrink-0">
                        Q
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Input area */}
                <div className="p-4 border-t border-gray-100">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask Quorr-AI anything..."
                      className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2 px-2">
                    <div className="text-xs text-gray-500">Quorr-AI understands natural language</div>
                    <div className="text-xs text-gray-500">Business Intelligence Mode</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;