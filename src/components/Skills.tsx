import { Code, Database, Brain, Cloud, Zap, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "Go", "Rust"]
    },
    {
      icon: Database,
      title: "Web Development",
      skills: ["React", "Node.js", "HTML/CSS", "Next.js", "Express", "GraphQL", "REST APIs"]
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "Firebase"]
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      skills: ["Machine Learning", "TensorFlow", "PyTorch", "Pandas", "NumPy", "OpenCV", "NLP"]
    },
    {
      icon: Zap,
      title: "Systems & Hardware",
      skills: ["Linux", "Computer Architecture", "Embedded Systems", "FPGA", "Verilog", "Assembly"]
    },
    {
      icon: GitBranch,
      title: "Tools & Methods",
      skills: ["Git", "Agile", "CI/CD", "Testing", "System Design", "Problem Solving", "Debugging"]
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section mb-6">
            SKILLS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through academic pursuits, personal projects, 
            and hands-on experience in computer engineering fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="group bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-center text-2xl font-bold text-primary mb-8">
            CORE COMPETENCIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Algorithm Design",
              "System Architecture", 
              "Performance Optimization",
              "Code Review",
              "Technical Leadership",
              "Continuous Learning",
              "Team Collaboration",
              "Innovation Mindset"
            ].map((competency, index) => (
              <div 
                key={competency}
                className="text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 animate-scale-in"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                <span className="text-sm font-medium text-primary">
                  {competency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;