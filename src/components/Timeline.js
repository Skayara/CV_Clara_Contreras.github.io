import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, ChevronDown, ChevronUp, ExternalLink, GraduationCap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { timelineData } from '../data/cvData';

const Timeline = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedType, setSelectedType] = useState('all');

  const typeConfig = {
    trabajo: { color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-700', label: 'Trabajo' },
    voluntariado: { color: 'from-green-500 to-green-600', bg: 'bg-green-50', text: 'text-green-700', label: 'Voluntariado' },
    proyecto: { color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', text: 'text-purple-700', label: 'Proyectos' },
    colaboracion_europea: { color: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-50', text: 'text-yellow-700', label: 'Europa' },
    congreso: { color: 'from-red-500 to-pink-500', bg: 'bg-red-50', text: 'text-red-700', label: 'Congresos' },
    certificacion: { color: 'from-indigo-500 to-violet-600', bg: 'bg-indigo-50', text: 'text-indigo-700', label: 'Certificación' },
    docencia: { color: 'from-teal-500 to-cyan-600', bg: 'bg-teal-50', text: 'text-teal-700', label: 'Docencia' } // Nueva configuración para Docencia
  };

  const filterTypes = [
    { key: 'all', label: 'Todos' },
    ...Object.entries(typeConfig).map(([key, config]) => ({ key, label: config.label }))
  ];

  const filteredData = selectedType === 'all' 
    ? timelineData.filter(item => item.type !== 'estudios') // Excluye 'estudios' de 'Todos'
    : selectedType === 'docencia' // Maneja el filtro de docencia
      ? timelineData.filter(item => item.tags && item.tags.includes('Docencia'))
      : timelineData.filter(item => item.type === selectedType);

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            Mi Trayectoria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un viaje a través de mis experiencias profesionales, proyectos y logros más significativos
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterTypes.map((type, index) => (
            <motion.button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedType === type.key
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {type.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <AnimatePresence mode="popLayout">
              {filteredData.map((item, index) => {
                // Asegúrate de que config exista antes de usarlo
                const config = typeConfig[item.type] || { color: 'from-gray-400 to-gray-500', bg: 'bg-gray-50', text: 'text-gray-700', label: 'Desconocido' };
                // Si el tipo seleccionado es 'docencia', usa la configuración de docencia
                if (selectedType === 'docencia' && item.tags && item.tags.includes('Docencia')) {
                  Object.assign(config, typeConfig.docencia); // Asigna las propiedades de docencia
                }
                const isExpanded = expandedItem === item.id;

                return (
                  <motion.div
                    key={item.id}
                    className="relative pl-20 pb-12"
                    layout
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${config.color} border-4 border-white shadow-lg`}
                      whileHover={{ scale: 1.2 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    />

                    {/* Content Card */}
                    <motion.div
                      className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300`}
                      whileHover={{ y: -5 }}
                      layout
                    >
                      {/* Header */}
                      <div className={`${config.bg} p-6 border-b border-gray-100`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text} border`}>
                                {config.label}
                              </span>
                              <div className="flex items-center gap-1 text-gray-500">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium">{item.year}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span className="font-medium">{item.company}</span>
                            </div>
                          </div>
                          
                          <motion.button
                            onClick={() => toggleExpanded(item.id)}
                            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </motion.button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="px-3 py-1 bg-white/70 text-gray-700 text-xs font-medium rounded-lg border"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 space-y-6">
                              {/* Description */}
                              <div className="prose prose-sm max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                  {item.description}
                                </ReactMarkdown>
                              </div>

                              {/* Achievements */}
                              {item.achievements && item.achievements.length > 0 && (
                                <div>
                                  <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                                    <Award className="w-5 h-5 text-yellow-500" />
                                    Logros Destacados
                                  </h4>
                                  <div className="space-y-3">
                                    {item.achievements.map((achievement, achIndex) => (
                                      <motion.div
                                        key={achIndex}
                                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: achIndex * 0.1 }}
                                      >
                                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">{achievement}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;