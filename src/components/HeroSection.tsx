import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home\" className="min-h-screen flex items-center relative overflow-hidden bg-[#161a1f]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23232931' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-[#FBD46D] leading-tight">
                Andreas Kevin.
              </h1>
              <p className="text-xl text-gray-300 font-medium">
                SOFTWARE ENGINEER | FULLSTACK DEVELOPER
              </p>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Ungergraduated Information System Degree at Atma Jaya Yogyakarta University | Web Developer | UI/UX Designer | System Analyst.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('skills')}
                className="bg-[#FBD46D] text-[#232931] px-8 py-3 rounded-full font-semibold hover:bg-[#f9c94a] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn more
              </button>

              <button
                onClick={() => window.open('https://drive.google.com/file/d/1Ogzz2to_6OA3RiZ27T12Ge9unSQyodKC/view?usp=sharing', '_blank')}
                className="bg-[#232931] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a1f26] transition-all duration-300 transform hover:scale-105 shadow-lg border-solid border-2 border-[#FBD46D] hover:border-[#f9c94a]"
              >
                CV
              </button>

            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Photo Container */}
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-[#FBD46D] rounded-full transform rotate-6 scale-110"></div>

              {/* Photo */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-black">
                <img
                  src="/hero-image.jpg"
                  alt="John Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;