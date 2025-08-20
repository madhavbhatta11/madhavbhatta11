import profileAbout from '@/assets/profile-about.jpg';

const About = () => {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="relative">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img 
                  src={profileAbout} 
                  alt="Madhav Bhatta - Computer Engineering Student"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-tech-blue/20 rounded-lg -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="heading-section mb-8">
              ABOUT ME
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate computer engineering student with a deep fascination for the intersection of 
                hardware and software. My journey in technology spans from low-level system programming to 
                modern web development and artificial intelligence.
              </p>
              <p>
                Currently pursuing my degree in Computer Engineering, I'm constantly exploring new technologies, 
                building innovative projects, and contributing to open-source communities. I believe in the 
                power of code to solve real-world problems and create meaningful impact.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting with the latest tech trends, collaborating 
                on exciting projects, or sharing knowledge with fellow developers. I'm always eager to learn, 
                grow, and push the boundaries of what's possible.
              </p>
              <p>
                Let's connect and build the future of technology together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;