# Blog Migration Guide

You need to add 9 blog posts from your old WordPress site into the CMS.

## How to Add Blog Posts in CMS

1. Go to: `https://your-site.netlify.app/admin`
2. Login
3. Click **"Blog"** in the left sidebar
4. Click **"New Blog"** button
5. Fill in all the fields (see details below)
6. Click **"Save"** then **"Publish"**
7. Repeat for all 9 posts

---

## Blog Post Details

### Post 1: Películas relacionadas con el mundo del Escape Room
- **Slug:** `peliculas-relacionadas-con-el-mundo-del-escape-room`
- **Title:** Películas que han inspirado el mundo del Escape Room
- **Excerpt:** Descubre las películas más espectaculares y envolventes que han inspirado los escape rooms. Desde Cube hasta Saw, te mostramos el ranking de Resistance Room.
- **Date:** 2018-06-12
- **Category:** General
- **Featured Image:** Upload from: https://www.resistanceroom.com/wp-content/uploads/cube-1997-1080x675.jpg
- **Content:** Copy from: https://www.resistanceroom.com/peliculas-relacionadas-con-el-mundo-del-escape-room/

---

### Post 2: Conoce a los mejores escapistas
- **Slug:** `conoce-a-los-mejores-escapistas-de-la-historia-de-la-humanidad`
- **Title:** Conoce a los mejores escapistas de la historia de la humanidad
- **Excerpt:** Los mejores escapistas de la historia que han conseguido hazañas increíbles.
- **Date:** 2018-09-26
- **Category:** Historia
- **Featured Image:** Download and upload
- **Content:** Copy from: https://www.resistanceroom.com/conoce-a-los-mejores-escapistas-de-la-historia-de-la-humanidad/

---

### Post 3: Momentos de mayor adrenalina
- **Slug:** `cuales-son-los-momentos-de-mayor-adrenalina-en-un-escape-room`
- **Title:** ¿Cuáles son los momentos de mayor adrenalina en un Escape Room?
- **Excerpt:** Descubre los momentos más emocionantes que vivirás en un escape room.
- **Date:** 2018-11-30
- **Category:** Consejos
- **Featured Image:** Download and upload
- **Content:** Copy from: https://www.resistanceroom.com/cuales-son-los-momentos-de-mayor-adrenalina-en-un-escape-room/

---

### Post 4: Qué clase de jugador eres
- **Slug:** `que-clase-de-jugador-eres-en-un-escape-room`
- **Title:** ¿Qué clase de jugador eres en un Escape Room?
- **Excerpt:** Identifica tu tipo de jugador en un escape room y mejora tu estrategia.
- **Date:** 2018-07-10
- **Category:** Consejos
- **Featured Image:** Download and upload
- **Content:** Copy from: https://www.resistanceroom.com/que-clase-de-jugador-eres-en-un-escape-room/

---

### Post 5: Cómo hacer tu propio escape room en casa
- **Slug:** `como-hacer-tu-propio-escape-room-en-casa`
- **Title:** Cómo hacer tu propio Escape Room en casa
- **Excerpt:** Guía completa para crear tu propio escape room casero.
- **Date:** 2018-09-19
- **Category:** Consejos
- **Featured Image:** Download and upload
- **Content:** Copy from: https://www.resistanceroom.com/como-hacer-tu-propio-escape-room-en-casa/

---

### Post 6: Cómo ser un equipo experto
- **Slug:** `como-ser-un-equipo-experto-en-escape-room`
- **Title:** Cómo ser un equipo experto en Escape Room
- **Excerpt:** Consejos para convertirte en un experto en escape rooms.
- **Date:** 2018-10-15
- **Category:** Consejos
- **Featured Image:** Download and upload
- **Content:** Copy from: https://www.resistanceroom.com/como-ser-un-equipo-experto-en-escape-room/

---

### Post 7: Casas encantadas
- **Slug:** `casas-encantadas-para-inspirar-un-escape-room`
- **Title:** Casas encantadas para inspirar un Escape Room
- **Excerpt:** Las casas encantadas más famosas que han inspirado escape rooms.
- **Date:** 2018-11-26
- **Category:** Historia
- **Featured Image:** Download and upload
- **Content:** Copy from: https://www.resistanceroom.com/casas-encantadas-para-inspirar-un-escape-room/

---

### Post 8: Escape Room para team building
- **Slug:** `escape-room-la-nueva-tendencia-de-tareas-team-building`
- **Title:** Escape Room: la nueva tendencia de tareas Team Building
- **Excerpt:** Por qué los escape rooms son perfectos para team building empresarial.
- **Date:** 2018-12-05
- **Category:** Empresas
- **Featured Image:** Download and upload
- **Content:** Copy from: https://www.resistanceroom.com/escape-room-la-nueva-tendencia-de-tareas-team-building/

---

### Post 9: La inmersión en mundos postapocalípticos
- **Slug:** `la-inmersion-en-mundos-postapocalipticos-descubre-por-que-los-escape-rooms-de-ciencia-ficcion-son-la-experiencia-definitiva`
- **Title:** La Inmersión en Mundos Postapocalípticos: Descubre por Qué Los Escape Rooms de Ciencia Ficción Son la Experiencia Definitiva
- **Excerpt:** Descubre por qué los escape rooms de ciencia ficción como The Resistance Room son la experiencia definitiva de entretenimiento inmersivo.
- **Date:** 2025-11-17
- **Category:** General
- **Featured Image:** https://www.resistanceroom.com/wp-content/uploads/star-citizen-3840x2160-spaceship-4k-7078-1080x675.jpg
- **Content:** Copy from: https://www.resistanceroom.com/la-inmersion-en-mundos-postapocalipticos-descubre-por-que-los-escape-rooms-de-ciencia-ficcion-son-la-experiencia-definitiva/

---

## Tips for Adding Content:

### For Featured Images:
1. Right-click the image URL → "Save image as..."
2. In CMS, click "Choose an image" → Upload the saved image

### For Blog Content:
1. Open the old WordPress post
2. Copy the main content (paragraphs, headings)
3. Paste into the CMS "Content" field (it uses Markdown)
4. Format headings with `##` for H2, `###` for H3
5. Add images with `![](image-url)`

### Markdown Quick Guide:
```markdown
## Heading 2
### Heading 3

**Bold text**
*Italic text*

![Alt text](https://image-url.com/image.jpg)

[Link text](https://url.com)
```

---

## After Adding All Posts:

The blog will automatically show all your posts on:
- `/blog/` (index page)
- `/[slug]/` (individual posts)

Posts will be ordered by date (newest first).
