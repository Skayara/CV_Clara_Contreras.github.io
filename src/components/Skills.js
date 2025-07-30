import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Code, Database, Cloud, Palette, Brain, Users } from 'lucide-react';
import { skillsData, interestsData } from '../data/cvData';

const Skills = () => {
  const [activeChart, setActiveChart] = useState('interests');

  const categoryIcons = {
    Frontend: Code,
    Backend: Database,
    DevOps: Cloud,
    Database: Database,
    'AI/ML': Brain,
    Design: Palette,
    Management: Users
  };

  const categoryColors = {
    Frontend: '#3B82F6',
    Backend: '#10B981',
    DevOps: '#F59E0B',
    Database: '#8B5CF6',
    'AI/ML': '#EF4444',
    Design: '#06B6D4',
    Management: '#84CC16'
  };

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-blue-600">
            {`${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{payload[0].name}</p>
          <p style={{ color: payload[0].color }}>
            {`${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            Habilidades & Conocimientos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un vistazo detallado a mis competencias técnicas y áreas de especialización
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills by Category */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Competencias Técnicas</h3>
              
              {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => {
                const Icon = categoryIcons[category] || Code;
                const color = categoryColors[category];
                
                return (
                  <motion.div
                    key={category}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color }} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{category}</h4>
                    </div>
                    
                    <div className="space-y-4">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">{skill.name}</span>
                            <span className="text-sm font-semibold" style={{ color }}>
                              {skill.percentage}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full"
                              style={{ backgroundColor: color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.8 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Charts Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Chart Toggle */}
              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={() => setActiveChart('interests')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeChart === 'interests'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Áreas de Interés
                </motion.button>
                <motion.button
                  onClick={() => setActiveChart('skills')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeChart === 'skills'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nivel de Habilidades
                </motion.button>
              </div>

              {/* Charts */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                layout
              >
                {activeChart === 'interests' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      Distribución de Intereses
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={interestsData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {interestsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip content={<PieTooltip />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      Nivel de Competencia
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="name" 
                            angle={-45}
                            textAnchor="end"
                            height={80}
                            fontSize={12}
                          />
                          <YAxis />
                          <Tooltip content={<CustomTooltip />} />
                          <Bar 
                            dataKey="percentage" 
                            fill="#3B82F6"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Legend for Interests */}
              {activeChart === 'interests' && (
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Leyenda</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {interestsData.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;