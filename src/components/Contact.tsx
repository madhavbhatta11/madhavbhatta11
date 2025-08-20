import { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:your.email@example.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-subtle">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section mb-6">
            CONTACT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's connect and create the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-tech flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always excited to discuss new opportunities, innovative projects, 
                or simply connect with fellow technology enthusiasts. Whether you're 
                looking for a dedicated intern, a collaborator on an open-source project, 
                or want to share insights about the latest tech trends, I'd love to hear from you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out through the form or connect with me on social media. 
                I typically respond within 24 hours and am always eager to explore how 
                we can create something amazing together.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-3 rounded-lg border border-border hover:border-accent/50 transition-all duration-200 hover:-translate-y-1 group ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Quick Info
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Available for remote and on-site opportunities</p>
                <p>🎓 Computer Engineering Student</p>
                <p>💻 Open to internships and entry-level positions</p>
                <p>🚀 Passionate about full-stack development and AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;