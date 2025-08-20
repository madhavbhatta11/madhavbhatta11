const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/60">
            Powered by Lovable AI Website Builder
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;