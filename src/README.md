# CV Interactivo - Portfolio Personal

Un currículum vitae interactivo y moderno construido con React y animaciones elegantes.

## 🚀 Características

- Timeline Interactivo: Visualización cronológica de experiencias y logros
- Animaciones Fluidas: Transiciones suaves con Framer Motion
- Responsive Design: Optimizado para todos los dispositivos
- Gráficos Interactivos: Visualización de habilidades y conocimientos
- Contenido en Markdown: Fácil edición de contenido
- Deploy Automático: CI/CD con GitHub Actions

## 🛠️ Tecnologías Utilizadas

- React 19
- Framer Motion (animaciones)
- Recharts (gráficos)
- React Markdown (contenido)
- Tailwind CSS (estilos)
- Lucide React (iconos)

## 📁 Estructura del Proyecto


/
├── components/
│   ├── Header.js          # Navegación principal
│   ├── Hero.js           # Sección de presentación
│   ├── Timeline.js       # Timeline interactivo
│   ├── Skills.js         # Habilidades y gráficos
│   ├── Contact.js        # Formulario de contacto
│   └── Footer.js         # Pie de página
├── data/
│   └── cvData.js         # Datos del CV (editable)
├── .github/workflows/
│   └── deploy.yml        # GitHub Actions para deploy
└── App.js                # Componente principal


## 🎨 Personalización

### Editar Información Personal

Modifica el archivo `/data/cvData.js` para actualizar:

- Información personal
- Experiencias del timeline
- Habilidades y porcentajes
- Datos de contacto

### Agregar Nuevas Experiencias


{
  id: 6,
  year: 2025,
  title: "Nueva Posición",
  company: "Nueva Empresa",
  type: "trabajo", // trabajo, voluntariado, proyecto, colaboracion_europea, congreso
  description: `## Descripción en Markdown
  
  Puedes usar markdown para formatear el contenido.`,
  achievements: [
    "Logro 1",
    "Logro 2"
  ],
  tags: ["React", "Node.js", "AWS"]
}


## 🚀 Deploy

El proyecto incluye GitHub Actions para deploy automático:

1. Haz push a la rama `main`
2. GitHub Actions construye y despliega automáticamente
3. Tu CV estará disponible en GitHub Pages

### Configuración Manual

bash
# Instalar dependencias
npm install

# Desarrollo
npm start

# Construir para producción
npm run build


## 📱 Secciones Incluidas

1. Hero: Presentación personal con estadísticas
2. Timeline: Experiencias organizadas cronológicamente
3. Habilidades: Gráficos interactivos de competencias
4. Contacto: Formulario y información de contacto

## 🎯 Características Destacadas

- Filtros por Categoría: Timeline filtrable por tipo de experiencia
- Contenido Expandible: Click para ver detalles completos
- Gráficos Dinámicos: Visualización de habilidades con Recharts
- Animaciones Contextuales: Cada elemento tiene su propia animación
- Modo Responsive: Perfecto en móvil, tablet y desktop

## 📝 Contenido en Markdown

Todas las descripciones soportan Markdown completo:

markdown
## Título de Sección

- Lista de elementos
- Texto en negrita
- *Texto en cursiva*

### Subsección

Párrafos con [enlaces](https://ejemplo.com) y más contenido.


## 🎨 Personalización de Colores

Los colores se pueden modificar en cada componente:


const typeConfig = {
  trabajo: { color: 'from-blue-500 to-blue-600' },
  proyecto: { color: 'from-purple-500 to-purple-600' },
  // ... más configuraciones
};


¡Tu CV interactivo está listo para impresionar! 🚀