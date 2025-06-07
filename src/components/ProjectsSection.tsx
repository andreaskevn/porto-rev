import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'FRUCH - Fruit Checker',
      description: 'A fullstack application that allows users to check the wellness status of fruits and vegetables.',
      tech: ['Nextjs', 'Tailwind CSS', 'PostgreSQL', 'Vercel', 'Prisma', 'Machine Learning'],
      image: '/project-hero/fruch.png',
      link: 'https://dicoding-milestone-fruch.vercel.app/',
      github: 'https://github.com/andreaskevn/dicoding-milestone-fruch'
    },
    {
      title: 'SIPOLUBOGO - UMKM Burjo Borneo Babarsari',
      description: 'A web application that allows users to manage food transactions in UMKM Burjo Borneo Babarsari, Yogyakarta.',
      tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
      image: '/project-hero/sipolubogo.png',
      link: 'https://sipolubogo.cartera.my.id/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#161a1f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD46D] to-[#f9c94a]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              /* Card container */
              className="bg-[#242a35]
             rounded-2xl overflow-hidden
             border border-[#232931]  /* 👈🏻 garis subtle */
             hover:border-[#FBD46D] transition-all duration-300
             transform hover:scale-105 hover:shadow-xl group"
            >
              {/* Gambar preview */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#FBD46D]/20 text-[#FBD46D]
                         text-sm rounded-full border border-[#FBD46D]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center space-x-2
                       text-[#FBD46D] hover:text-[#fde68a]
                       transition-colors duration-300"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    className="inline-flex items-center space-x-2
                       text-gray-400 hover:text-gray-200
                       transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;