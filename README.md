# 🌸 El Jardín de Recuerdos - Día de la Madre

Una experiencia interactiva y emotiva para regalarle a Mamá en su día. La página cuenta con un recorrido de 6 paradas ("flores" del jardín) llenas de fotos, videos y recuerdos.

---

## 🚀 ¿Cómo probarlo ahora mismo?

Simplemente **abrí `index.html` en tu navegador** (haciendo doble clic).
> **Nota:** La página ya viene precargada con **fotos de muestra de alta calidad** para que veas exactamente cómo queda el diseño, las animaciones y los botones en funcionamiento.

---

## 📸 ¿Cómo personalizar las fotos y textos para tu Mamá?

Podés personalizar las fotos de 2 formas muy fáciles:

### Opción A: Guardar tus fotos en la carpeta `assets/`
Guardá tus fotos en la carpeta `assets/` usando los siguientes nombres sugeridos (pueden ser archivos `.jpg`, `.png` o `.jpeg`):

* **Parada 1 (🌱 Las Semillas - Comienzos/Bebés):**
  - `assets/semilla-1.jpg`, `assets/semilla-2.jpg`, `assets/semilla-3.jpg`, `assets/semilla-4.jpg`, `assets/semilla-5.jpg`
* **Parada 2 (🌻 El Sol Diario - Creciendo juntos/Mates/Charlas):**
  - `assets/sol-1.jpg`, `assets/sol-2.jpg`, `assets/sol-3.jpg`, `assets/sol-4.jpg`, `assets/sol-5.jpg`
* **Parada 3 (🌹 Sabiduría - Consejos/Afecto):**
  - `assets/sabiduria-1.jpg`, `assets/sabiduria-2.jpg`, `assets/sabiduria-3.jpg`, `assets/sabiduria-4.jpg`, `assets/sabiduria-5.jpg`
* **Parada 4 (🌸 Aventuras - Viajes/Paseos):**
  - `assets/aventuras-1.jpg`, `assets/aventuras-2.jpg`, `assets/aventuras-3.jpg`, `assets/aventuras-4.jpg`, `assets/aventuras-5.jpg`
* **Parada 5 (🌷 El Hogar - Casa/Mascotas/Reuniones):**
  - `assets/hogar-1.jpg`, `assets/hogar-2.jpg`, `assets/hogar-3.jpg`, `assets/hogar-4.jpg`, `assets/hogar-5.jpg`
* **Parada 6 (💐 El Ramo - Todos juntos / Final):**
  - `assets/ramo-1.jpg`, `assets/ramo-2.jpg`, `assets/ramo-3.jpg`, `assets/ramo-4.jpg`, `assets/ramo-5.jpg`

---

### Opción B: Editar los nombres, títulos o textos en `script.js`

Abrí el archivo `script.js`. En la parte superior vas a encontrar el listado `memories`:

```javascript
{
  id: 1,
  icon: "🌱",
  label: "Las Semillas",
  title: "Donde todo comenzó",
  description: "Escribí acá un texto emotivo para Mamá...",
  gallery: [
    {
      src: "assets/tu-foto.jpg", // Nombre de tu foto en assets/
      caption: "Pie de foto personalizado..."
    },
    ...
  ]
}
```

---

## 🌍 ¿Cómo publicarlo para enviárselo a su celular? (GitHub Pages gratis)

1. Subí este proyecto a un repositorio de **GitHub**.
2. En tu repositorio, andá a `Settings` > `Pages`.
3. En `Source`, seleccioná `Deploy from a branch` (rama `main`, carpeta `/ (root)`).
4. Guardá y esperá 1 minuto.
5. Copiá el link público generado y enviáselo por WhatsApp o QR. ❤️

