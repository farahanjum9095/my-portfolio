import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'research', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="text-cyan-400 font-bold text-xl">FA</button>
          <div className="hidden md:flex gap-8">
            {[['home', 'Home'], ['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills'], ['research', 'Research'], ['contact', 'Contact']].map(([id, label]) => (
              <button key={id} onClick={() => scrollToSection(id)} className={`text-sm font-medium transition-colors ${activeSection === id ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}>{label}</button>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-cyan-400">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="flex flex-col gap-4 px-6 py-4">
              {[['home', 'Home'], ['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills'], ['research', 'Research'], ['contact', 'Contact']].map(([id, label]) => (
                <button key={id} onClick={() => scrollToSection(id)} className="text-left text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">{label}</button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl">
          {/* <p className="text-cyan-400 font-mono text-sm mb-5">Hi, my name is</p> */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">Farah Anjum</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">I build scalable software systems.</h2>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">I'm a Software Engineer specializing in full-stack development, database optimization, and building reliable enterprise applications. Currently focused on creating accessible, user-centered digital experiences.</p>
          <div className="flex gap-4">
            <a href="mailto:farahanjum9095@gmail.com" className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-all font-medium">Get In Touch</a>
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-cyan-400/10 text-cyan-400 rounded hover:bg-cyan-400/20 transition-all font-medium">View My Work</button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="flex items-center gap-4 text-3xl font-bold text-slate-200 mb-8">
            <span className="text-cyan-400 font-mono text-2xl"></span>About Me<span className="flex-1 h-px bg-slate-700"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-400">
              <p>Hello! I'm Farah, a software engineer passionate about building robust, scalable applications. My journey in tech started with a fascination for how systems work and evolved into a career focused on solving complex problems through elegant code.</p>
              <p>With over 2 years of professional experience at Thomson Reuters and various projects, I've developed expertise in full-stack development, database optimization, and quality assurance. I thrive in collaborative environments where I can contribute to meaningful products.</p>
              <p>I recently completed my Post Graduate Diploma in Full Stack Software Development from Lambton College, Toronto, where I strengthened my skills in modern frameworks and cloud technologies.</p>
              <p>Beyond coding, I'm passionate about IoT and assistive technologies. During my master's research, I developed a smart wheelchair-cum-bed system and filed a design patent, combining my technical skills with a desire to create solutions that improve people's lives.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-slate-200 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>2+ years in enterprise software development</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>M.Tech in Computer Science (JNTU Hyderabad)</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Published researcher with 2 international papers</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Design patent filed for IoT assistive device</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Based in Toronto, Canada</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center gap-4 text-3xl font-bold text-slate-200 mb-8">
            <span className="text-cyan-400 font-mono text-2xl"></span>EXPERIENCE<span className="flex-1 h-px bg-slate-700"></span>
          </h2>
          <div className="space-y-8">
            <div className="group">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-200">Full Stack Developer (Co-op) <span className="text-cyan-400">@ BookMyHelp</span></h3>
                  <p className="text-sm text-slate-400 mt-2 md:mt-0">Sep 2025 – Dec 2025</p>
                </div>
                <p className="text-sm text-cyan-400 mb-4">Toronto, Canada</p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Designed and built responsive, accessible UI using HTML, CSS, and JavaScript</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Developed scalable RESTful APIs using Spring Boot</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Designed PostgreSQL schemas and optimized queries</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Created automated Playwright test suites</span></li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Spring Boot', 'PostgreSQL', 'JavaScript', 'Playwright'].map(t => <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">{t}</span>)}
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-200">Associate Software Engineer <span className="text-cyan-400">@ Thomson Reuters</span></h3>
                  <p className="text-sm text-slate-400 mt-2 md:mt-0">Sep 2022 – Mar 2024</p>
                </div>
                <p className="text-sm text-cyan-400 mb-4">Hyderabad, India</p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Developed large-scale tax and trade enterprise platforms</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Designed complex SQL queries and stored procedures</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Reduced query execution time through optimization</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Mentored junior engineers on best practices</span></li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Java', 'SQL', 'REST APIs', 'Mentoring'].map(t => <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">{t}</span>)}
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-200">Database Intern <span className="text-cyan-400">@ Thomson Reuters</span></h3>
                  <p className="text-sm text-slate-400 mt-2 md:mt-0">Oct 2021 – Aug 2022</p>
                </div>
                <p className="text-sm text-cyan-400 mb-4">Hyderabad, India</p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Built and optimized SQL queries for reporting</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Supported data migration initiatives</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span>Implemented database security best practices</span></li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['SQL', 'PL/SQL', 'Data Migration'].map(t => <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center gap-4 text-3xl font-bold text-slate-200 mb-8">
            <span className="text-cyan-400 font-mono text-2xl"></span>PROJECTS<span className="flex-1 h-px bg-slate-700"></span>
          </h2>
          <div className="space-y-8">
            <div className="group bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-200">Financial Data Aggregator</h3>
                  <ExternalLink size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-slate-400 mb-4">A comprehensive data pipeline system that ingests, processes, and analyzes financial market data from multiple sources with real-time normalization and visualizations.</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Pandas', 'REST APIs'].map(t => <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">{t}</span>)}
                </div>
              </div>
            </div>
            <div className="group bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-200">Task & Sprint Management System</h3>
                  <ExternalLink size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-slate-400 mb-4">A lightweight sprint-based task tracking system for agile teams with Excel-based persistence for easy data portability.</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Excel', 'Agile'].map(t => <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">{t}</span>)}
                </div>
              </div>
            </div>
            <div className="group bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-200">Explore India Travel Platform</h3>
                  <ExternalLink size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-slate-400 mb-4">A travel discovery and booking platform with curated itineraries and integrated third-party service connections.</p>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'].map(t => <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center gap-4 text-3xl font-bold text-slate-200 mb-8">
            <span className="text-cyan-400 font-mono text-2xl"></span>Skills & Technologies<span className="flex-1 h-px bg-slate-700"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['Languages', ['Java', 'Python', 'C/C++', 'JavaScript', 'SQL', 'PL/SQL', 'Ruby']],
              ['Frameworks', ['Spring Boot', 'Angular', 'React', 'Ruby on Rails']],
              ['Databases', ['PostgreSQL', 'MySQL', 'MongoDB']],
              ['Testing', ['Playwright', 'Manual Testing', 'Regression', 'Smoke Testing']],
              ['Tools & Platforms', ['Git', 'GitHub', 'Azure DevOps', 'JIRA', 'VS Code', 'CI/CD']],
              ['Concepts', ['REST APIs', 'Distributed Systems', 'Clean Architecture', 'Database Optimization']]
            ].map(([title, skills]) => (
              <div key={title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(s => <span key={s} className="px-4 py-2 bg-slate-700 text-slate-300 rounded text-sm hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center gap-4 text-3xl font-bold text-slate-200 mb-8">
            <span className="text-cyan-400 font-mono text-2xl"></span>Research & Innovation<span className="flex-1 h-px bg-slate-700"></span>
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-200 mb-2">Researcher & Prototype Developer</h3>
              <p className="text-cyan-400 mb-2">G. Narayanamma Institute of Technology and Science for Women</p>
              <p className="text-sm text-slate-400">Jan 2021 – Aug 2022 | Hyderabad, India</p>
            </div>
            <p className="text-lg text-slate-400 mb-6">Led development of an innovative IoT-based smart wheelchair-cum-bed system designed to improve mobility and comfort for individuals with disabilities.</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span className="text-slate-400">Led development of IoT-based smart wheelchair controlled using voice recognition</span></div>
              <div className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span className="text-slate-400">Integrated microcontrollers, IoT sensors, and voice modules</span></div>
              <div className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span className="text-slate-400">Authored two peer-reviewed research papers at international conferences</span></div>
              <div className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▹</span><span className="text-slate-400">Filed a design patent for smart assistive mobility device</span></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['IoT', 'Voice Recognition', 'Microcontrollers', 'Sensors', 'Research', 'Patent'].map(t => <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-cyan-400 font-mono text-sm mb-4">06. What's Next?</p>
          <h2 className="text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:farahanjum9095@gmail.com" className="flex items-center gap-2 px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-all font-medium"><Mail size={20} />Say Hello</a>
            <a href="tel:+14377349067" className="px-8 py-3 bg-cyan-400/10 text-cyan-400 rounded hover:bg-cyan-400/20 transition-all font-medium">+1 (437) 734-9067</a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:farahanjum9095@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-slate-400 text-sm border-t border-slate-800">
        <p>Designed & Built by Farah Anjum</p>
        <p className="mt-2">© 2025 All rights reserved</p>
      </footer>
    </div>
  );
}