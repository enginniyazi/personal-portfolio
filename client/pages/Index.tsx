import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-green-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent hover:opacity-80 transition cursor-pointer"
              >
                Dev
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-amber-900 hover:text-orange-600 transition font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-amber-900 hover:text-orange-600 transition font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-amber-900 hover:text-orange-600 transition font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full hover:shadow-lg transition font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-amber-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 bg-white/95 rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded transition font-medium"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-amber-950">
            Full-Stack Developer
          </h2>
          <p className="text-xl sm:text-2xl text-amber-800 mb-8 max-w-2xl mx-auto font-light">
            Crafting beautiful, performant digital experiences with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-50 transition"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-8">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-orange-100 transition transform hover:scale-110"
            >
              <Github className="w-5 h-5 text-amber-900" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-orange-100 transition transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-amber-900" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-orange-100 transition transform hover:scale-110"
            >
              <Mail className="w-5 h-5 text-amber-900" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-12">
            <ChevronDown className="w-8 h-8 text-amber-700 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold text-amber-950 mb-12 text-center">
            About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <p className="text-amber-900 font-semibold">Your Name</p>
              </div>
            </div>
            <div>
              <p className="text-lg text-amber-900 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience building web
                applications that solve real problems. I specialize in modern JavaScript frameworks
                and creating seamless user experiences.
              </p>
              <p className="text-lg text-amber-900 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Full-Stack
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold text-amber-950 mb-16 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-orange-200 to-green-200 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition duration-300">
                    {project % 2 === 0 ? "🚀" : "💡"}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-amber-950 mb-2">
                    Project {project}
                  </h4>
                  <p className="text-amber-800 mb-4">
                    A stunning web application built with modern technologies and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
                      React
                    </span>
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      TypeScript
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold text-amber-950 mb-16 text-center">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-amber-950 mb-4">Frontend</h4>
              <ul className="space-y-2 text-amber-800">
                <li>✓ React & Next.js</li>
                <li>✓ TypeScript</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Vue.js</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-amber-950 mb-4">Backend</h4>
              <ul className="space-y-2 text-amber-800">
                <li>✓ Node.js & Express</li>
                <li>✓ Python & Django</li>
                <li>✓ PostgreSQL</li>
                <li>✓ MongoDB</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-amber-950 mb-4">Tools & Others</h4>
              <ul className="space-y-2 text-amber-800">
                <li>✓ Git & GitHub</li>
                <li>✓ Docker</li>
                <li>✓ AWS</li>
                <li>✓ Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-bold text-amber-950 mb-8">
            Let's Work Together
          </h3>
          <p className="text-lg text-amber-900 mb-12">
            I'm always interested in hearing about new projects and opportunities. Feel free to
            get in touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@example.com"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              Email Me
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-50 transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white/80 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
