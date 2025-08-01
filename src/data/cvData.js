export const personalInfo = {
  name: "Clara Contreras Nevares",                   
  title: "Ingeniera de ciberseguridad",             
  email: "ccontrerassn@gmail.com",                  
  phone: "(+34) 685 370 320",                        
  location: "Madrid, España",                       
  linkedin: "linkedin.com/in/ccontrerasn",           
  github: "github.com/Skayara",                      
  website: "https://mypublicinbox.com/Skayara",
  photo: `${process.env.PUBLIC_URL || ''}/images/Foto4.jpg`,
  avatar: `${process.env.PUBLIC_URL || ''}/images/Foto4.jpg`,
  summary: `Soy una persona inquieta, siempre en busca de crecimiento y aprendizaje. A lo largo de mi formación, he demostrado iniciativa y participación en actividades técnicas y de gestión. Me gusta investigar tecnologías y temas por mi cuenta, y suelo formar equipos para desarrollar proyectos personales de manera eficiente.`  // texto bajo \switchcolumn
};

export const timelineData = [
  // Experiencia laboral actual
  {
    id: 1,
    year: 2024,
    title: "Ingeniera de ciberseguridad",
    company: "Siemens Mobility",
    type: "trabajo",
description: `## Ingeniería de Ciberseguridad Ferroviaria

Participación en la creación del área de ciberseguridad de I+D para sistemas ferroviarios, garantizando el cumplimiento de estándares internacionales (IEC 62443, NIST, CRA, ISO) en productos y proyectos críticos.

### Responsabilidades Principales
- Evaluación y mitigación de vulnerabilidades en sistemas de señalización, control y estaciones ferroviarias.
- Asesoría en la integración de medidas de ciberseguridad en nuevos desarrollos y obras ferroviarias.
- Revisión y verificación de requisitos de ciberseguridad durante el ciclo de vida de productos y soluciones.
- Desarrollo e impartición de formación interna, incluyendo un curso de 10 horas sobre Secure Coding para equipos de desarrollo.`,
achievements: [
  "Creación y puesta en marcha del área de ciberseguridad aplicada a I+D ferroviaria",
  "Certificación de sistemas críticos bajo estándares internacionales (IEC 62443, NIST, ISO)",
  "Diseño e impartición de un programa formativo interno en Secure Coding"
],
tags: ["Ciberseguridad", "SCADA", "Infraestructura Crítica", "Ferroviario", "IEC 62443", "NIST"]

  },
  {
    id: 2,
    year: 2025,
    title: "Profesora Asociada Ciberseguridad",
    company: "URJC",
    type: "trabajo",
    description: `## Docencia Universitaria en Ciberseguridad

Profesora asociada en la Universidad Rey Juan Carlos, responsable del diseño e impartición de asignaturas de ciberseguridad, incluyendo actualización de contenidos teóricos y prácticos según los planes oficiales del Ministerio.

### Asignaturas Impartidas
- Malware y Amenazas Dirigidas
- Inteligencia de la Seguridad
- Seguridad Informática

### Responsabilidades Principales
- Diseño de planes formativos, temarios y laboratorios virtuales de ciberseguridad para asignaturas especializadas.
- Impartición de clases, laboratorios y exámenes.
- Dirección de Trabajos Fin de Grado (TFG) y asesoría académica a estudiantes.
- Integración de metodologías innovadoras como gamificación para fomentar el aprendizaje práctico.`,
    achievements: [
      "Creación de laboratorios virtuales para análisis de malware y ciberinteligencia",
      "Actualización de contenidos teórico-prácticos alineados con los nuevos planes de estudio",
      "Dirección de 12-15 TFGs anuales con alta satisfacción en encuestas docentes"
    ],
    tags: ["Docencia", "Universidad", "Ciberseguridad", "Malware", "Ciberinteligencia", "Gamificación"]

  },
  {
    id: 3,
    year: 2024,
    title: "Profesora Curso Especialización Ciberseguridad",
    company: "Linkia FP",
    type: "trabajo",
    description: `## Formación Profesional Especializada en Ciberseguridad

Profesora en el curso de especialización en ciberseguridad de Linkia FP, responsable del diseño e impartición de asignaturas prácticas en Seguridad Web y Seguridad Android para técnicos superiores.

### Responsabilidades Principales
- Desarrollo completo de temarios, materiales y laboratorios prácticos para las asignaturas del curso.
- Impartición de clases con enfoque 100% práctico, incluyendo demostraciones y proyectos reales.
- Evaluación de estudiantes y seguimiento personalizado para su desarrollo profesional.
- Coordinación de charlas con empresas y fomento del contacto con la industria.`,
    achievements: [
      "Diseño desde cero de los contenidos y laboratorios prácticos de Seguridad Web y Seguridad Android",
      "Implementación de un enfoque educativo basado en proyectos prácticos y demostraciones en vivo",
      "Formación de la primera promoción del curso con alta inserción laboral en el sector"
    ],
    tags: ["Formación Profesional", "Ciberseguridad", "Seguridad Web", "Seguridad Android", "Educación Práctica"]

  },
  {
    id: 4,
    year: 2023,
    title: "Investigadora en DICYME",
    company: "URJC",
    type: "trabajo",
    description: `## Dynamic Industrial Cyberrisk Modelling based on Evidence (DICYME)

Investigación aplicada en modelado dinámico de riesgos cibernéticos industriales, combinando análisis de exposición pública de sistemas OT con técnicas de Machine Learning para predecir probabilidad de ataques.

### Responsabilidades Principales
- Gestión integral del proyecto, incluyendo investigación técnica, desarrollo de prototipos y coordinación con la empresa colaboradora.
- Diseño e implementación de modelos predictivos para cuantificar la exposición de infraestructuras industriales y su riesgo de ataque.
- Desarrollo de pruebas de concepto y validación en entornos reales junto a la empresa colaboradora.
- Publicación de resultados en conferencias científicas y preparación de artículos para revistas especializadas.`,
    achievements: [
      "Desarrollo de varios prototipos para modelar y cuantificar riesgos cibernéticos en entornos OT",
      "Validación de resultados y transferencia de avances tecnológicos a la empresa colaboradora",
      "Publicación de 1 paper en congreso internacional y envío de 1 artículo a revista científica"
    ],
    tags: ["Proyecto", "Investigación", "I+D", "Machine Learning", "Ciberseguridad Industrial", "OT", "Python", "TensorFlow", "Scikit-learn"]

  },
  {
    id: 5,
    year: 2023,
    title: "Mentora STEM",
    company: "STEM Talent Girl",
    type: "voluntariado",
description: `## Mentoría en Tecnología y Ciberseguridad

Participación en el programa STEM Talent Girl como mentora para fomentar la presencia femenina en carreras tecnológicas, ofreciendo acompañamiento personalizado en ciberseguridad y orientación profesional.

### Responsabilidades Principales
- Mentoría individual de estudiantes de secundaria y universidad, incluyendo orientación académica y profesional.
- Diseño e impartición de talleres prácticos y sesiones de shadowing en ciberseguridad.
- Elaboración de material propio y coordinación de actividades con empresas y universidades colaboradoras.`,
    achievements: [
      "Mentoría personalizada a 2 estudiantes durante un curso académico completo",
      "Organización de sesiones de shadowing grupales con una media de 6 participantes",
      "Diseño de materiales y talleres prácticos aplicados a ciberseguridad"
    ],
    tags: ["STEM", "Mentoría", "Ciberseguridad", "Voluntariado", "Educación"]

  },
  {
    id: 6,
    year: 2022,
    title: "Analista de ciberinteligencia",
    company: "Entelgy Innotec Security",
    type: "trabajo",
    description: `## Análisis de Amenazas y Ciberinteligencia

Trabajo en equipo de ciberinteligencia enfocado en la identificación, seguimiento y análisis de amenazas avanzadas, colaborando estrechamente con el SOC y otros equipos de seguridad para la mitigación de riesgos.

### Responsabilidades Principales
- Monitoreo y análisis de IOCs, TTPs y huellas digitales de actores APT.
- Investigación de amenazas emergentes y campañas de malware mediante OSINT, dark web y feeds privados.
- Generación de alertas y elaboración de informes de inteligencia para apoyar operaciones del SOC.
- Colaboración en la identificación de medidas preventivas y estrategias de mitigación.`,
    achievements: [
      "Generación de 10-12 informes de ciberinteligencia y 3-4 alertas diarias para operaciones del SOC",
      "Análisis de campañas de malware y amenazas avanzadas que derivaron en medidas preventivas efectivas",
      "Uso de herramientas como MISP, Maltego, VirusTotal, YARA y Splunk para automatizar procesos de inteligencia"
    ],
    tags: ["Threat Intelligence", "OSINT", "Malware Analysis", "APT", "Ciberinteligencia", "SOC"]

  },
  {
    id: 7,
    year: 2021,
    title: "Responsable/Coordinadora Infraestructuras",
    company: "SeekNHack",
    type: "voluntariado",
    description: `## Coordinación y Gestión de Infraestructura

Responsable técnica y logística en la organización de eventos y competiciones de ciberseguridad, incluyendo la planificación de entornos, despliegue de infraestructura y coordinación de equipos voluntarios.

### Responsabilidades Principales
- Diseño y despliegue de infraestructuras cloud para competiciones CTF.
- Administración de entornos web y plataformas de competición durante los eventos.
- Coordinación de 10-12 voluntarios técnicos y soporte en tiempo real durante las actividades.
- Supervisión de aspectos logísticos y técnicos para garantizar la continuidad de los eventos.`,
    achievements: [
      "Implementación de infraestructura cloud estable y escalable para entornos de competición",
      "Coordinación efectiva de equipos técnicos voluntarios"
    ],
    tags: ["Proyecto", "DevOps", "Eventos", "CTF", "Cloud", "Infraestructura", "Coordinación"]

  },
  {
    id: 8,
    year: 2020,
    title: "Ponente/Formadora",
    company: "Profesora particular",
    type: "trabajo",
    description: `## Formación Académica Personalizada

Impartición de clases particulares de apoyo académico en ciencias, humanidades y programación para estudiantes de educación secundaria y universitaria.

### Responsabilidades Principales
- Tutorías individuales orientadas a refuerzo académico y preparación de exámenes.
- Diseño de material de estudio y ejercicios prácticos adaptados al nivel de cada alumno.
- Enseñanza de múltiples disciplinas: Matemáticas, Física, Química, Biología, Lengua, Historia, Economía, Inglés y Piano.
- Apoyo en programación en Python, C y Java, con enfoque práctico para proyectos y ejercicios académicos.`,
    achievements: [
      "Formación individualizada a 10-12 estudiantes de secundaria y universidad",
      "Alta tasa de aprobados en asignaturas técnicas y científicas",
      "Desarrollo de metodología flexible adaptada al perfil y necesidades de cada estudiante"
    ],
    tags: ["Docencia", "Tutorías", "Programación", "Educación Académica", "Clases Particulares"]

  },

  // Educación
  {
    id: 9,
    year: 2024,
    title: "Doctorado en Ciberseguridad",
    company: "URJC",
    type: "estudios",
    description: `## Programa Doctoral en Ciberseguridad Industrial

Investigación enfocada en el modelado predictivo de amenazas y el análisis de vulnerabilidades en entornos industriales críticos, con especial atención a sistemas ICS/SCADA.

### Línea de Investigación
- Modelado predictivo de amenazas cibernéticas en entornos OT
- Análisis de vulnerabilidades en infraestructuras críticas
- Evaluación de riesgos cibernéticos industriales
- Aplicación de técnicas de Machine Learning y simulación
`,
    achievements: [
      "Avance en metodologías de modelado predictivo para amenazas industriales",
      "Formación avanzada en ciberseguridad industrial y análisis de riesgos"
    ],
    tags: ["Doctorado", "Investigación", "Machine Learning", "Ciberseguridad Industrial"]

  },
  {
    id: 10,
    year: 2024,
    title: "Máster Formación del Profesorado",
    company: "URJC",
    type: "estudios",
    description: `## Especialización en Tecnología e Informática

Máster en curso.

Máster oficial en formación del profesorado para la enseñanza de informática y tecnología en secundaria, bachillerato y formación profesional, aplicable también a docencia universitaria.

### Competencias Desarrolladas
- Gamificación, Aprendizaje Basado en Proyectos (ABP) y flipped classroom
- Evaluación por competencias y diseño de unidades didácticas
- Uso de TIC y metodologías activas en entornos educativos
- Elaboración de planes de clase, actividades y rúbricas`,
    achievements: [
      "Prácticas docentes en aula aplicando metodologías activas",
      "Diseño de unidades didácticas y material educativo propio",
      "Habilitación oficial para docencia en secundaria y bachillerato en curso"
    ],
    tags: ["Pedagogía", "Innovación Educativa", "TIC"]

  },
  {
    id: 11,
    year: 2023,
    title: "Máster Ciberseguridad y Privacidad",
    company: "UOC",
    type: "estudios",
    description: `## Especialización específica en Ciberseguridad

Programa de posgrado finalizado en ciberseguridad y privacidad, con un enfoque eminentemente práctico en ofensiva, criptografía, biometría, análisis forense y cumplimiento normativo.

### Áreas de Especialización
- Pentesting y ciberseguridad ofensiva
- Análisis forense digital y respuesta a incidentes
- Criptografía.
- Biometría y autenticación.
- ML y análisis de datos en ciberseguridad
- Auditoría de seguridad y cumplimiento GDPR
- Gestión integral de la privacidad y protección de datos`,
    achievements: [
      "TFM enfocado en ciberseguridad ofensiva",
      "Desarrollo de múltiples proyectos prácticos en pentesting y análisis",
      "Aplicación de conocimientos en entornos profesionales e investigación"
    ],
    tags: ["Máster", "Ciberseguridad", "Privacidad", "GDPR"]
  },
  {
    id: 12,
    year: 2019,
    title: "Ingeniería de la Ciberseguridad",
    company: "URJC",
    type: "estudios",
    description: `## Grado en Ingeniería de la Ciberseguridad

Título oficial de la URJC (240 ECTS), impartido en el campus de Móstoles, pionero en España, con formación integral centrada en tecnología, procesos y normativa para entornos críticos.

### Plan de Estudios (selección destacada)
- Criptografía
- Técnicas de Hacking y Pentesting
- Seguridad en Sistemas y Redes 
- Malware y Amenazas Dirigidas
- Inteligencia Artificial y Visión Artificial aplicada a ciberseguridad  
- Auditoría, Análisis de Riesgos, y Protección de Infraestructuras Críticas
- Inteligencia de la Ciberseguridad  
- Programa de mentoring-empresa desde primeros cursos con interacción real con el sector`,
    achievements: [
      "TFG: comparación de técnicas de Machine Learning para detección de ataques DDoS",
      "Participación activa en competiciones universitarias de CTF, incluida la Liga de Ciberseguridad URJC :contentReference[oaicite:2]{index=2}",
      "Realización de prácticas externas en entidad del sector de ciberseguridad"
    ],
    tags: ["Grado", "Ciberseguridad", "Redes", "Pentesting", "CTF", "Criptografía"]

  },
  {
    id: 13,
    year: 2014,
    title: "Grado Medio Piano",
    company: "C. Manuel de Falla",
    type: "estudios",
    description: `## Formación Musical Profesional

Estudios musicales profesionales de grado medio con especialización en piano, desarrollando competencias artísticas y disciplina personal.

### Competencias Musicales
- Técnica pianística avanzada
- Teoría musical y armonía
- Historia de la música
- Interpretación y expresión artística`,
    achievements: [
      "Recitales públicos anuales",
      "Participación en conciertos regionales",
      "Desarrollo de disciplina y constancia aplicable a otros ámbitos"
    ],
    tags: ["Música", "Piano", "Disciplina", "Arte"]
  },
  {
    id: 14,
    year: 2017,
    title: "Bachillerato Científico-Tecnológico",
    company: "Salesianos Atocha",
    type: "estudios",
    description: `## Formación Preuniversitaria Técnica

Bachillerato con orientación científico-tecnológica, sentando las bases matemáticas y científicas para estudios superiores en ingeniería.

### Materias de Especialización
- Matemáticas avanzadas
- Física aplicada
- Química general
- Informática
- Tecnología industrial`,
    achievements: [
      "Nota media superior a 8.5"
    ],
    tags: ["Bachillerato", "Ciencias", "Matemáticas", "Tecnología"]
  },

  // Certificaciones
  {
    id: 15,
    year: 2024,
    title: "Mentoring Disadvantaged Young People",
    company: "European Youth Foundation",
    type: "certificacion",
    description: `## Certificación Internacional en Mentoría Juvenil

Programa especializado en técnicas de mentoría para jóvenes en situación de vulnerabilidad.

### Competencias Certificadas
- Técnicas de coaching y mentoría
- Desarrollo de soft skills en jóvenes
- Metodologías de inclusión social
- Evaluación de impacto social`,
    achievements: [
      "Aplicación práctica con jóvenes mentorizados",
      "Desarrollo de programa de mentoría personalizado",
      "Colaboración con 3 ONGs europeas"
    ],
    tags: ["Mentoría", "Juventud", "STEM", "Inclusión Social"]
  },
  {
    id: 16,
    year: 2021,
    title: "Cyber Security Foundation Professional Certificate",
    company: "CertNexus",
    type: "certificacion",
    description: `## Certificación Profesional en Fundamentos de Ciberseguridad

Certificación internacional que valida conocimientos fundamentales en ciberseguridad, incluyendo gestión de riesgos, tecnologías de seguridad y mejores prácticas.

### Áreas de Conocimiento Certificadas
- Principios fundamentales de ciberseguridad
- Gestión de riesgos y amenazas
- Tecnologías de protección y detección
- Respuesta ante incidentes y recuperación`,
    achievements: [
      "Aprobación en primer intento con calificación sobresaliente",
      "Aplicación inmediata en proyectos profesionales",
      "Base sólida para otras certificaciones"
    ],
    tags: ["CSFPC", "Fundamentos", "Ciberseguridad", "Certificación Internacional"]
  },
  {
    id: 17,
    year: 2021,
    title: "TOEIC 905/990 puntos",
    company: "Educational Testing Service",
    type: "certificacion",
    description: `## Certificación de Competencia en Inglés Profesional

Evaluación estandarizada de competencias en inglés para entornos profesionales, obteniendo una puntuación que certifica nivel B2 avanzado.

### Habilidades Evaluadas
- Comprensión auditiva en contextos profesionales
- Comprensión lectora de documentos técnicos
- Comunicación efectiva en inglés técnico
- Vocabulario especializado en tecnología`,
    achievements: [
      "Puntuación 905/990 (equivalente a B2 avanzado)",
      "Capacidad para trabajar en entornos internacionales",
      "Acceso a documentación técnica en inglés sin limitaciones"
    ],
    tags: ["Inglés", "B2", "Comunicación", "Internacional"]
  },
  {
    id: 18,
    year: 2021,
    title: "NDG Linux Essentials",
    company: "CISCO Networking Academy",
    type: "certificacion",
    description: `## Certificación en Fundamentos de Linux

Certificación oficial de Cisco que valida competencias fundamentales en administración de sistemas Linux y línea de comandos.

### Competencias Técnicas Certificadas
- Administración básica de sistemas Linux
- Gestión de archivos y permisos
- Configuración de red básica
- Scripting y automatización básica`,
    achievements: [
      "Dominio de línea de comandos Linux",
      "Capacidad para administrar servidores básicos",
      "Base sólida para certificaciones avanzadas en Linux"
    ],
    tags: ["Linux", "CISCO", "Administración", "Sistemas"]
  },
  {
    id: 19,
    year: 2021,
    title: "Offensive Hacking Unfolded",
    company: "Security Academy",
    type: "certificacion",
    description: `## Certificación en Hacking Ético Avanzado

Programa intensivo de formación en técnicas ofensivas de ciberseguridad, pentesting y análisis de vulnerabilidades.

### Técnicas y Herramientas Certificadas
- Metodologías de pentesting profesional
- Explotación de vulnerabilidades web y de red
- Uso avanzado de herramientas como Metasploit
- Técnicas de post-explotación y pivoting`,
    achievements: [
      "Completación de laboratorios prácticos complejos",
      "Aplicación en auditorías reales de seguridad",
      "Desarrollo de exploits personalizados"
    ],
    tags: ["Pentesting", "Hacking Ético", "Vulnerabilidades", "Exploits"]
  },
  {
    id: 20,
    year: 2024,
    title: "Hands On Development – Erasmus+ KA2",
    company: "Consorcio KA220‑YOU",
    type: "colaboracion_europea",
    description: `## Hands On Development – Erasmus+ KA2

Proyecto de colaboración europea iniciado en abril de 2024 con finalización prevista en noviembre de 2025. Bajo la modalidad **KA220‑YOU (Juventud)**, este proyecto tiene como objetivo empoderar a jóvenes y organizaciones juveniles mediante acciones de participación cívica y desarrollo sostenible alineado con los Objetivos de Desarrollo Sostenible (ODS) de la ONU.

### Objetivos principales
- Fomentar el compromiso juvenil en acciones de desarrollo comunitario
- Crear herramientas formativas innovadoras no formales
- Fortalecer capacidades de jóvenes trabajadores sociales en toda Europa
- Promover iniciativas lideradas por jóvenes y compromiso político comunitario
- Elevar la conciencia sobre los ODS entre la juventud europea

### Actividades destacadas
- Investigación y planificación de hitos y entrenamientos piloto
- Reuniones presenciales y virtuales entre socios de distintos países
- Sesiones de formación no formal y talleres comunitarios participativos`,

    achievements: [
      "Participación en reuniones transnacionales en países de la Unión Europea con seis organizaciones socias, siendo sede de una de ellas.",
      "Implementación de talleres no formales en múltiples países europeos"
    ],

    tags: ["Proyecto", "Erasmus+ KA2", "Juventud", "ODS", "Capacitación", "Innovación"]
  },
  {
  id: 21,
  year: 2020,
  title: "HackOn 2020 – II Jornadas de Ciberseguridad URJC",
  company: "URJC",
  type: "congreso",
  description: `## HackOn 2020 – II Jornadas de Ciberseguridad URJC

Evento organizado íntegramente por estudiantes del Grado en Ingeniería de la Ciberseguridad de la URJC, celebrado el 6 de febrero de 2020 en el campus de Móstoles. Tuve responsabilidades dentro del equipo de organización técnico-logística, apoyando en la coordinación de talleres y estructura del evento.

### Actividades Principales
- Staff técnico durante los talleres prácticos (OSINT, CTF, sandbox, análisis de malware).
- Apoyo en el montaje logístico y supervisión de ponencias y sesiones técnicas.
- Participación como miembro del equipo organizador en reuniones y planificación del evento.`,
  achievements: [
    "Soporte en coordinación y ejecución de talleres técnicos",
    "Planificación y logística del evento sin ánimo de lucro"
  ],
  tags: ["Congreso", "Organización", "Ciberseguridad", "CTF", "HackOn"]
  },
  {
    id: 22,
    year: 2021,
    title: "HackOn 2021 – III Jornadas de Ciberseguridad URJC",
    company: "URJC",
    type: "congreso",
    description: `## HackOn 2021 – III Jornadas de Ciberseguridad URJC (edición online)

  Evento organizado por estudiantes del Grado en Ingeniería de la Ciberseguridad de la URJC, celebrado el 18 de febrero de 2021 en formato online. Participé como presentadora en directo de la edición virtual, facilitando la transición digital del evento durante la pandemia.

  ### Actividades principales
  - Presentación de sesiones y moderación de contenido en directo.
  - Coordinación con el equipo organizador para la emisión de ponencias, talleres y CTF.
  - Interacción en tiempo real con la audiencia y moderación de Q&A.`,
    achievements: [
      "Actuación como presentadora oficial durante HackOn 2021 en streaming",
      "Contribución clave en la transición a formato online y coordinación técnica en directo",
      "Moderación de sesiones y participación con audiencia virtual de más de 200 personas"
    ],
    tags: ["Congreso", "Presentación", "Ciberseguridad", "HackOn", "Evento Online"]
  },
  {
    id: 23,
    year: 2022,
    title: "HackOn 2022 – IV Jornadas de Ciberseguridad URJC",
    company: "URJC",
    type: "congreso",
    description: `## HackOn 2022 – IV Jornadas de Ciberseguridad URJC

  Edición celebrada el 16 de febrero de 2022 de las jornadas HackOn, organizada por estudiantes del Grado en Ingeniería de la Ciberseguridad de la URJC. 

  ### Actividades Principales
  - Coordinación general del equipo técnico responsable de la infraestructura, sesiones en directo y actividades educativas.
  - Soporte de staff técnico y ponentes durante los talleres, charlas y la competición CTF.
  - Participación activa en reuniones de planificación, diseño de contenidos y ejecución técnica del evento.`,
    achievements: [
      "Gestión integral del staff técnico y coordinación del evento HackOn 2022",
      "Supervisión de infraestructura, talleres y competición CTF",
      "Creación de retos para el CTF"
    ],
    tags: ["Congreso", "Ciberseguridad", "HackOn", "CTF", "Organización"]
  },
  {
    id: 24,
    year: 2023,
    title: "HackOn 2023 – V Jornadas de Ciberseguridad URJC",
    company: "URJC",
    type: "congreso",
    description: `## HackOn 2023 – V Jornadas de Ciberseguridad URJC

  Celebrada el 16 de febrero de 2023 en el campus de Móstoles de la URJC, organizada íntegramente por estudiantes del Grado en Ingeniería de la Ciberseguridad. Esta edición combinó ponencias, talleres y competiciones prácticas como CTF, con una estructura híbrida para incluir participantes presenciales y virtuales.

  ### Actividades Principales
  - Coordinación técnica y logística del staff encargado de talleres, sesiones y competición CTF.
  - Soporte directo durante las actividades presenciales y virtuales, garantizando la operativa técnica.
  - Participación en el diseño y planificación general del evento junto al equipo organizador.`,
    achievements: [
      "Coordinación de la infraestructura y soporte técnico en talleres y competición CTF para más de 170 asistentes",
      "Contribución en la planificación técnica y logística del evento"
    ],
    tags: ["Congreso", "Ciberseguridad", "HackOn", "CTF", "Organización"]
  },
  {
    id: 25,
    year: 2024,
    title: "HackOn 2024 – VI Jornadas de Ciberseguridad URJC",
    company: "URJC",
    type: "congreso",
    description: `## HackOn 2024 – VI Jornadas de Ciberseguridad URJC

  Celebrado el 22 de febrero de 2024 en el campus de Móstoles de la URJC, esta edición fue organizada por estudiantes del Grado en Ingeniería de la Ciberseguridad y combinó ponencias, talleres, sesiones CTF y actividades híbridas, tanto presenciales como online.

  ### Actividades Principales
  - Soporte técnico y logístico al equipo de nuevos voluntarios durante el evento.  
  - Coordinación en contacto con empresas, patrocinadores y ponentes para la agenda y organización.  
  - Acompañamiento durante las sesiones y facilitación de tareas de staff técnico.`,
    achievements: [
      "Apoyo y supervisión de nuevos voluntarios durante HackOn 2024",
      "Gestión de relaciones con ponentes y empresas colaboradoras",
      "Contribución en la logística técnica de talleres, ponencias y CTF"
    ],
    tags: ["Congreso", "Ciberseguridad", "HackOn", "Voluntariado", "Organización"]
  },
  {
    id: 26,
    year: 2023,
    title: "Navaja Negra 2023",
    company: "Navaja Negra Conference",
    type: "congreso",
    description: `## Navaja Negra 2023 – XI Congreso de Seguridad Informática

  Celebrado los días 5, 6 y 7 de octubre de 2023 en Albacete (XI edición de Navaja Negra).

  ### Actividades Principales
  - Soporte durante los tres días del congreso.
  - Coordinación del equipo técnico para ponencias, talleres y actividades prácticas.
  - Colaboración en la logística de montaje, supervisión técnica y atención a ponentes y participantes.` ,
    achievements: [
      "Miembro del staff en Navaja Negra 2023 en Albacete",
      "Soporte operativo en talleres, conferencias y sesiones prácticas para más de 800 asistentes",
      "Apoyo en la logística técnica y coordinación del equipo técnico durante el evento"
    ],
    tags: ["Congreso", "Ciberseguridad", "Navaja Negra", "Organización", "Staff Técnico"]
  },
  {
    id: 27,
    year: 2023,
    title: "RootedCon 2023",
    company: "RootedCon",
    type: "congreso",
    description: `## HackTricks Track – RootedCon 2023

  Track especializado dentro de RootedCon 2023 enfocado en técnicas avanzadas de hacking, explotación y análisis de vulnerabilidades. Participación como parte del staff técnico responsable de la coordinación de sesiones, soporte y logística del track HackTricks.`,

    achievements: [
      "Miembro del staff técnico en HackTricks Track durante RootedCon 2023",
      "Soporte técnico en conferencias y talleres sobre explotación, Pentesting y análisis de vulnerabilidades"
    ],
    tags: ["Congreso", "RootedCon", "HackTricks", "Staff Técnico", "Explotación", "Pentesting"]
  },
  {
    id: 28,
    year: 2024,
    title: "FEED 2024 – Encuentro del Talento Digital",
    company: "Encuentro del Talento Digital – FEED",
    type: "congreso",
    description: `## FEED 2024 – Encuentro del Talento Digital (Madrid)

  Evento celebrado del 21 al 22 de noviembre en Madrid, organizado por la Feria del Empleo en la Era Digital (FEED). Se trata de un congreso multisala centrado en tecnologías emergentes, talento digital y empleabilidad.

  ### Actividades Principales
  - Ponencia sobre técnicas avanzadas y usos prácticos de OSINT aplicada a ciberseguridad.
  - Interacción directa con profesionales del sector y asistentes durante el evento.`,
    achievements: [
      "Ponente sobre OSINT en FEED 2024 Madrid",
      "Presentación técnica dirigida a perfiles en ciberseguridad, reclutamiento y talento digital",
      "Conexión con profesionales del sector y visibilidad en evento multisala"
    ],
    tags: ["Congreso", "OSINT", "TalentDigital", "Ponente", "Ciberseguridad"]
  },
  {
    id: 29,
    year: 2024,
    title: "Cursos de Verano URJC – Aranjuez 2024",
    company: "URJC",
    type: "congreso",
    description: `## Ponente en Cursos de Verano URJC – Aranjuez 2024

  Participación como ponente en el curso de verano organizado por la Universidad Rey Juan Carlos en Aranjuez del 24 al 28 de junio de 2024. El enfoque incluía la intersección entre ciberseguridad e inteligencia artificial aplicada.

  ### Actividades Principales
  - Ponencia sobre técnicas de ataque y vulnerabilidades específicas en modelos de inteligencia artificial.
  - Participación en sesiones técnicas y mesas de debate sobre IA, seguridad y detección de anomalías.`,
    achievements: [
      "Ponente invitada en Curso de Verano URJC Aranjuez 2024 sobre ataques a IA",
      "Presentación técnica integrada en curso sobre ciberseguridad e IA",
      "Contribución al debate académico sobre riesgos de IA aplicada a seguridad"
    ],
    tags: ["Congreso", "Ciberseguridad", "Inteligencia Artificial", "Cursos de Verano URJC", "OSINT", "Ataques IA"]
  },
  {
    id: 30,
    year: 2024,
    title: "XIV Congreso RITSI 2024 – Madrid",
    company: "RITSI",
    type: "congreso",
    description: `## XIV Congreso RITSI 2024 – Estado y Tendencias de la Ingeniería Informática

  Celebrado el 12 de abril de 2024 en la Universidad Rey Juan Carlos (URJC), el XIV Congreso RITSI es el congreso estatal dedicado al sector de la ingeniería informática en España. Esta edición incluyó charlas técnicas, networking con empresas innovadoras y presentaciones de expertos del sector. 

  ### Ponencia Destacada
  - “**Secretos Ocultos y Marcas Invisibles: El Arte de la Steganografía y el Watermarking**”, explora técnicas avanzadas para ocultar información en medios digitales, proteger la propiedad intelectual y detectar manipulaciones de contenido.`,
    achievements: [
      "Ponente en el XIV Congreso RITSI 2024 con charla técnica sobre esteganografía y watermarking",
      "Divulgación de técnicas avanzadas en comunidad universitaria y profesional"
    ],
    tags: ["Congreso", "RITSI", "Esteganografía", "Watermarking", "Ciberseguridad", "Ponente"]
  },
  {
    id: 31,
    year: 2024,
    title: "Track Securiters – RootedCon 2024",
    company: "RootedCon",
    type: "congreso",
    description: `## Staff del Track Securiters – RootedCon 2024

  Track especializado organizado por Securiters dentro de RootedCon Madrid 2024, centrado en conciencia y técnicas de seguridad vinculadas a ingeniería social, OSINT y análisis de riesgos. Participación como miembro del staff técnico del track, colaborando en los preparativos y soporte durante el congreso.`,
    achievements: [
      "Miembro del staff técnico del Track Securiters en RootedCon 2024",
      "Soporte en coordinación técnica y logística del track durante el evento",
      "Participación en la interacción y coordinación con ponentes y actividades del track"
    ],
    tags: ["Congreso", "RootedCon", "Securiters", "Staff Técnico", "OSINT", "Ingeniería Social"]
  },
  {
    id: 32,
    year: 2024,
    title: "OsintomátiCOPS Conference 2024 – Madrid",
    company: "OsintomátiCOPS Conference",
    type: "congreso",
    description: `## Staff del evento OsintomátiCOPS 2024

  Conferencia presencial celebrada en Madrid, dedicada a OSINT y ciberinteligencia, dirigida a cuerpos de seguridad y servicios de inteligencia. Soporte técnico y logístico, así como acompañamiento a participantes durante talleres y sesiones.`,
    achievements: [
      "Parte del staff técnico de OsintomátiCOPS Conference 2024 en Madrid",
      "Soporte técnico en workshops del evento",
      "Acompañamiento y guía de participantes durante sesiones prácticas"
    ],
    tags: ["Congreso", "OSINT", "Ciberinteligencia", "Staff Técnico", "Madrid"]
  },
  {
    id: 33,
    year: 2024,
    title: "X‑Ops Conference 2024 – Madrid",
    company: "X‑Ops Conference",
    type: "congreso",
    description: `## Staff Técnico y Organización – X‑Ops Conference 2024

  Conferencia celebrada del **22 al 23 de noviembre de 2024** en la ETSISI‑UPM, Madrid. Evento especializado en DevOps, DevSecOps, MLOps, AIOps y transformación digital en infraestructuras TI.

  ### Actividades Principales
  - Coordinación técnica y logística del staff durante conferencias, talleres y sesiones de networking.
  - Soporte en la infraestructura técnica y ejecución de presentaciones relacionadas con seguridad y operaciones.
  - Colaboración con ponentes y equipo organizador en materia técnica y operativa.`,
    achievements: [
      "Participación en el staff técnico y organizativo de la X‑Ops Conference 2024 en Madrid",
      "Apoyo en operaciones técnicas y coordinación durante sesiones sobre DevSecOps y MLOps",
      "Colaboración con ponentes y coordinación logística en evento multidisciplinar"
    ],
    tags: ["Congreso", "X‑Ops Conference", "DevSecOps", "MLOps", "Staff Técnico", "Organización"]
  },
  {
    id: 34,
    year: 2025,
    title: "Jornada AWS 2025",
    company: "URJC / DevSecCon Global Community",
    type: "congreso",
    description: `## Organización Jornada AWS – Campus Móstoles URJC

  Evento organizado por DevSecCon Global Community (de la que formo parte) en colaboración con la Universidad Rey Juan Carlos, celebrado el 8 de febrero de 2025 en el Campus Móstoles.`,
    achievements: [
      "Parte del equipo organizador de la Jornada AWS 2025 en la URJC",
      "Formación y coordinación de voluntarios",
      "Coordinación y gestión de espacios técnicos en la jornada"
    ],
    tags: ["Congreso", "Jornada AWS", "Organización", "URJC", "Cloud Security"]
  },
  {
    id: 35,
    year: 2023,
    title: "The Art of Mac Malware: Detection & Analysis",
    company: "Objective by the Sea (OBTS v6)",
    type: "estudios",
    description: `## The Art of Mac Malware: Detection & Analysis (Training OBTS v6)

  Curso intensivo impartido por Patrick Wardle en el marco del evento OBTS v6 (Objective by the Sea), celebrado del 9 al 11 de octubre de 2023 en Marbella, España. Se centró en técnicas prácticas para detectar y analizar malware en macOS.`,
    achievements: [
      "Formación práctica avanzada en análisis de malware macOS con Patrick Wardle",
      "Laboratorios en vivo de análisis estático y dinámico de binarios maliciosos",
      "Uso de herramientas Objective‑See y técnicas de detección programática en macOS"
    ],
    tags: ["Training", "Mac Malware", "Análisis Dinámico/Estático", "Objective‑See", "OBTS v6"]
  },
  {
    id: 36,
    year: 2023,
    title: "Asistente en OBTS v6.0",
    company: "Objective by the Sea",
    type: "congreso",
    description: `## OBTS v6.0 – Objective by the Sea (Marbella, España)

  Participación como asistente en la conferencia y programa de formación OBTS v6.0 celebrado el 12 y 13 de octubre de 2023 en Marbella. Jornada orientada a seguridad en macOS impartida por expertos como Patrick Wardle y otros investigadores Apple.`,
    achievements: [
      "Asistencia al evento OBTS v6.0 en Marbella, España",
      "Acceso a todas las ponencias y grabaciones técnicas sobre seguridad macOS",
      "Participación en tracks formativos y networking con expertos del sector"
    ],
    tags: ["Congreso", "Mac Security", "Objective by the Sea", "Asistente", "Patrick Wardle"]
  }

















];

export const skillsDataBckp = [
  { name: "JavaScript/TypeScript", percentage: 95, category: "Frontend" },
  { name: "React/Next.js", percentage: 90, category: "Frontend" },
  { name: "Node.js", percentage: 85, category: "Backend" },
  { name: "Python", percentage: 80, category: "Backend" },
  { name: "AWS/Cloud", percentage: 75, category: "DevOps" },
  { name: "Docker/Kubernetes", percentage: 70, category: "DevOps" },
  { name: "PostgreSQL/MongoDB", percentage: 85, category: "Database" },
  { name: "Machine Learning", percentage: 65, category: "AI/ML" },
  { name: "UI/UX Design", percentage: 70, category: "Design" },
  { name: "Agile/Scrum", percentage: 90, category: "Management" }
];

export const interestsData = [
  { name: "Compliance", value: 10, color: "#3B82F6" },
  { name: "Programación", value: 10, color: "#8B5CF6" },
  { name: "Respuesta ante incidentes", value: 12, color: "#10B981" },
  { name: "Pentesting", value: 12, color: "#F59E0B" },
  { name: "ML, IA, Data Science", value: 8, color: "#EF4444" },
  { name: "Forense", value: 10, color: "#06B6D4" },
  { name: "Malware", value: 10, color: "#84CC16" },
  { name: "Ciberinteligencia", value: 10, color: "#EAB308" },
  { name: "Análisis estático", value: 9, color: "#F472B6" },
  { name: "Modelado de amenazas", value: 9, color: "#22D3EE" }
];


export const skillsData = [
  // Basado en \wheelchart
  { name: "Pentesting", level: 17 },
  { name: "Respuesta ante incidentes", level: 10 },
  { name: "Programación", level: 15 },
  { name: "Compliance", level: 10 },
  { name: "Modelado de amenazas", level: 15 },
  { name: "Análisis estático", level: 5 },
  { name: "Ciberinteligencia", level: 10 },
  { name: "Malware", level: 8 },
  { name: "Forense", level: 8 },
  { name: "ML, IA, Data Science", level: 17 }
];

export const languagesData = [
  { name: "Español", level: 5 },
  { name: "Inglés (TOEIC 905/990)", level: 4 }
];

export const certificationsData = [
  { name: "Mentoring Disadvantaged Young People", issued: "Marzo 2024" },
  { name: "Cyber Security Foundation Professional Certificate (CSFPC™)", issued: "Abril 2021" },
  { name: "TOEIC 905/990 puntos (B2)", issued: "Junio 2021" },
  { name: "NDG Linux Essentials", issued: "Septiembre 2021", issuer: "CISCO Networking Academy" },
  { name: "Offensive Hacking Unfolded", issued: "Septiembre 2021" }
];