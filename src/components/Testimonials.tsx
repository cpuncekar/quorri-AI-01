import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  quote: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "Elevate Media",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Quorr-AI has revolutionized how our marketing team handles campaign analysis. It delivers insights in seconds that would have taken us days to compile manually. The ROI has been incredible.",
    stars: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Product Manager",
    company: "InnovateTech",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "As a product manager juggling multiple priorities, Quorr-AI has become my indispensable assistant. From analyzing user feedback to drafting product requirements, it consistently delivers high-quality results.",
    stars: 5
  },
  {
    id: 3,
    name: "Olivia Rodriguez",
    title: "Financial Analyst",
    company: "Global Investments",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "The data analysis capabilities of Quorr-AI have transformed our financial modeling process. It quickly identifies patterns in complex datasets and generates insights that give us a competitive edge.",
    stars: 4
  },
  {
    id: 4,
    name: "David Wilson",
    title: "CTO",
    company: "FutureSoft",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Implementing Quorr-AI across our engineering teams has significantly accelerated our development cycles. The contextual understanding and technical problem-solving abilities are impressive.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Auto advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Professionals Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Quorr-AI is transforming workflows for professionals around the world
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Decoration elements */}
          <div className="absolute -z-10 top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -z-10 bottom-10 -right-10 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
          
          {/* Testimonial Carousel */}
          <div className="overflow-hidden relative rounded-xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="flex flex-col md:flex-row p-6 md:p-10">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                      <p className="text-gray-600 text-center">{testimonial.title}</p>
                      <p className="text-gray-500 text-sm text-center mb-4">{testimonial.company}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={`${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 md:pl-8">
                      <svg className="w-10 h-10 text-purple-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1.9-2 2-2h2V8h-4zm12 0c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1.9-2 2-2h2V8h-4z"></path>
                      </svg>
                      <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation controls */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                disabled={isAnimating}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                disabled={isAnimating}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Pagination dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;