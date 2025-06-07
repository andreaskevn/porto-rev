import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'HTML', level: 80, icon: Globe, color: 'from-[#FBD46D] to-[#f9c94a]' },
    { name: 'CSS', level: 50, icon: Server, color: 'from-[#232931] to-[#1a1f26]' },
    { name: 'Database Design', level: 80, icon: Database, color: 'from-[#FBD46D] to-[#f9c94a]' },
    { name: 'UI/UX Design', level: 85, icon: Palette, color: 'from-[#232931] to-[#1a1f26]' },
    { name: 'React', level: 40, icon: Smartphone, color: 'from-[#232931] to-[#1a1f26]' },
    { name: 'Next.js', level: 60, icon: Smartphone, color: 'from-[#FBD46D] to-[#f9c94a]' },
    { name: 'Laravel', level: 60, icon: Smartphone, color: 'from-[#232931] to-[#1a1f26]' },
    { name: 'PostgreSQL', level: 60, icon: Smartphone, color: 'from-[#FBD46D] to-[#f9c94a]' },
    { name: 'MySQL', level: 60, icon: Smartphone, color: 'from-[#232931] to-[#1a1f26]' },
  ];

  return (
    <section id="skills" className="py-20 bg-[#232931]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD46D] to-[#f9c94a]">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences with cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#FBD46D] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mr-4`}>
                  <skill.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#232931]">{skill.name}</h3>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;