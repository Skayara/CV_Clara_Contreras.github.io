import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import { personalInfo } from '../data/cvData';

const Header = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'timeline', label: 'Mi Trayectoria' },
    { id: 'estudios', label: 'Estudios' }, // Nueva sección de estudios
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const contactInfo = [
    { icon: Mail, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, value: personalInfo.location },
    { icon: Github, value: personalInfo.github, href: `https://${personalInfo.github}` },
    { icon: Linkedin, value: personalInfo.linkedin, href: `https://${personalInfo.linkedin}` },
    { icon: Globe, value: personalInfo.website, href: `https://${personalInfo.website}` }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-10 h-10 rounded-full border-2 border-blue-500/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900">{personalInfo.name}</h1>
              <p className="text-sm text-gray-600">{personalInfo.title}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 text-sm text-gray-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="truncate">{contact.value}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;