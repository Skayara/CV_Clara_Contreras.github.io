import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';
import { personalInfo } from '../data/cvData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            {/* Main Content */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Desarrollador apasionado creando experiencias digitales excepcionales. 
                Siempre buscando nuevos desafíos y oportunidades de colaboración.
              </p>
            </motion.div>

            {/* Made with love */}
            <motion.div
              className="flex items-center justify-center gap-2 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>Hecho con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </motion.div>
              <span>y</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Coffee className="w-5 h-5 text-amber-500" />
              </motion.div>
              <span>usando</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-5 h-5 text-blue-500" />
              </motion.div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="pt-6 border-t border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © {currentYear} {personalInfo.name}. Todos los derechos reservados.
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <motion.a
                    href="#inicio"
                    className="hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Inicio
                  </motion.a>
                  <motion.a
                    href="#timeline"
                    className="hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Timeline
                  </motion.a>
                  <motion.a
                    href="#contacto"
                    className="hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Contacto
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Fun Animation */}
            <motion.div
              className="flex justify-center pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;