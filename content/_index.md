---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: "Ingeniera de Ciberseguridad especializada en IT/OT, con experiencia en investigación y gestión de ciberamenazas."
      button:
        text: Descargar CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: resume-experience
    content:
      username: admin

  - block: resume-skills
    content:
      username: admin

  - block: resume-accomplishments
    content:
      username: admin

  - block: collection
    id: talks
    content:
      title: Ponencias y Divulgación
      filters:
        folders: [event]
    design:
      view: article-grid
      columns: 2

  - block: collection
    id: projects
    content:
      title: Proyectos
      filters:
        folders: [project]
    design:
      view: article-grid
      columns: 2
---
