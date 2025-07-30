import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { timelineData } from '../data/cvData';

const Studies = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  // Filtra solo los elementos de tipo 'estudios'
  const studiesData = timelineData.filter(item => item.type === 'estudios');

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const typeConfig = {
    estudios: { color: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-50', text: 'text-cyan-700', label: 'Estudios' }
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
            Mi Formación Académica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un recorrido por mis logros educativos y mi desarrollo académico
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

            <AnimatePresence mode="popLayout">
              {studiesData.map((item, index) => {
                const config = typeConfig[item.type];
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
                              <GraduationCap className="w-4 h-4" />
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

export default Studies;