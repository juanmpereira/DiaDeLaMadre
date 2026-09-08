// =========================================================
// EL JARDÍN DE RECUERDOS PARA MAMÁ - CONFIGURACIÓN DE PARADAS
// =========================================================
// Podés cambiar las rutas de las fotos en el objeto 'memories' abajo.
// Si las fotos locales no existen, cargará automáticamente fotos de muestra.

const memories = [
  {
    id: 1,
    icon: "🌱",
    label: "Las Semillas",
    title: "Donde todo comenzó",
    description:
      "Estas primeras fotos guardan el inicio de todo: tus cuidados constantes desde el primer día, tu ternura infinita y cómo nos rodeaste de amor.",
    note: "🌸 Primera parada de nuestro Jardín de Recuerdos.",
    gallery: [
      {
        type: "image",
        src: "assets/semilla-1.jpg",
        fallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        alt: "Primeros años con Mamá",
        caption: "Tus primeros cuidados y abrazos que nos dieron refugio desde el día uno.",
      },
      {
        type: "image",
        src: "assets/semilla-2.jpg",
        fallback: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?auto=format&fit=crop&w=800&q=80",
        alt: "Mamá cuidándonos",
        caption: "Cada sonrisa tuya nos enseñó a sentirnos seguros y amados.",
      },
      {
        type: "image",
        src: "assets/semilla-3.jpg",
        fallback: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
        alt: "Primeras fotos juntos",
        caption: "Recuerdos llenos de dulzura que abrieron el camino de nuestra familia.",
      },
      {
        type: "image",
        src: "assets/semilla-4.jpg",
        fallback: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        alt: "Manos unidas",
        caption: "Sosteniendo nuestras manos en cada paso importante.",
      },
      {
        type: "image",
        src: "assets/semilla-5.jpg",
        fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        alt: "Inicio de la historia",
        caption: "Gracias por regar nuestro crecimiento con paciencia y cariño.",
      },
    ],
  },
  {
    id: 2,
    icon: "🌻",
    label: "El Sol Diario",
    title: "Acompañándonos a crecer",
    description:
      "A lo largo de los años, fuiste el sol de todos los días: las tardes compartidas, las charlas reconfortantes, los mates y tu risa contagiosa.",
    note: "🌻 Segunda parada: El calor y la alegría de cada día.",
    gallery: [
      {
        type: "image",
        src: "assets/sol-1.jpg",
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        alt: "Momentos en casa",
        caption: "Tardes de mates, charlas eternas y risas que alegran la casa.",
      },
      {
        type: "image",
        src: "assets/sol-2.jpg",
        fallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        alt: "Charlas inolvidables",
        caption: "Siempre dispuesta a escuchar y dar el consejo justo en el momento exacto.",
      },
      {
        type: "image",
        src: "assets/sol-3.jpg",
        fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        alt: "Creciendo juntos",
        caption: "Viendo cómo crecemos sin dejar de ser nuestra mayor compañera.",
      },
      {
        type: "image",
        src: "assets/sol-4.jpg",
        fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        alt: "Tu alegría de siempre",
        caption: "Tu energía positiva transforma cualquier día gris en un día radiante.",
      },
      {
        type: "image",
        src: "assets/sol-5.jpg",
        fallback: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80",
        alt: "Abrazos de Mamá",
        caption: "Estar a tu lado es siempre sentirnos en casa.",
      },
    ],
  },
  {
    id: 3,
    icon: "🌹",
    label: "Sabiduría",
    title: "Tus abrazos y enseñanzas",
    description:
      "Aprendimos de vos los valores más valiosos: la generosidad, la fuerza para superar obstáculos y la belleza de amar incondicionalmente.",
    note: "🌹 Tercera parada: Tu ejemplo y guía diaria.",
    gallery: [
      {
        type: "image",
        src: "assets/sabiduria-1.jpg",
        fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        alt: "Tu gran ejemplo",
        caption: "Tu fortaleza nos inspiró siempre a salir adelante.",
      },
      {
        type: "image",
        src: "assets/sabiduria-2.jpg",
        fallback: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
        alt: "Valores y cariño",
        caption: "Nos enseñaste a mirar la vida con bondad y empatía.",
      },
      {
        type: "image",
        src: "assets/sabiduria-3.jpg",
        fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        alt: "Tu apoyo incondicional",
        caption: "En cada logro o desafío, supimos que contábamos con vos.",
      },
      {
        type: "image",
        src: "assets/sabiduria-4.jpg",
        fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        alt: "Mirada comprensiva",
        caption: "Tu mirada llena de comprensión es la mejor tranquilidad.",
      },
      {
        type: "image",
        src: "assets/sabiduria-5.jpg",
        fallback: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
        alt: "Gracias por todo",
        caption: "Gracias por ser nuestro mayor faro de luz.",
      },
    ],
  },
  {
    id: 4,
    icon: "🌸",
    label: "Aventuras",
    title: "Flores del camino y viajes",
    description:
      "Cada paseo, viaje y escapada con vos se convierte en un recuerdo imborrable. ¡Qué lindo es descubrir el mundo acompañados por vos!",
    note: "🌸 Cuarta parada: Salidas, paseos y aventuras inolvidables.",
    gallery: [
      {
        type: "image",
        src: "assets/aventuras-1.jpg",
        fallback: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        alt: "Paseos juntos",
        caption: "Nuestras mejores rutas y paisajes compartidos.",
      },
      {
        type: "image",
        src: "assets/aventuras-2.jpg",
        fallback: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        alt: "Viajes especiales",
        caption: "Descubriendo nuevos lugares en familia con tu mejor sonrisa.",
      },
      {
        type: "image",
        src: "assets/aventuras-3.jpg",
        fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        alt: "Momentos de desconexión",
        caption: "Disfrutando del sol, el aire libre y la buena compañía.",
      },
      {
        type: "image",
        src: "assets/aventuras-4.jpg",
        fallback: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
        alt: "Fotos inolvidables",
        caption: "Cosas simples que se vuelven gigantes porque estamos juntos.",
      },
      {
        type: "image",
        src: "assets/aventuras-5.jpg",
        fallback: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80",
        alt: "Próximos destinos",
        caption: "¡Y cuántos caminos más nos quedan por recorrer juntos!",
      },
    ],
  },
  {
    id: 5,
    icon: "🌷",
    label: "El Hogar",
    title: "El amor que llena la casa",
    description:
      "Tus gestos cotidianos, tus comidas preferidas, el cuidado de la casa y el cariño que le das a cada detalle hacen que nuestro hogar sea único.",
    note: "🌷 Quinta parada: El calor y los detalles del hogar.",
    gallery: [
      {
        type: "image",
        src: "assets/hogar-1.jpg",
        fallback: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
        alt: "Detalles en casa",
        caption: "Tu toque mágico en cada rincón del hogar.",
      },
      {
        type: "image",
        src: "assets/hogar-2.jpg",
        fallback: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
        alt: "Comiditas ricas",
        caption: "Nadie cocina con tanto amor y dedicación como vos.",
      },
      {
        type: "image",
        src: "assets/hogar-3.jpg",
        fallback: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        alt: "Mascotas y familia",
        caption: "El cariño con el que recibís y cuidás a todos.",
      },
      {
        type: "image",
        src: "assets/hogar-4.jpg",
        fallback: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        alt: "Reuniones de domingo",
        caption: "La alegría de reunirnos alrededor de la mesa.",
      },
      {
        type: "image",
        src: "assets/hogar-5.jpg",
        fallback: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
        alt: "Abrazos hogareños",
        caption: "Un lugar cálido gracias a tu presencia.",
      },
    ],
  },
  {
    id: 6,
    icon: "💐",
    label: "El Ramo",
    title: "Todos los que te amamos",
    description:
      "Este recorrido termina uniendo todas las flores en un gran ramo para vos: toda tu familia unida agradeciéndote por ser la mejor Mamá.",
    note: "💖 Última parada: ¡Feliz Día de la Madre!",
    gallery: [
      {
        type: "image",
        src: "assets/ramo-1.jpg",
        fallback: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        alt: "Familia unida",
        caption: "Todos nosotros somos felices porque te tenemos con nosotros.",
      },
      {
        type: "image",
        src: "assets/ramo-2.jpg",
        fallback: "https://images.unsplash.com/photo-1490578474895-699bc4e2cf59?auto=format&fit=crop&w=800&q=80",
        alt: "Sonrisas compartidas",
        caption: "Tu felicidad es la nuestra.",
      },
      {
        type: "image",
        src: "assets/ramo-3.jpg",
        fallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        alt: "Abrazo familiar",
        caption: "Gracias por darnos tu vida y tu cariño incondicional.",
      },
      {
        type: "image",
        src: "assets/ramo-4.jpg",
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        alt: "Festejo del Día de la Madre",
        caption: "¡Hoy y siempre te celebramos!",
      },
      {
        type: "image",
        src: "assets/ramo-5.jpg",
        fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
        alt: "Te amamos Mamá",
        caption: "¡Te amamos con todo el corazón! ❤️",
      },
    ],
  },
];

// =========================================================
// ESTADO DE LA APLICACIÓN
// =========================================================
let unlockedStops = 1;
let activeMemoryId = 1;
let activeGalleryIndex = 0;

// Elementos del DOM
const timelineProgress = document.getElementById("timeline-progress");
const timelineBoard = document.getElementById("timeline-board");
const timelineCard = document.getElementById("timeline-card");
const memoryCard = document.getElementById("memory-card");
const memoryStep = document.getElementById("memory-step");
const memoryTitle = document.getElementById("memory-title");
const memoryDescription = document.getElementById("memory-description");
const memoryMedia = document.getElementById("memory-media");
const memoryThumbnails = document.getElementById("memory-thumbnails");
const prevMediaBtn = document.getElementById("prev-media-btn");
const nextMediaBtn = document.getElementById("next-media-btn");
const memoryGalleryStatus = document.getElementById("memory-gallery-status");
const memoryNote = document.getElementById("memory-note");
const completeStopBtn = document.getElementById("complete-stop-btn");
const backToGardenBtn = document.getElementById("back-to-garden-btn");
const finalCard = document.getElementById("final-card");
const restartBtn = document.getElementById("restart-btn");

// Generador de pétalos flotantes
function createPetals() {
  const container = document.getElementById("petals-container");
  if (!container) return;

  const petalIcons = ["🌸", "🌷", "🌹", "🌺", "✨"];
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.textContent = petalIcons[Math.floor(Math.random() * petalIcons.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${6 + Math.random() * 8}s`;
    petal.style.animationDelay = `${Math.random() * 6}s`;
    petal.style.fontSize = `${1 + Math.random() * 0.8}rem`;
    container.appendChild(petal);
  }
}

function createImageMedia(mediaItem) {
  const figure = document.createElement("figure");
  figure.className = "photo-frame";

  const image = document.createElement("img");
  image.src = mediaItem.src;
  image.alt = mediaItem.alt || "Recuerdo";

  // Manejo de error: si no encuentra la foto local, usa la foto muestra de Unsplash
  image.addEventListener("error", () => {
    if (mediaItem.fallback && image.src !== mediaItem.fallback) {
      image.src = mediaItem.fallback;
    }
  });

  figure.appendChild(image);

  if (mediaItem.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = mediaItem.caption;
    figure.appendChild(caption);
  }

  return figure;
}

function createVideoMedia(mediaItem) {
  const wrapper = document.createElement("div");
  wrapper.className = "video-wrapper";

  const isYouTubeUrl = (mediaItem.src || "").includes("youtube") || (mediaItem.src || "").includes("youtu.be");

  if (isYouTubeUrl) {
    const iframe = document.createElement("iframe");
    iframe.title = mediaItem.alt || "Video";
    iframe.src = mediaItem.src;
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    wrapper.appendChild(iframe);
  } else {
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;

    const source = document.createElement("source");
    source.src = mediaItem.src;
    source.type = "video/mp4";

    video.appendChild(source);
    wrapper.appendChild(video);
  }

  if (mediaItem.caption) {
    const caption = document.createElement("p");
    caption.className = "video-caption";
    caption.textContent = mediaItem.caption;
    wrapper.appendChild(caption);
  }

  return wrapper;
}

function inferMediaType(mediaItem) {
  const normalizedSrc = (mediaItem.src || "").toLowerCase().split("?")[0].split("#")[0];
  const isYouTubeUrl = normalizedSrc.includes("youtube") || normalizedSrc.includes("youtu.be");
  const isVideoFile = /\.(mp4|webm|ogg|mov|m4v)$/.test(normalizedSrc);

  if (isYouTubeUrl || isVideoFile || mediaItem.type === "video") {
    return "video";
  }
  return "image";
}

function getActiveMemory() {
  return memories.find((memory) => memory.id === activeMemoryId);
}

function renderGalleryThumbnails(memory) {
  memoryThumbnails.innerHTML = "";

  memory.gallery.forEach((mediaItem, index) => {
    const thumbButton = document.createElement("button");
    thumbButton.type = "button";
    thumbButton.className = "memory-thumb";

    if (index === activeGalleryIndex) {
      thumbButton.classList.add("active");
    }

    const inferredType = inferMediaType(mediaItem);

    thumbButton.innerHTML = `
      <span class="memory-thumb-type">${inferredType === "video" ? "📹 Video" : "📷 Foto"}</span>
      <span class="memory-thumb-index">${index + 1}</span>
    `;
    thumbButton.addEventListener("click", () => {
      activeGalleryIndex = index;
      renderMemoryMedia(memory);
    });
    memoryThumbnails.appendChild(thumbButton);
  });
}

function renderMemoryMedia(memory) {
  memoryMedia.innerHTML = "";
  const mediaItem = memory.gallery[activeGalleryIndex];
  const inferredType = inferMediaType(mediaItem);
  const mediaElement = inferredType === "video" ? createVideoMedia(mediaItem) : createImageMedia(mediaItem);
  memoryMedia.appendChild(mediaElement);
  renderGalleryThumbnails(memory);
  updateGalleryControls(memory);
}

function updateGalleryControls(memory) {
  const total = memory.gallery.length;
  memoryGalleryStatus.textContent = `${activeGalleryIndex + 1} / ${total}`;
  prevMediaBtn.disabled = activeGalleryIndex === 0;
  
  if (activeGalleryIndex === total - 1 && activeMemoryId === memories.length) {
    completeStopBtn.textContent = " Ver Gran Ramo Final 💐";
  } else {
    completeStopBtn.textContent = "Seguir en el Jardín →";
  }
}

function updateTimelineProgress() {
  timelineProgress.textContent = `Flor ${activeMemoryId} de ${memories.length}`;
}

function renderTimeline() {
  timelineBoard.innerHTML = "";
  updateTimelineProgress();

  memories.forEach((memory, index) => {
    const stopButton = document.createElement("button");
    stopButton.type = "button";
    stopButton.className = "timeline-stop";

    const isUnlocked = index < unlockedStops;
    const isCompleted = index + 1 < unlockedStops;
    const isActive = memory.id === activeMemoryId;

    if (isUnlocked) {
      stopButton.classList.add("unlocked");
    }

    if (isCompleted) {
      stopButton.classList.add("completed");
    }

    if (isActive) {
      stopButton.classList.add("active");
    }

    stopButton.disabled = !isUnlocked;
    stopButton.innerHTML = `
      <span class="timeline-dot">${memory.icon || memory.id}</span>
      <span class="timeline-label">${memory.label}</span>
    `;
    stopButton.addEventListener("click", () => openMemory(memory.id));
    timelineBoard.appendChild(stopButton);

    if (index < memories.length - 1) {
      const connector = document.createElement("div");
      connector.className = "timeline-connector";
      if (index + 1 < unlockedStops) {
        connector.classList.add("completed");
      }
      timelineBoard.appendChild(connector);
    }
  });
}

function openMemory(memoryId) {
  const selectedMemory = memories.find((memory) => memory.id === memoryId);
  if (!selectedMemory) return;

  activeMemoryId = memoryId;
  activeGalleryIndex = 0;
  memoryStep.textContent = `Flor ${memoryId} de ${memories.length}`;
  memoryTitle.textContent = selectedMemory.title;
  memoryDescription.textContent = selectedMemory.description;
  memoryNote.textContent = selectedMemory.note;

  renderMemoryMedia(selectedMemory);

  timelineCard.classList.add("hidden");
  finalCard.classList.add("hidden");
  memoryCard.classList.remove("hidden");
  renderTimeline();
}

function continueJourney() {
  if (activeMemoryId === memories.length && activeGalleryIndex === memories[memories.length - 1].gallery.length - 1) {
    // Última parada completada: muestra pantalla final
    memoryCard.classList.add("hidden");
    timelineCard.classList.add("hidden");
    finalCard.classList.remove("hidden");
    return;
  }

  if (activeGalleryIndex < getActiveMemory().gallery.length - 1) {
    // Pasar a la siguiente foto de la misma parada
    activeGalleryIndex += 1;
    renderMemoryMedia(getActiveMemory());
  } else {
    // Desbloquear e ir a la siguiente parada del jardín
    unlockedStops = Math.max(unlockedStops, activeMemoryId + 1);
    if (activeMemoryId < memories.length) {
      openMemory(activeMemoryId + 1);
    } else {
      memoryCard.classList.add("hidden");
      timelineCard.classList.add("hidden");
      finalCard.classList.remove("hidden");
    }
  }
}

function stepGallery(direction) {
  const selectedMemory = getActiveMemory();
  if (!selectedMemory) return;

  const nextIndex = activeGalleryIndex + direction;
  const total = selectedMemory.gallery.length;

  if (nextIndex < 0) return;

  if (nextIndex >= total) {
    continueJourney();
    return;
  }

  activeGalleryIndex = nextIndex;
  renderMemoryMedia(selectedMemory);
}

function showGardenOverview() {
  memoryCard.classList.add("hidden");
  finalCard.classList.add("hidden");
  timelineCard.classList.remove("hidden");
  renderTimeline();
}

// Event Listeners
prevMediaBtn.addEventListener("click", () => stepGallery(-1));
nextMediaBtn.addEventListener("click", () => stepGallery(1));
completeStopBtn.addEventListener("click", continueJourney);
if (backToGardenBtn) backToGardenBtn.addEventListener("click", showGardenOverview);

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    unlockedStops = memories.length;
    openMemory(1);
  });
}

// Inicialización
createPetals();
renderTimeline();

