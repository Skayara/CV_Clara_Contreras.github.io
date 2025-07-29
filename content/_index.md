---
title: ""
date: 2022-10-24
type: landing

design:
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
    id: news
    content:
      title: Últimas Publicaciones
      page_type: post
      count: 5
      filters:
        exclude_featured: false
    design:
      view: date-title-summary
---
