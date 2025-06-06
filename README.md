# 🌐 Proyecto Astro con Server Islands + Server Actions + Neon (PostgreSQL)

Este proyecto está construido con **Astro** y tiene como objetivo explorar y
practicar características modernas como:

- 🧩 **Server Islands** (componentes que se ejecutan en el servidor)
- ⚙️ **Server Actions** (acciones seguras ejecutadas en el servidor)
- 🗃️ Integración con **Neon.tech**, una base de datos PostgreSQL en la nube
- 🧪 Arquitectura **híbrida**, donde parte del contenido es estático y otra
  parte depende de datos dinámicos del servidor

---

## 🚀 Tecnologías utilizadas

- [Astro](https://astro.build/) - Framework para construir sitios rápidos,
  híbridos y modernos
- [Server Actions](https://docs.astro.build/en/guides/server-actions/) de Astro
- [Server Islands](https://docs.astro.build/en/core-concepts/islands/)
  (renderizado en servidor)
- [Neon](https://neon.tech/) - Base de datos PostgreSQL serverless
- [Vite](https://vitejs.dev/) - Bundler ultrarrápido
<!-- - [Netlify](https://www.netlify.com/) - Plataforma de despliegue utilizada -->

---

## 🧩 Arquitectura del proyecto

El sitio está compuesto por dos tipos de contenido:

### 📄 Contenido estático

Páginas como `/about`, `/contact`, etc., son renderizadas estáticamente durante
el build. No dependen de ningún backend o base de datos.

### ⚙️ Contenido dinámico (Server Actions + Neon)

Páginas como `/` o componentes que muestran datos en tiempo real (por ejemplo,
una lista de lugares) usan:

- **Server Actions**: funciones que se ejecutan exclusivamente del lado del
  servidor para interactuar con la base de datos de forma segura.

  Neon.tech: Se usa como proveedor de base de datos PostgreSQL. La conexión se
  hace desde las server actions para leer/escribir datos.

  🧪 ¿Para qué sirve este proyecto? Este proyecto es experimental y educativo,
  con el propósito de:

Practicar arquitectura híbrida (SSG + SSR)

Conectar Astro con una base de datos real en la nube

Aprender cómo se puede mezclar contenido estático con dinámico de forma
eficiente

Probar despliegue en Netlify con funciones del lado del servidor
