// =========================================================
// EL JARDÍN DE RECUERDOS PARA MAMÁ - RECORRIDO INTERACTIVO
// =========================================================

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
        src: "assets/bebes1.jpeg",
        fallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        alt: "Primeros años con Mamá",
        caption: "Tus primeros cuidados y abrazos que nos dieron refugio desde el primer día.",
      },
      {
        type: "image",
        src: "assets/bebes2.jpeg",
        fallback: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?auto=format&fit=crop&w=800&q=80",
        alt: "Mamá cuidándonos",
        caption: "Cada sonrisa tuya nos enseñó a sentirnos seguros y amados.",
      },
      {
        type: "image",
        src: "assets/bebes3.jpeg",
        fallback: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
        alt: "Primeras fotos juntos",
        caption: "Recuerdos llenos de dulzura que abrieron el camino de nuestra familia.",
      },
      {
        type: "image",
        src: "assets/bebes4.jpeg",
        fallback: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        alt: "Manos unidas",
        caption: "Sosteniendo nuestras manos en cada paso importante.",
      },
      {
        type: "image",
        src: "assets/bebes5.jpeg",
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
        src: "assets/crecer1.jpeg",
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        alt: "Momentos en casa",
        caption: "Tardes de charlas eternas y risas que alegran la casa.",
      },
      {
        type: "image",
        src: "assets/crecer2.jpeg",
        fallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        alt: "Charlas inolvidables",
        caption: "Siempre dispuesta a escuchar y dar el consejo justo en el momento exacto.",
      },
      {
        type: "image",
        src: "assets/crecer3.jpeg",
        fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        alt: "Creciendo juntos",
        caption: "Viendo cómo crecemos sin dejar de ser nuestra mayor compañera.",
      },
      {
        type: "image",
        src: "assets/crecer4.jpeg",
        fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        alt: "Tu alegría de siempre",
        caption: "Tu energía positiva transforma cualquier día gris en un día radiante.",
      },
      {
        type: "image",
        src: "assets/crecer5.jpeg",
        fallback: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80",
        alt: "Abrazos de Mamá",
        caption: "Estar a tu lado es siempre sentirnos en casa.",
      },
    ],
  },
  {
    id: 3,
    icon: "🌹",
    label: "Pasiones",
    title: "Compartiendo momentos inolvidables",
    description:
      "Las pasiones, los deportes, las risas en la cancha o celebrando cada logro juntos. Tu aliento incondicional nos llena de orgullo.",
    note: "🌹 Tercera parada: Tu entusiasmo y ejemplo de vida.",
    gallery: [
      {
        type: "image",
        src: "assets/futbol1.jpeg",
        fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        alt: "Pasión compartida",
        caption: "Celebrando momentos llenos de emoción y energía.",
      },
      {
        type: "image",
        src: "assets/futbol2.jpeg",
        fallback: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
        alt: "Siempre alentando",
        caption: "Tu presencia en cada evento importante marcando la diferencia.",
      },
      {
        type: "image",
        src: "assets/futbol3.jpeg",
        fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        alt: "Alegrías en equipo",
        caption: "Compartiendo la misma pasión y festejando cada triunfo.",
      },
      {
        type: "image",
        src: "assets/futbol4.jpeg",
        fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        alt: "Momentos de felicidad",
        caption: "Las mejores sonrisas que nacen de compartir lo que nos gusta.",
      },
      {
        type: "image",
        src: "assets/futbol5.jpeg",
        fallback: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
        alt: "Incondicionales",
        caption: "Tu aliento y apoyo no faltan nunca.",
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
        src: "assets/viajecitos1.jpeg",
        fallback: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        alt: "Paseos juntos",
        caption: "Nuestras mejores rutas y paisajes compartidos.",
      },
      {
        type: "image",
        src: "assets/viajecitos2.jpeg",
        fallback: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        alt: "Viajes especiales",
        caption: "Descubriendo nuevos lugares en familia con tu mejor sonrisa.",
      },
      {
        type: "image",
        src: "assets/viajecitos3.jpeg",
        fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        alt: "Momentos de desconexión",
        caption: "Disfrutando del sol, el aire libre y la buena compañía.",
      },
      {
        type: "image",
        src: "assets/viajecitos4.jpeg",
        fallback: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
        alt: "Fotos inolvidables",
        caption: "Cosas simples que se vuelven gigantes porque estamos juntos.",
      },
      {
        type: "image",
        src: "assets/viajecitos5.jpeg",
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
    title: "Rocco, mascotas y amor de hogar",
    description:
      "El calor de nuestro hogar, los mimos con Rocco, el cuidado de cada detalle y el amor incondicional que recibimos todos los días.",
    note: "🌷 Quinta parada: El calor del hogar y la compañía incondicional.",
    gallery: [
      {
        type: "image",
        src: "assets/rocco1.jpeg",
        fallback: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        alt: "Compañía especial",
        caption: "Rocco y los mimos que alegran cada día en casa.",
      },
      {
        type: "video",
        src: "assets/rocco2.mp4",
        fallback: "assets/rocco2.mp4",
        alt: "Video juguetón con Rocco",
        caption: "Momentos divertidos y juegos en el hogar.",
      },
      {
        type: "image",
        src: "assets/rocco3.jpeg",
        fallback: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
        alt: "Rincón de paz",
        caption: "La tranquilidad y ternura de compartir en familia.",
      },
      {
        type: "image",
        src: "assets/rocco4.jpeg",
        fallback: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
        alt: "Amor de hogar",
        caption: "Tu presencia que hace de la casa el lugar más lindo del mundo.",
      },
      {
        type: "video",
        src: "assets/rocco5.mp4",
        fallback: "assets/rocco5.mp4",
        alt: "Video especial en el hogar",
        caption: "Un recuerdo en movimiento lleno de cariño.",
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
        src: "assets/juntos1.jpeg",
        fallback: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        alt: "Familia unida",
        caption: "Todos nosotros somos felices porque te tenemos con nosotros.",
      },
      {
        type: "image",
        src: "assets/juntos2.jpeg",
        fallback: "https://images.unsplash.com/photo-1490578474895-699bc4e2cf59?auto=format&fit=crop&w=800&q=80",
        alt: "Sonrisas compartidas",
        caption: "Tu felicidad es la nuestra.",
      },
      {
        type: "image",
        src: "assets/juntos3.jpeg",
        fallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        alt: "Abrazo familiar",
        caption: "Gracias por darnos tu vida y tu cariño incondicional.",
      },
      {
        type: "image",
        src: "assets/juntos4.jpeg",
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        alt: "Festejo del Día de la Madre",
        caption: "¡Hoy y siempre te celebramos!",
      },
      {
        type: "image",
        src: "assets/juntos5.jpeg",
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
let currentView = "garden";

// Elementos del DOM
const btnViewGarden = document.getElementById("btn-view-garden");
const btnViewList = document.getElementById("btn-view-list");
const btnAudioToggle = document.getElementById("btn-audio-toggle");
const audioIcon = document.getElementById("audio-icon");
const audioText = document.getElementById("audio-text");
const topProgressBadge = document.getElementById("top-progress-badge");

const gardenSection = document.getElementById("garden-section");
const gardenCanvas = document.getElementById("garden-canvas");
const canvasWrapper = document.getElementById("canvas-wrapper");
const btnWalkPrev = document.getElementById("btn-walk-prev");
const btnWalkNext = document.getElementById("btn-walk-next");
const btnOpenCurrent = document.getElementById("btn-open-current");

const timelineCard = document.getElementById("timeline-card");
const timelineBoard = document.getElementById("timeline-board");
const timelineProgress = document.getElementById("timeline-progress");

const memoryModal = document.getElementById("memory-modal");
const memoryCard = document.getElementById("memory-card");
const modalCloseX = document.getElementById("modal-close-x");
const backToGardenBtn = document.getElementById("back-to-garden-btn");
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

const finalCard = document.getElementById("final-card");
const restartBtn = document.getElementById("restart-btn");

// =========================================================
// SINTETIZADOR DE MÚSICA Y SONIDO DE NATURALEZA (WEB AUDIO)
// =========================================================
class NatureAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.birdTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  toggle() {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    this.isPlaying = true;
    this.playChordSequence();
    this.scheduleBirds();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
    if (this.birdTimer) clearTimeout(this.birdTimer);
  }

  playChordSequence() {
    if (!this.isPlaying) return;

    const chords = [
      [261.63, 329.63, 392.00, 523.25],
      [196.00, 246.94, 293.66, 392.00],
      [220.00, 261.63, 329.63, 440.00],
      [174.61, 220.00, 261.63, 349.23],
    ];

    const currentChord = chords[Math.floor(Math.random() * chords.length)];
    currentChord.forEach((freq, i) => {
      this.playTone(freq, 2.8, 0.03 + i * 0.008);
    });

    this.timer = setTimeout(() => this.playChordSequence(), 3200);
  }

  scheduleBirds() {
    if (!this.isPlaying) return;
    this.playBirdChirp();
    const nextIn = 3000 + Math.random() * 6000;
    this.birdTimer = setTimeout(() => this.scheduleBirds(), nextIn);
  }

  playTone(freq, duration, gainVal = 0.05) {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainVal, this.ctx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playBirdChirp() {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      const baseFreq = 2000 + Math.random() * 800;
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(baseFreq - 300, now + 0.18);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}
  }

  playStepSound() {
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(320 + Math.random() * 80, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.08);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {}
  }
}

const audioSynth = new NatureAudioSynthesizer();

// =========================================================
// MOTOR DEL JARDÍN 2D (CANVAS CON PASTO, CAMINO Y PERSONAJE)
// =========================================================
class GardenCanvasEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.worldWidth = 1400;
    this.worldHeight = 700;

    this.stations = [
      { id: 1, x: 180, y: 520, name: "Las Semillas", icon: "🌱", color: "#66bb6a" },
      { id: 2, x: 380, y: 260, name: "El Sol Diario", icon: "🌻", color: "#fbc02d" },
      { id: 3, x: 600, y: 500, name: "Pasiones", icon: "🌹", color: "#e53935" },
      { id: 4, x: 820, y: 240, name: "Aventuras", icon: "🌸", color: "#ec407a" },
      { id: 5, x: 1040, y: 480, name: "El Hogar", icon: "🌷", color: "#ab47bc" },
      { id: 6, x: 1240, y: 280, name: "El Ramo", icon: "💐", color: "#26a69a" },
    ];

    this.character = {
      x: this.stations[0].x,
      y: this.stations[0].y,
      currentStationIndex: 0,
      targetStationIndex: 0,
      isWalking: false,
      progress: 0,
      facingLeft: false,
      walkCycle: 0,
    };

    this.wildflowers = [];
    this.butterflies = [];
    this.particles = [];
    this.grassTufts = [];
    this.time = 0;

    this.initWorld();
    this.bindEvents();
    this.resize();
    this.animate();
  }

  initWorld() {
    for (let i = 0; i < 180; i++) {
      this.wildflowers.push({
        x: Math.random() * this.worldWidth,
        y: Math.random() * this.worldHeight,
        type: Math.floor(Math.random() * 5),
        size: 8 + Math.random() * 10,
        phase: Math.random() * Math.PI * 2,
      });
    }

    for (let i = 0; i < 220; i++) {
      this.grassTufts.push({
        x: Math.random() * this.worldWidth,
        y: Math.random() * this.worldHeight,
        blades: 3 + Math.floor(Math.random() * 4),
        height: 12 + Math.random() * 14,
        phase: Math.random() * Math.PI * 2,
      });
    }

    for (let i = 0; i < 6; i++) {
      this.butterflies.push({
        x: 100 + Math.random() * (this.worldWidth - 200),
        y: 100 + Math.random() * (this.worldHeight - 200),
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        color: i % 2 === 0 ? "#ff80ab" : "#ffd54f",
        wingPhase: Math.random() * Math.PI,
      });
    }
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.viewportWidth = rect.width;
    this.viewportHeight = rect.height;
  }

  bindEvents() {
    window.addEventListener("resize", () => this.resize());

    this.canvas.addEventListener("click", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const worldPos = this.screenToWorld(clickX, clickY);

      this.stations.forEach((st, index) => {
        const dist = Math.hypot(st.x - worldPos.x, st.y - worldPos.y);
        if (dist < 48) {
          if (index < unlockedStops) {
            this.walkToStation(index);
          }
        }
      });
    });
  }

  screenToWorld(screenX, screenY) {
    const cameraX = this.getCameraX();
    const scale = this.getScale();
    return {
      x: screenX / scale + cameraX,
      y: (screenY / scale) * (this.worldHeight / this.viewportHeight),
    };
  }

  getScale() {
    return this.viewportHeight / this.worldHeight;
  }

  getCameraX() {
    const scale = this.getScale();
    const targetCamX = this.character.x - (this.viewportWidth / scale) / 2;
    const maxCamX = this.worldWidth - this.viewportWidth / scale;
    return Math.max(0, Math.min(targetCamX, Math.max(0, maxCamX)));
  }

  walkToStation(targetIndex) {
    if (this.character.isWalking) return;
    if (targetIndex === this.character.currentStationIndex) {
      openMemory(memories[targetIndex].id);
      return;
    }

    this.character.targetStationIndex = targetIndex;
    this.character.isWalking = true;
  }

  updateCharacter() {
    if (!this.character.isWalking) return;

    const dir = this.character.targetStationIndex > this.character.currentStationIndex ? 1 : -1;
    this.character.facingLeft = dir < 0;

    this.character.progress += 0.012;
    this.character.walkCycle += 0.22;

    if (Math.floor(this.character.walkCycle * 2) % 4 === 0) {
      audioSynth.playStepSound();
    }

    if (Math.random() < 0.3) {
      this.particles.push({
        x: this.character.x + (Math.random() - 0.5) * 10,
        y: this.character.y + 12,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -Math.random() * 1.2,
        life: 1,
        color: Math.random() < 0.5 ? "#f48fb1" : "#ffe082",
      });
    }

    if (this.character.progress >= 1) {
      const nextIndex = this.character.currentStationIndex + dir;
      this.character.currentStationIndex = nextIndex;
      this.character.progress = 0;

      if (nextIndex === this.character.targetStationIndex) {
        this.character.isWalking = false;
        const toSt = this.stations[this.character.targetStationIndex];
        this.character.x = toSt.x;
        this.character.y = toSt.y;

        openMemory(memories[nextIndex].id);
        return;
      }
    }

    const curStart = this.stations[this.character.currentStationIndex];
    const curEnd = this.stations[this.character.currentStationIndex + dir];

    const t = this.character.progress;
    const smoothT = t * t * (3 - 2 * t);
    this.character.x = curStart.x + (curEnd.x - curStart.x) * smoothT;
    this.character.y = curStart.y + (curEnd.y - curStart.y) * smoothT;
  }

  animate() {
    this.time += 0.03;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const scale = this.getScale();
    const cameraX = this.getCameraX();

    this.ctx.save();
    this.ctx.scale(scale, scale);
    this.ctx.translate(-cameraX, 0);

    this.drawLawnBackground();
    this.drawWildflowers();
    this.drawStonePath();
    this.drawGardenDecor();
    this.drawStations();

    this.updateCharacter();
    this.drawCharacter();

    this.updateAndDrawParticles();
    this.updateAndDrawButterflies();

    this.ctx.restore();

    requestAnimationFrame(() => this.animate());
  }

  drawLawnBackground() {
    const grad = this.ctx.createLinearGradient(0, 0, 0, this.worldHeight);
    grad.addColorStop(0, "#5b9241");
    grad.addColorStop(0.5, "#4d8033");
    grad.addColorStop(1, "#3c6724");
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.worldWidth, this.worldHeight);

    this.ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    for (let x = 0; x < this.worldWidth; x += 120) {
      for (let y = 0; y < this.worldHeight; y += 120) {
        if ((x + y) % 240 === 0) {
          this.ctx.beginPath();
          this.ctx.arc(x + 60, y + 60, 50, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }
    }
  }

  drawWildflowers() {
    this.grassTufts.forEach((tuft) => {
      const wind = Math.sin(this.time + tuft.phase) * 3;
      this.ctx.strokeStyle = "#6bb343";
      this.ctx.lineWidth = 1.8;
      for (let b = 0; b < tuft.blades; b++) {
        const offset = (b - tuft.blades / 2) * 3;
        this.ctx.beginPath();
        this.ctx.moveTo(tuft.x + offset, tuft.y);
        this.ctx.quadraticCurveTo(
          tuft.x + offset + wind,
          tuft.y - tuft.height / 2,
          tuft.x + offset + wind * 1.5,
          tuft.y - tuft.height
        );
        this.ctx.stroke();
      }
    });

    this.wildflowers.forEach((flower) => {
      const sway = Math.sin(this.time + flower.phase) * 2;
      const x = flower.x + sway;
      const y = flower.y;

      this.ctx.save();
      this.ctx.translate(x, y);

      this.ctx.strokeStyle = "#388e3c";
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(0, 8);
      this.ctx.stroke();

      if (flower.type === 0) {
        this.ctx.fillStyle = "#ffffff";
        for (let p = 0; p < 5; p++) {
          const ang = (p * Math.PI * 2) / 5;
          this.ctx.beginPath();
          this.ctx.arc(Math.cos(ang) * 4, Math.sin(ang) * 4, 3, 0, Math.PI * 2);
          this.ctx.fill();
        }
        this.ctx.fillStyle = "#fbc02d";
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (flower.type === 1) {
        this.ctx.fillStyle = "#f48fb1";
        this.ctx.beginPath();
        this.ctx.arc(0, -2, 4, 0, Math.PI);
        this.ctx.fill();
      } else if (flower.type === 2) {
        this.ctx.fillStyle = "#ce93d8";
        this.ctx.beginPath();
        this.ctx.arc(0, -4, 3, 0, Math.PI * 2);
        this.ctx.arc(0, -1, 2.5, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (flower.type === 3) {
        this.ctx.fillStyle = "#ffee58";
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = "#5d4037";
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.fillStyle = "#ef5350";
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 4, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    });
  }

  drawStonePath() {
    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.moveTo(this.stations[0].x, this.stations[0].y + 4);
    for (let i = 0; i < this.stations.length - 1; i++) {
      const p1 = this.stations[i];
      const p2 = this.stations[i + 1];
      const midX = (p1.x + p2.x) / 2;
      this.ctx.quadraticCurveTo(p1.x, p1.y + 4, midX, (p1.y + p2.y) / 2 + 4);
    }
    const lastSt = this.stations[this.stations.length - 1];
    this.ctx.lineTo(lastSt.x, lastSt.y + 4);
    this.ctx.strokeStyle = "rgba(20, 40, 10, 0.35)";
    this.ctx.lineWidth = 42;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.stations[0].x, this.stations[0].y);
    for (let i = 0; i < this.stations.length - 1; i++) {
      const p1 = this.stations[i];
      const p2 = this.stations[i + 1];
      const midX = (p1.x + p2.x) / 2;
      this.ctx.quadraticCurveTo(p1.x, p1.y, midX, (p1.y + p2.y) / 2);
    }
    this.ctx.lineTo(lastSt.x, lastSt.y);
    this.ctx.strokeStyle = "#c8b18a";
    this.ctx.lineWidth = 36;
    this.ctx.stroke();

    for (let i = 0; i < this.stations.length - 1; i++) {
      const p1 = this.stations[i];
      const p2 = this.stations[i + 1];
      const steps = 18;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const x = p1.x + (p2.x - p1.x) * t;
        const y = p1.y + (p2.y - p1.y) * t + Math.sin(t * Math.PI) * (i % 2 === 0 ? -20 : 20);

        this.ctx.fillStyle = s % 2 === 0 ? "#e0d0b0" : "#bfa888";
        this.ctx.beginPath();
        this.ctx.ellipse(x + (s % 3) * 2, y + (s % 2) * 2, 7, 5, s, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    this.ctx.restore();
  }

  drawGardenDecor() {
    const entryX = 80;
    const entryY = 520;

    this.ctx.save();
    this.ctx.fillStyle = "#8d6e63";
    this.ctx.fillRect(entryX - 16, entryY - 60, 6, 60);
    this.ctx.fillRect(entryX + 16, entryY - 60, 6, 60);

    this.ctx.strokeStyle = "#8d6e63";
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    this.ctx.arc(entryX, entryY - 60, 18, Math.PI, 0);
    this.ctx.stroke();

    this.ctx.fillStyle = "#ec407a";
    for (let a = 0; a < 7; a++) {
      const ang = Math.PI + (a * Math.PI) / 6;
      const fx = entryX + Math.cos(ang) * 20;
      const fy = entryY - 60 + Math.sin(ang) * 20;
      this.ctx.beginPath();
      this.ctx.arc(fx, fy, 4, 0, Math.PI * 2);
      this.ctx.fill();
    }

    const treePositions = [
      { x: 280, y: 120, color: "#f8bbd0" },
      { x: 500, y: 620, color: "#81c784" },
      { x: 720, y: 110, color: "#f8bbd0" },
      { x: 940, y: 610, color: "#81c784" },
      { x: 1160, y: 120, color: "#f8bbd0" },
    ];

    treePositions.forEach((tree) => {
      this.ctx.fillStyle = "#5d4037";
      this.ctx.fillRect(tree.x - 6, tree.y - 20, 12, 40);

      this.ctx.fillStyle = tree.color;
      this.ctx.beginPath();
      this.ctx.arc(tree.x, tree.y - 35, 30, 0, Math.PI * 2);
      this.ctx.arc(tree.x - 18, tree.y - 25, 22, 0, Math.PI * 2);
      this.ctx.arc(tree.x + 18, tree.y - 25, 22, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.ctx.restore();
  }

  drawStations() {
    this.stations.forEach((st, index) => {
      const isUnlocked = index < unlockedStops;
      const isCompleted = index + 1 < unlockedStops;
      const isCurrent = index === this.character.currentStationIndex;

      this.ctx.save();
      this.ctx.translate(st.x, st.y);

      this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      this.ctx.beginPath();
      this.ctx.ellipse(0, 14, 28, 12, 0, 0, Math.PI * 2);
      this.ctx.fill();

      if (isCurrent) {
        const pulse = 28 + Math.sin(this.time * 4) * 6;
        this.ctx.strokeStyle = "rgba(232, 145, 165, 0.6)";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, pulse, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      this.ctx.fillStyle = isCompleted ? "#81c784" : isUnlocked ? "#f8bbd0" : "#b0bec5";
      this.ctx.beginPath();
      this.ctx.arc(0, 0, 22, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.strokeStyle = isCurrent ? "#d86a82" : "#ffffff";
      this.ctx.lineWidth = 3;
      this.ctx.stroke();

      this.ctx.font = "20px 'Segoe UI Emoji', sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillText(st.icon, 0, 1);

      this.ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      this.ctx.strokeStyle = "#d86a82";
      this.ctx.lineWidth = 1.5;

      const labelText = `${st.id}. ${st.name}`;
      this.ctx.font = "bold 12px 'Nunito', sans-serif";
      const textWidth = this.ctx.measureText(labelText).width;

      const rectX = -textWidth / 2 - 8;
      const rectY = -42;
      const rectW = textWidth + 16;
      const rectH = 20;

      this.ctx.beginPath();
      if (this.ctx.roundRect) {
        this.ctx.roundRect(rectX, rectY, rectW, rectH, 10);
      } else {
        this.ctx.rect(rectX, rectY, rectW, rectH);
      }
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.fillStyle = isUnlocked ? "#2b181c" : "#78909c";
      this.ctx.fillText(labelText, 0, -32);

      this.ctx.restore();
    });
  }

  drawCharacter() {
    const char = this.character;
    const bounce = char.isWalking ? Math.abs(Math.sin(char.walkCycle * 2)) * 6 : 0;
    const legSwing = char.isWalking ? Math.sin(char.walkCycle) * 8 : 0;

    this.ctx.save();
    this.ctx.translate(char.x, char.y - bounce);

    if (char.facingLeft) {
      this.ctx.scale(-1, 1);
    }

    this.ctx.fillStyle = "rgba(0,0,0,0.22)";
    this.ctx.beginPath();
    this.ctx.ellipse(0, 12 + bounce * 0.5, 14, 6, 0, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.strokeStyle = "#3e2723";
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = "round";

    this.ctx.beginPath();
    this.ctx.moveTo(-4, 0);
    this.ctx.lineTo(-4 + legSwing, 12);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(4, 0);
    this.ctx.lineTo(4 - legSwing, 12);
    this.ctx.stroke();

    this.ctx.fillStyle = "#e891a5";
    this.ctx.beginPath();
    this.ctx.moveTo(-9, -8);
    this.ctx.lineTo(9, -8);
    this.ctx.lineTo(12, 2);
    this.ctx.lineTo(-12, 2);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle = "#ffcc80";
    this.ctx.beginPath();
    this.ctx.arc(0, -18, 10, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = "#5d4037";
    this.ctx.beginPath();
    this.ctx.arc(0, -20, 11, Math.PI * 0.8, Math.PI * 2.2);
    this.ctx.fill();

    this.ctx.fillStyle = "#fff9c4";
    this.ctx.beginPath();
    this.ctx.ellipse(0, -24, 15, 4, 0, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = "#e891a5";
    this.ctx.fillRect(-6, -27, 12, 3);

    this.ctx.font = "14px sans-serif";
    this.ctx.fillText("💐", 8, -8);

    this.ctx.restore();
  }

  updateAndDrawParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.03;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.life;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    }
  }

  updateAndDrawButterflies() {
    this.butterflies.forEach((b) => {
      b.x += b.vx + Math.sin(this.time + b.wingPhase) * 0.5;
      b.y += b.vy + Math.cos(this.time + b.wingPhase) * 0.5;
      b.wingPhase += 0.2;

      if (b.x < 50 || b.x > this.worldWidth - 50) b.vx *= -1;
      if (b.y < 50 || b.y > this.worldHeight - 50) b.vy *= -1;

      this.ctx.save();
      this.ctx.translate(b.x, b.y);

      const wingScale = Math.sin(b.wingPhase);
      this.ctx.fillStyle = b.color;

      this.ctx.beginPath();
      this.ctx.ellipse(-4, 0, Math.abs(wingScale) * 6, 5, -0.2, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.ellipse(4, 0, Math.abs(wingScale) * 6, 5, 0.2, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.restore();
    });
  }
}

let gardenEngine = null;

// =========================================================
// RENDERIZADO DE GALERÍA Y DTOs
// =========================================================
function createImageMedia(mediaItem) {
  const figure = document.createElement("figure");
  figure.className = "photo-frame";

  const image = document.createElement("img");
  image.src = mediaItem.src;
  image.alt = mediaItem.alt || "Recuerdo";

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
    completeStopBtn.textContent = "Seguir Caminando →";
  }
}

function updateTopProgress() {
  topProgressBadge.textContent = `🌸 ${activeMemoryId} / ${memories.length}`;
  timelineProgress.textContent = `Flor ${activeMemoryId} de ${memories.length}`;

  if (btnWalkPrev) btnWalkPrev.disabled = activeMemoryId <= 1;
  if (btnWalkNext) btnWalkNext.disabled = activeMemoryId >= memories.length && unlockedStops < memories.length;
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

  memoryModal.classList.remove("hidden");
  updateTopProgress();
  renderTimeline();
}

function closeMemoryModal() {
  memoryModal.classList.add("hidden");
}

function continueJourney() {
  const curMem = getActiveMemory();
  if (!curMem) return;

  if (activeGalleryIndex < curMem.gallery.length - 1) {
    activeGalleryIndex += 1;
    renderMemoryMedia(curMem);
  } else {
    unlockedStops = Math.max(unlockedStops, activeMemoryId + 1);
    closeMemoryModal();

    if (activeMemoryId < memories.length) {
      const nextIndex = activeMemoryId;
      if (gardenEngine) {
        gardenEngine.walkToStation(nextIndex);
      } else {
        openMemory(activeMemoryId + 1);
      }
    } else {
      gardenSection.classList.add("hidden");
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

function renderTimeline() {
  if (!timelineBoard) return;
  timelineBoard.innerHTML = "";

  memories.forEach((memory, index) => {
    const stopButton = document.createElement("button");
    stopButton.type = "button";
    stopButton.className = "timeline-stop";

    const isUnlocked = index < unlockedStops;
    const isCompleted = index + 1 < unlockedStops;
    const isActive = memory.id === activeMemoryId;

    if (isUnlocked) stopButton.classList.add("unlocked");
    if (isCompleted) stopButton.classList.add("completed");
    if (isActive) stopButton.classList.add("active");

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
      if (index + 1 < unlockedStops) connector.classList.add("completed");
      timelineBoard.appendChild(connector);
    }
  });
}

function createPetals() {
  const container = document.getElementById("petals-container");
  if (!container) return;

  const petalIcons = ["🌸", "🌷", "🌹", "🌺", "✨"];
  for (let i = 0; i < 20; i++) {
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

function switchView(view) {
  currentView = view;
  if (view === "garden") {
    btnViewGarden.classList.add("active");
    btnViewList.classList.remove("active");
    gardenSection.classList.remove("hidden");
    timelineCard.classList.add("hidden");
    finalCard.classList.add("hidden");
  } else {
    btnViewList.classList.add("active");
    btnViewGarden.classList.remove("active");
    gardenSection.classList.add("hidden");
    timelineCard.classList.remove("hidden");
    finalCard.classList.add("hidden");
    renderTimeline();
  }
}

// Event Listeners
btnViewGarden.addEventListener("click", () => switchView("garden"));
btnViewList.addEventListener("click", () => switchView("list"));

btnAudioToggle.addEventListener("click", () => {
  const active = audioSynth.toggle();
  btnAudioToggle.classList.toggle("active", active);
  audioIcon.textContent = active ? "🔊" : "🎵";
  audioText.textContent = active ? "Música: On" : "Música: Off";
});

btnWalkNext.addEventListener("click", () => {
  const nextTargetIndex = Math.min(memories.length - 1, activeMemoryId);
  unlockedStops = Math.max(unlockedStops, nextTargetIndex + 1);
  if (gardenEngine) {
    gardenEngine.walkToStation(nextTargetIndex);
  } else {
    openMemory(nextTargetIndex + 1);
  }
});

btnWalkPrev.addEventListener("click", () => {
  const prevTargetIndex = Math.max(0, activeMemoryId - 2);
  if (gardenEngine) {
    gardenEngine.walkToStation(prevTargetIndex);
  } else {
    openMemory(prevTargetIndex + 1);
  }
});

btnOpenCurrent.addEventListener("click", () => {
  openMemory(activeMemoryId);
});

prevMediaBtn.addEventListener("click", () => stepGallery(-1));
nextMediaBtn.addEventListener("click", () => stepGallery(1));
completeStopBtn.addEventListener("click", continueJourney);

if (modalCloseX) modalCloseX.addEventListener("click", closeMemoryModal);
if (backToGardenBtn) backToGardenBtn.addEventListener("click", closeMemoryModal);

memoryModal.addEventListener("click", (e) => {
  if (e.target === memoryModal) {
    closeMemoryModal();
  }
});

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    unlockedStops = memories.length;
    activeMemoryId = 1;
    switchView("garden");
    if (gardenEngine) gardenEngine.walkToStation(0);
    openMemory(1);
  });
}

// Inicialización
createPetals();
renderTimeline();
if (gardenCanvas) {
  gardenEngine = new GardenCanvasEngine(gardenCanvas);
}
