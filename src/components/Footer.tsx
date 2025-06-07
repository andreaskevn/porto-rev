import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 bg-[#232931] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FBD46D]">Hello, I'm KEVIN!</h3>
            <p className="text-gray-400 leading-relaxed">
               Ungergraduated Information System Degree at Atma Jaya Yogyakarta University | Web Developer | UI/UX Designer | System Analyst.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-[#FBD46D] transition-colors duration-300">Home</a>
              <a href="#skills" className="block text-gray-400 hover:text-[#FBD46D] transition-colors duration-300">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-[#FBD46D] transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="block text-gray-400 hover:text-[#FBD46D] transition-colors duration-300">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/andreaskevn" className="text-gray-400 hover:text-[#FBD46D] transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/andreas-kevin-sulivan-6a7884263/" className="text-gray-400 hover:text-[#FBD46D] transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:andreaskevin819@gmail.com" className="text-gray-400 hover:text-[#FBD46D] transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              contact andreaskevin819@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Andreas Kevin Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;