import React from 'react';
import { Github, Linkedin, Mail, Search } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#232931] backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#FBD46D]">Andreas Kevin</div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 bg-[#232931] rounded-full px-2 py-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'skills', label: 'About' },
              { id: 'projects', label: 'Project' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-[#FBD46D] text-[#232931]' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          {/* <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
            />
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#232931]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;