import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = {
    webDevelopment: [
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
        image: "placeholder",
        github: "#",
        demo: "#"
      },
      {
        title: "Task Management App",
        description: "Real-time collaborative task manager with WebSocket integration",
        image: "placeholder",
        github: "#",
        demo: "#"
      },
      {
        title: "Portfolio Website",
        description: "Responsive portfolio site with modern design and animations",
        image: "placeholder",
        github: "#",
        demo: "#"
      }
    ],
    dataScience: [
      {
        title: "Stock Price Predictor",
        description: "Machine learning model for stock market prediction using LSTM",
        image: "placeholder",
        github: "#",
        demo: "#"
      },
      {
        title: "Sentiment Analysis Tool",
        description: "NLP-based sentiment analyzer for social media data",
        image: "placeholder",
        github: "#",
        demo: "#"
      },
      {
        title: "Image Classification",
        description: "CNN model for computer vision tasks with 95% accuracy",
        image: "placeholder",
        github: "#",
        demo: "#"
      }
    ],
    academic: [
      {
        title: "CPU Design Project",
        description: "32-bit RISC processor design in Verilog with full pipeline",
        image: "placeholder",
        github: "#",
        demo: "#"
      },
      {
        title: "Operating System",
        description: "Custom OS kernel with memory management and scheduling",
        image: "placeholder",
        github: "#",
        demo: "#"
      },
      {
        title: "Network Protocol",
        description: "Implementation of TCP/IP stack from scratch in C",
        image: "placeholder",
        github: "#",
        demo: "#"
      }
    ],
    openSource: [
      {
        title: "React UI Library",
        description: "Contribution to popular React component library",
        image: "placeholder",
        github: "#",
        demo: "#"
      },
      {
        title: "Algorithm Visualizer",
        description: "Interactive tool for visualizing sorting and graph algorithms",
        image: "placeholder",
        github: "#",
        demo: "#"
      }
    ]
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="project-card">
      <div className="relative overflow-hidden">
        <div className="project-card-image bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-gray-500 font-medium">Project Screenshot</span>
        </div>
      </div>
      <div className="project-card-content">
        <h3 className="heading-project mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-3">
          <a href={project.github} className="btn-outline flex items-center gap-2">
            <Github className="w-4 h-4" />
            Code
          </a>
          <a href={project.demo} className="btn-tech flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );

  const ProjectSection = ({ title, projects }: { title: string; projects: any[] }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-primary mb-8 tracking-wide">
        {title}
      </h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="section-spacing bg-gradient-subtle">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section mb-6">
            FEATURED WORK
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my journey through computer engineering, from web development 
            to machine learning and systems programming.
          </p>
        </div>

        <div className="space-y-16">
          <ProjectSection 
            title="WEB DEVELOPMENT" 
            projects={projects.webDevelopment} 
          />
          <ProjectSection 
            title="DATA SCIENCE & AI" 
            projects={projects.dataScience} 
          />
          <ProjectSection 
            title="ACADEMIC PROJECTS" 
            projects={projects.academic} 
          />
          <ProjectSection 
            title="OPEN SOURCE / COLLABORATIONS" 
            projects={projects.openSource} 
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;