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
    bloom: {
      stageIcon: "🌱",
      title: "¡Hacé florecer el brote!",
      instruction: "Tocá la regadera 🚿 para regar la semilla con cariño y abrir tus primeras fotos.",
      actionBtn: "🚿 Regar la Flor",
      bloomedIcon: "🌸",
    },
    gallery: [
      {
        type: "image",
        src: "assets/bebes1.jpeg",
        fallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        alt: "Primeros años con Mamá",
        caption: "Tus primeros cuidados y abrazos que nos dieron refugio desde el primer día.",
        backNote: "💌 'Tus abrazos siempre fueron y serán nuestro lugar más seguro en el mundo. ¡Gracias Mamá!'",
      },
      {
        type: "image",
        src: "assets/bebes2.jpeg",
        fallback: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?auto=format&fit=crop&w=800&q=80",
        alt: "Mamá cuidándonos",
        caption: "Cada sonrisa tuya nos enseñó a sentirnos seguros y amados.",
        backNote: "💌 'Gracias por cada noche en vela, por la paciencia y por enseñarnos a amar.'",
      },
      {
        type: "image",
        src: "assets/bebes3.jpeg",
        fallback: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
        alt: "Primeras fotos juntos",
        caption: "Recuerdos llenos de dulzura que abrieron el camino de nuestra familia.",
        backNote: "💌 'Mirar estas fotos es volver a sentir la ternura de la infancia a tu lado.'",
      },
      {
        type: "image",
        src: "assets/bebes4.jpeg",
        fallback: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        alt: "Manos unidas",
        caption: "Sosteniendo nuestras manos en cada paso importante.",
        backNote: "💌 'Nos diste el empujón para volar, pero siempre sosteniendo nuestra mano.'",
      },
      {
        type: "image",
        src: "assets/bebes5.jpeg",
        fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        alt: "Inicio de la historia",
        caption: "Gracias por regar nuestro crecimiento con paciencia y cariño.",
        backNote: "💌 'Todo lo lindo que floreció en nuestras vidas empezó por tus semillas de amor.'",
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
    bloom: {
      stageIcon: "☁️",
      title: "¡Hacé salir el sol!",
      instruction: "Tocá el sol ☀️ para iluminar el día y desplegar las fotos de cada día.",
      actionBtn: "☀️ Encender el Sol",
      bloomedIcon: "🌻",
    },
    gallery: [
      {
        type: "image",
        src: "assets/crecer1.jpeg",
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        alt: "Momentos en casa",
        caption: "Tardes de charlas eternas y risas que alegran la casa.",
        backNote: "💌 'Una charla de mates con vos arregla hasta el día más complicado.'",
      },
      {
        type: "image",
        src: "assets/crecer2.jpeg",
        fallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        alt: "Charlas inolvidables",
        caption: "Siempre dispuesta a escuchar y dar el consejo justo en el momento exacto.",
        backNote: "💌 'Tus palabras y consejos sabios son nuestra mejor brújula.'",
      },
      {
        type: "image",
        src: "assets/crecer3.jpeg",
        fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        alt: "Creciendo juntos",
        caption: "Viendo cómo crecemos sin dejar de ser nuestra mayor compañera.",
        backNote: "💌 'El tiempo pasa pero tu amor de madre permanece intacto e infinito.'",
      },
      {
        type: "image",
        src: "assets/crecer4.jpeg",
        fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        alt: "Tu alegría de siempre",
        caption: "Tu energía positiva transforma cualquier día gris en un día radiante.",
        backNote: "💌 'Tu risa es la música favorita de toda la casa.'",
      },
      {
        type: "image",
        src: "assets/crecer5.jpeg",
        fallback: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80",
        alt: "Abrazos de Mamá",
        caption: "Estar a tu lado es siempre sentirnos en casa.",
        backNote: "💌 'Donde estés vos, ahí está nuestro hogar.'",
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
    bloom: {
      stageIcon: "🌹",
      title: "¡Desplegá la flor de las pasiones!",
      instruction: "Soplá o tocá la rosa 🌹 para esparcir sus pétalos de alegría y emoción.",
      actionBtn: "🌹 Esparcir Pétalos",
      bloomedIcon: "🎉",
    },
    gallery: [
      {
        type: "image",
        src: "assets/futbol1.jpeg",
        fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        alt: "Pasión compartida",
        caption: "Celebrando momentos llenos de emoción y energía.",
        backNote: "💌 'Nuestra hincha incondicional número uno. ¡Qué lindo gritar goles juntos!'",
      },
      {
        type: "image",
        src: "assets/futbol2.jpeg",
        fallback: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
        alt: "Siempre alentando",
        caption: "Tu presencia en cada evento importante marcando la diferencia.",
        backNote: "💌 'Saber que estás en la tribuna o al lado nuestro lo hace todo especial.'",
      },
      {
        type: "image",
        src: "assets/futbol3.jpeg",
        fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        alt: "Alegrías en equipo",
        caption: "Compartiendo la misma pasión y festejando cada triunfo.",
        backNote: "💌 'En las buenas y en las malas, siempre unidos compartiendo pasiones.'",
      },
      {
        type: "image",
        src: "assets/futbol4.jpeg",
        fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        alt: "Momentos de felicidad",
        caption: "Las mejores sonrisas que nacen de compartir lo que nos gusta.",
        backNote: "💌 'Tus ganas de disfrutar la vida contagian a cualquiera.'",
      },
      {
        type: "image",
        src: "assets/futbol5.jpeg",
        fallback: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
        alt: "Incondicionales",
        caption: "Tu aliento y apoyo no faltan nunca.",
        backNote: "💌 '¡Sos de oro Mamá! Gracias por estar siempre en primera fila.'",
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
    bloom: {
      stageIcon: "✉️",
      title: "¡Abrí la postal del viaje!",
      instruction: "Tocá la postal ✈️ para sellar las aventuras compartidas en el camino.",
      actionBtn: "✈️ Desplegar Postal",
      bloomedIcon: "🌸",
    },
    gallery: [
      {
        type: "image",
        src: "assets/viajecitos1.jpeg",
        fallback: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        alt: "Paseos juntos",
        caption: "Nuestras mejores rutas y paisajes compartidos.",
        backNote: "💌 'El destino no importa cuando la mejor viajera del mundo sos vos.'",
      },
      {
        type: "image",
        src: "assets/viajecitos2.jpeg",
        fallback: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        alt: "Viajes especiales",
        caption: "Descubriendo nuevos lugares en familia con tu mejor sonrisa.",
        backNote: "💌 'Coleccionar fotos y momentos a tu lado es nuestro pasatiempo favorito.'",
      },
      {
        type: "image",
        src: "assets/viajecitos3.jpeg",
        fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        alt: "Momentos de desconexión",
        caption: "Disfrutando del sol, el aire libre y la buena compañía.",
        backNote: "💌 'Días al aire libre, mates al sol y risas inolvidables.'",
      },
      {
        type: "image",
        src: "assets/viajecitos4.jpeg",
        fallback: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
        alt: "Fotos inolvidables",
        caption: "Cosas simples que se vuelven gigantes porque estamos juntos.",
        backNote: "💌 'Cada escapada en familia renueva nuestras energías y unión.'",
      },
      {
        type: "image",
        src: "assets/viajecitos5.jpeg",
        fallback: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80",
        alt: "Próximos destinos",
        caption: "¡Y cuántos caminos más nos quedan por recorrer juntos!",
        backNote: "💌 '¡A preparar las valijas para los próximos destinos juntos!'",
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
    bloom: {
      stageIcon: "🏠",
      title: "¡Entrá al calor del hogar!",
      instruction: "Tocá la huellita 🐾 de Rocco para abrir la puerta de casa y los recuerdos.",
      actionBtn: "🐾 Caricia a Rocco",
      bloomedIcon: "🌷",
    },
    gallery: [
      {
        type: "image",
        src: "assets/rocco1.jpeg",
        fallback: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        alt: "Compañía especial",
        caption: "Rocco y los mimos que alegran cada día en casa.",
        backNote: "💌 'Rocco moviendo la cola y vos recibiéndonos con una sonrisa... ¡El mejor recibimiento!'",
      },
      {
        type: "video",
        src: "assets/rocco2.mp4",
        fallback: "assets/rocco2.mp4",
        alt: "Video juguetón con Rocco",
        caption: "Momentos divertidos y juegos en el hogar.",
        backNote: "💌 'Rocco sabe muy bien quién es su favorita en la casa.'",
      },
      {
        type: "image",
        src: "assets/rocco3.jpeg",
        fallback: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
        alt: "Rincón de paz",
        caption: "La tranquilidad y ternura de compartir en familia.",
        backNote: "💌 'La calidez de nuestro hogar es reflejo directo de tu dulzura.'",
      },
      {
        type: "image",
        src: "assets/rocco4.jpeg",
        fallback: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
        alt: "Amor de hogar",
        caption: "Tu presencia que hace de la casa el lugar más lindo del mundo.",
        backNote: "💌 'Gracias por cuidar cada detalle con tanto amor y dedicación.'",
      },
      {
        type: "video",
        src: "assets/rocco5.mp4",
        fallback: "assets/rocco5.mp4",
        alt: "Video especial en el hogar",
        caption: "Un recuerdo en movimiento lleno de cariño.",
        backNote: "💌 'Momentos cotidianos que valen oro para el corazón.'",
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
    bloom: {
      stageIcon: "🎀",
      title: "¡Atá el gran ramo de la familia!",
      instruction: "Tocá la cinta rosa 🎀 para unir todas las flores y enviar el gran abrazo familiar.",
      actionBtn: "🎀 Atar el Ramo Final",
      bloomedIcon: "💐",
    },
    gallery: [
      {
        type: "image",
        src: "assets/juntos1.jpeg",
        fallback: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        alt: "Familia unida",
        caption: "Todos nosotros somos felices porque te tenemos con nosotros.",
        backNote: "💌 'Sos el pilar y el corazón que une a toda esta familia. ¡Te adoramos!'",
      },
      {
        type: "image",
        src: "assets/juntos2.jpeg",
        fallback: "https://images.unsplash.com/photo-1490578474895-699bc4e2cf59?auto=format&fit=crop&w=800&q=80",
        alt: "Sonrisas compartidas",
        caption: "Tu felicidad es la nuestra.",
        backNote: "💌 'Verte sonreír y disfrutar es el mejor regalo para todos nosotros.'",
      },
      {
        type: "image",
        src: "assets/juntos3.jpeg",
        fallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        alt: "Abrazo familiar",
        caption: "Gracias por darnos tu vida y tu cariño incondicional.",
        backNote: "💌 'Un abrazo bien apretado de parte de todos los que te amamos con el alma.'",
      },
      {
        type: "image",
        src: "assets/juntos4.jpeg",
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        alt: "Festejo del Día de la Madre",
        caption: "¡Hoy y siempre te celebramos!",
        backNote: "💌 '¡Salud por la mejor madre del universo entero! ❤️'",
      },
      {
        type: "image",
        src: "assets/juntos5.jpeg",
        fallback: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
        alt: "Te amamos Mamá",
        caption: "¡Te amamos con todo el corazón! ❤️",
        backNote: "💌 '¡Gracias por existir! Que pases un día hermoso tan radiante como vos.'",
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
const memoryNote = document.getElementById("memory-note");

const bloomOverlay = document.getElementById("bloom-overlay");
const bloomCloseX = document.getElementById("bloom-close-x");
const bloomTitle = document.getElementById("bloom-title");
const bloomInstruction = document.getElementById("bloom-instruction");
const bloomInteractiveArea = document.getElementById("bloom-interactive-area");
const bloomProgressFill = document.getElementById("bloom-progress-fill");
const bloomProgressText = document.getElementById("bloom-progress-text");

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

  playBloomSound() {
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.55);
      });
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

    // Waypoints: 0 es la Entrada del Jardín, 1..6 son las flores/paradas
    this.waypoints = [
      { id: 0, x: 70, y: 520, isStation: false, name: "Entrada del Jardín", icon: "🚪" },
      { id: 1, x: 220, y: 520, isStation: true, name: "Las Semillas", icon: "🌱", color: "#66bb6a" },
      { id: 2, x: 420, y: 260, isStation: true, name: "El Sol Diario", icon: "🌻", color: "#fbc02d" },
      { id: 3, x: 640, y: 500, isStation: true, name: "Pasiones", icon: "🌹", color: "#e53935" },
      { id: 4, x: 860, y: 240, isStation: true, name: "Aventuras", icon: "🌸", color: "#ec407a" },
      { id: 5, x: 1060, y: 480, isStation: true, name: "El Hogar", icon: "🌷", color: "#ab47bc" },
      { id: 6, x: 1260, y: 280, isStation: true, name: "El Ramo", icon: "💐", color: "#26a69a" },
    ];

    // Personaje arranca en la Entrada (Waypoint 0)
    this.character = {
      x: this.waypoints[0].x,
      y: this.waypoints[0].y,
      currentWaypointIndex: 0,
      targetWaypointIndex: 0,
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

    const handlePointerMove = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const worldPos = this.screenToWorld(clickX, clickY);

      let isHoveringStation = false;
      const curIndex = this.character.currentWaypointIndex;

      this.waypoints.forEach((wp) => {
        if (!wp.isStation) return;
        const dist = Math.hypot(wp.x - worldPos.x, wp.y - worldPos.y);
        if (dist < 60) {
          const isAccessible = wp.id <= unlockedStops || wp.id === curIndex + 1 || wp.id === curIndex - 1 || (curIndex === 0 && wp.id === 1);
          if (isAccessible) {
            isHoveringStation = true;
          }
        }
      });

      this.canvas.style.cursor = isHoveringStation ? "pointer" : "grab";
    };

    const handleCanvasClick = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const worldPos = this.screenToWorld(clickX, clickY);
      const curIndex = this.character.currentWaypointIndex;

      this.waypoints.forEach((wp) => {
        if (!wp.isStation) return;
        const dist = Math.hypot(wp.x - worldPos.x, wp.y - worldPos.y);
        if (dist < 60) {
          const isAccessible = wp.id <= unlockedStops || wp.id === curIndex + 1 || wp.id === curIndex - 1 || (curIndex === 0 && wp.id === 1);
          if (isAccessible) {
            unlockedStops = Math.max(unlockedStops, wp.id);
            this.walkToWaypoint(wp.id);
          }
        }
      });
    };

    this.canvas.addEventListener("mousemove", handlePointerMove);
    this.canvas.addEventListener("click", handleCanvasClick);
    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        handleCanvasClick({ clientX: touch.clientX, clientY: touch.clientY });
      }
    }, { passive: true });
  }

  screenToWorld(screenX, screenY) {
    const cameraX = this.getCameraX();
    const scale = this.getScale();
    return {
      x: screenX / scale + cameraX,
      y: screenY / scale,
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

  walkToWaypoint(targetWaypointIndex) {
    if (this.character.isWalking) return;
    if (targetWaypointIndex === this.character.currentWaypointIndex) {
      if (targetWaypointIndex > 0) {
        triggerBloomInteraction(targetWaypointIndex);
      }
      return;
    }

    this.character.targetWaypointIndex = targetWaypointIndex;
    this.character.isWalking = true;
  }

  updateCharacter() {
    if (!this.character.isWalking) return;

    const dir = this.character.targetWaypointIndex > this.character.currentWaypointIndex ? 1 : -1;
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
      const nextIndex = this.character.currentWaypointIndex + dir;
      this.character.currentWaypointIndex = nextIndex;
      this.character.progress = 0;

      if (nextIndex === this.character.targetWaypointIndex) {
        this.character.isWalking = false;
        const toWp = this.waypoints[this.character.targetWaypointIndex];
        this.character.x = toWp.x;
        this.character.y = toWp.y;

        if (nextIndex > 0) {
          activeMemoryId = nextIndex;
          updateTopProgress();
          triggerBloomInteraction(nextIndex);
        } else {
          updateTopProgress();
        }
        return;
      }
    }

    const curStart = this.waypoints[this.character.currentWaypointIndex];
    const curEnd = this.waypoints[this.character.currentWaypointIndex + dir];

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
    this.ctx.moveTo(this.waypoints[0].x, this.waypoints[0].y + 4);
    for (let i = 0; i < this.waypoints.length - 1; i++) {
      const p1 = this.waypoints[i];
      const p2 = this.waypoints[i + 1];
      const midX = (p1.x + p2.x) / 2;
      this.ctx.quadraticCurveTo(p1.x, p1.y + 4, midX, (p1.y + p2.y) / 2 + 4);
    }
    const lastSt = this.waypoints[this.waypoints.length - 1];
    this.ctx.lineTo(lastSt.x, lastSt.y + 4);
    this.ctx.strokeStyle = "rgba(20, 40, 10, 0.35)";
    this.ctx.lineWidth = 42;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.waypoints[0].x, this.waypoints[0].y);
    for (let i = 0; i < this.waypoints.length - 1; i++) {
      const p1 = this.waypoints[i];
      const p2 = this.waypoints[i + 1];
      const midX = (p1.x + p2.x) / 2;
      this.ctx.quadraticCurveTo(p1.x, p1.y, midX, (p1.y + p2.y) / 2);
    }
    this.ctx.lineTo(lastSt.x, lastSt.y);
    this.ctx.strokeStyle = "#c8b18a";
    this.ctx.lineWidth = 36;
    this.ctx.stroke();

    for (let i = 0; i < this.waypoints.length - 1; i++) {
      const p1 = this.waypoints[i];
      const p2 = this.waypoints[i + 1];
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
    const entryX = 70;
    const entryY = 520;

    this.ctx.save();
    // Portal de Entrada
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

    // Cartel de Entrada
    this.ctx.fillStyle = "#fff8e1";
    this.ctx.strokeStyle = "#8d6e63";
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.roundRect ? this.ctx.roundRect(entryX - 35, entryY - 95, 70, 20, 8) : this.ctx.rect(entryX - 35, entryY - 95, 70, 20);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.fillStyle = "#5d4037";
    this.ctx.font = "bold 10px 'Nunito', sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.fillText("ENTRADA 🌸", entryX, -81);

    const treePositions = [
      { x: 300, y: 120, color: "#f8bbd0" },
      { x: 520, y: 620, color: "#81c784" },
      { x: 740, y: 110, color: "#f8bbd0" },
      { x: 960, y: 610, color: "#81c784" },
      { x: 1180, y: 120, color: "#f8bbd0" },
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
    this.waypoints.forEach((wp) => {
      if (!wp.isStation) return;
      const index = wp.id; // 1..6

      const isUnlocked = index <= unlockedStops;
      const isCompleted = index < unlockedStops;
      const isCurrent = index === this.character.currentWaypointIndex;

      this.ctx.save();
      this.ctx.translate(wp.x, wp.y);

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
      this.ctx.fillText(wp.icon, 0, 1);

      this.ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      this.ctx.strokeStyle = "#d86a82";
      this.ctx.lineWidth = 1.5;

      const labelText = `${wp.id}. ${wp.name}`;
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
// RENDERIZADO DE GALERÍA, POLAROIDS Y BLOOM OVERLAY
// =========================================================
function triggerBloomInteraction(memoryId) {
  const selectedMemory = memories.find((m) => m.id === memoryId);
  if (!selectedMemory) return;

  activeMemoryId = memoryId;
  let clickCount = 0;
  const targetClicks = 3;

  const updateProgress = () => {
    const pct = Math.min(100, Math.round((clickCount / targetClicks) * 100));
    if (bloomProgressFill) bloomProgressFill.style.width = `${pct}%`;
    if (bloomProgressText) bloomProgressText.textContent = `${clickCount} / ${targetClicks}`;
  };

  const handleBloomComplete = () => {
    audioSynth.playBloomSound();
    setTimeout(() => {
      bloomOverlay.classList.add("hidden");
      openMemory(memoryId);
    }, 550);
  };

  if (!bloomInteractiveArea) {
    openMemory(memoryId);
    return;
  }

  bloomInteractiveArea.innerHTML = "";
  clickCount = 0;
  updateProgress();

  if (memoryId === 1) {
    bloomTitle.textContent = "¡Regá el brote para hacerlo florecer!";
    bloomInstruction.textContent = "Tocá 3 veces la regadera 🚿 o el brote 🌱 para darle agua.";

    const centerStage = document.createElement("div");
    centerStage.className = "bloom-stage-center";
    centerStage.textContent = "🌱";

    const canBtn = document.createElement("button");
    canBtn.type = "button";
    canBtn.className = "bloom-target-item";
    canBtn.innerHTML = `<span>🚿</span><span class="bloom-target-label">Regar</span>`;

    canBtn.onclick = () => {
      clickCount++;
      audioSynth.playStepSound();
      updateProgress();

      if (clickCount === 1) centerStage.textContent = "🌿";
      else if (clickCount === 2) centerStage.textContent = "🌸";
      else if (clickCount >= 3) {
        centerStage.textContent = "🌺";
        centerStage.classList.add("bloom-stage-pop");
        handleBloomComplete();
      }
    };

    bloomInteractiveArea.appendChild(centerStage);
    bloomInteractiveArea.appendChild(canBtn);

  } else if (memoryId === 2) {
    bloomTitle.textContent = "¡Encendé el sol radiante!";
    bloomInstruction.textContent = "Tocá las 3 nubes ☁️ para despejar el cielo.";

    const sunStage = document.createElement("div");
    sunStage.className = "bloom-stage-center";
    sunStage.textContent = "⛅";

    const cloudsContainer = document.createElement("div");
    cloudsContainer.style.display = "flex";
    cloudsContainer.style.gap = "10px";

    for (let c = 1; c <= 3; c++) {
      const cloudBtn = document.createElement("button");
      cloudBtn.type = "button";
      cloudBtn.className = "bloom-target-item";
      cloudBtn.innerHTML = `<span>☁️</span><span class="bloom-target-label">Despejar</span>`;
      cloudBtn.onclick = () => {
        cloudBtn.style.opacity = "0.2";
        cloudBtn.style.pointerEvents = "none";
        clickCount++;
        audioSynth.playStepSound();
        updateProgress();

        if (clickCount === 1) sunStage.textContent = "🌤️";
        else if (clickCount === 2) sunStage.textContent = "☀️";
        else if (clickCount >= 3) {
          sunStage.textContent = "🌻";
          sunStage.classList.add("bloom-stage-pop");
          handleBloomComplete();
        }
      };
      cloudsContainer.appendChild(cloudBtn);
    }

    bloomInteractiveArea.appendChild(sunStage);
    bloomInteractiveArea.appendChild(cloudsContainer);

  } else if (memoryId === 3) {
    bloomTitle.textContent = "¡Juntá los pétalos de las pasiones!";
    bloomInstruction.textContent = "Tocá los 3 pétalos 🌹 flotantes para armar la flor.";

    const roseStage = document.createElement("div");
    roseStage.className = "bloom-stage-center";
    roseStage.textContent = "🥀";

    const petalsContainer = document.createElement("div");
    petalsContainer.style.display = "flex";
    petalsContainer.style.gap = "10px";

    const petalIcons = ["🌹", "🌸", "🌺"];
    for (let p = 0; p < 3; p++) {
      const petalBtn = document.createElement("button");
      petalBtn.type = "button";
      petalBtn.className = "bloom-target-item";
      petalBtn.innerHTML = `<span>${petalIcons[p]}</span><span class="bloom-target-label">Juntar</span>`;
      petalBtn.onclick = () => {
        petalBtn.style.opacity = "0.2";
        petalBtn.style.pointerEvents = "none";
        clickCount++;
        audioSynth.playStepSound();
        updateProgress();

        if (clickCount === 1) roseStage.textContent = "🌹";
        else if (clickCount === 2) roseStage.textContent = "✨🌹✨";
        else if (clickCount >= 3) {
          roseStage.textContent = "💖🌹🎉";
          roseStage.classList.add("bloom-stage-pop");
          handleBloomComplete();
        }
      };
      petalsContainer.appendChild(petalBtn);
    }

    bloomInteractiveArea.appendChild(roseStage);
    bloomInteractiveArea.appendChild(petalsContainer);

  } else if (memoryId === 4) {
    bloomTitle.textContent = "¡Sellá el pasaporte de aventuras!";
    bloomInstruction.textContent = "Tocá los 3 destinos 🗽 🗼 🏝️ para estampillar el viaje.";

    const passportStage = document.createElement("div");
    passportStage.className = "bloom-stage-center";
    passportStage.textContent = "✉️";

    const stampsContainer = document.createElement("div");
    stampsContainer.style.display = "flex";
    stampsContainer.style.gap = "10px";

    const stamps = [
      { icon: "🗽", label: "Nueva York" },
      { icon: "🗼", label: "París" },
      { icon: "🏝️", label: "Playa" },
    ];

    stamps.forEach((st) => {
      const stampBtn = document.createElement("button");
      stampBtn.type = "button";
      stampBtn.className = "bloom-target-item";
      stampBtn.innerHTML = `<span>${st.icon}</span><span class="bloom-target-label">${st.label}</span>`;
      stampBtn.onclick = () => {
        stampBtn.style.opacity = "0.2";
        stampBtn.style.pointerEvents = "none";
        clickCount++;
        audioSynth.playStepSound();
        updateProgress();

        if (clickCount === 1) passportStage.textContent = "🗽✉️";
        else if (clickCount === 2) passportStage.textContent = "🗽🗼✉️";
        else if (clickCount >= 3) {
          passportStage.textContent = "✈️🌸🏝️";
          passportStage.classList.add("bloom-stage-pop");
          handleBloomComplete();
        }
      };
      stampsContainer.appendChild(stampBtn);
    });

    bloomInteractiveArea.appendChild(passportStage);
    bloomInteractiveArea.appendChild(stampsContainer);

  } else if (memoryId === 5) {
    bloomTitle.textContent = "¡Consentí a Rocco en casa!";
    bloomInstruction.textContent = "Tocá a Rocco 🐶 3 veces para darle cariños.";

    const roccoStage = document.createElement("div");
    roccoStage.className = "bloom-stage-center";
    roccoStage.textContent = "🐶";

    const patBtn = document.createElement("button");
    patBtn.type = "button";
    patBtn.className = "bloom-target-item";
    patBtn.innerHTML = `<span>🐾</span><span class="bloom-target-label">Mimo</span>`;

    patBtn.onclick = () => {
      clickCount++;
      audioSynth.playStepSound();
      updateProgress();

      if (clickCount === 1) roccoStage.textContent = "🐶❤️";
      else if (clickCount === 2) roccoStage.textContent = "🐶💬 ¡Woof!";
      else if (clickCount >= 3) {
        roccoStage.textContent = "🥰🐶🌷";
        roccoStage.classList.add("bloom-stage-pop");
        handleBloomComplete();
      }
    };

    bloomInteractiveArea.appendChild(roccoStage);
    bloomInteractiveArea.appendChild(patBtn);

  } else if (memoryId === 6) {
    bloomTitle.textContent = "¡Atá el gran ramo de la familia!";
    bloomInstruction.textContent = "Tocá las 3 cintas rosa 🎀 para armar el ramo.";

    const bouquetStage = document.createElement("div");
    bouquetStage.className = "bloom-stage-center";
    bouquetStage.textContent = "🌻🌹🌷";

    const ribbonsContainer = document.createElement("div");
    ribbonsContainer.style.display = "flex";
    ribbonsContainer.style.gap = "10px";

    for (let r = 1; r <= 3; r++) {
      const ribbonBtn = document.createElement("button");
      ribbonBtn.type = "button";
      ribbonBtn.className = "bloom-target-item";
      ribbonBtn.innerHTML = `<span>🎀</span><span class="bloom-target-label">Atar</span>`;
      ribbonBtn.onclick = () => {
        ribbonBtn.style.opacity = "0.2";
        ribbonBtn.style.pointerEvents = "none";
        clickCount++;
        audioSynth.playStepSound();
        updateProgress();

        if (clickCount === 1) bouquetStage.textContent = "💐✨";
        else if (clickCount === 2) bouquetStage.textContent = "💐🎀✨";
        else if (clickCount >= 3) {
          bouquetStage.textContent = "💖💐🎉";
          bouquetStage.classList.add("bloom-stage-pop");
          handleBloomComplete();
        }
      };
      ribbonsContainer.appendChild(ribbonBtn);
    }

    bloomInteractiveArea.appendChild(bouquetStage);
    bloomInteractiveArea.appendChild(ribbonsContainer);
  }

  bloomOverlay.classList.remove("hidden");
}

function createImageMedia(mediaItem) {
  const card = document.createElement("div");
  card.className = "polaroid-card";

  const inner = document.createElement("div");
  inner.className = "polaroid-inner";

  // Frente
  const front = document.createElement("div");
  front.className = "polaroid-front";

  const image = document.createElement("img");
  image.src = mediaItem.src;
  image.alt = mediaItem.alt || "Recuerdo";

  image.addEventListener("error", () => {
    if (mediaItem.fallback && image.src !== mediaItem.fallback) {
      image.src = mediaItem.fallback;
    }
  });

  front.appendChild(image);

  if (mediaItem.caption) {
    const caption = document.createElement("div");
    caption.className = "polaroid-caption";
    caption.innerHTML = `
      <span>${mediaItem.caption}</span>
      <span class="flip-hint">🔄 Toca la foto para ver el mensaje al dorso</span>
    `;
    front.appendChild(caption);
  }

  // Dorso
  const back = document.createElement("div");
  back.className = "polaroid-back";

  const backNote = document.createElement("p");
  backNote.className = "polaroid-back-note";
  backNote.textContent = mediaItem.backNote || "💌 Un regalo del corazón para la mejor Mamá del mundo.";

  const hintBack = document.createElement("span");
  hintBack.className = "flip-hint";
  hintBack.textContent = "🔄 Toca para volver a la foto";

  back.appendChild(backNote);
  back.appendChild(hintBack);

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  // Click para dar vuelta en 3D
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    audioSynth.playStepSound();
  });

  return card;
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

function renderMemoryMedia(memory) {
  memoryMedia.innerHTML = "";

  const gridContainer = document.createElement("div");
  gridContainer.className = "polaroid-grid";

  memory.gallery.forEach((mediaItem) => {
    const inferredType = inferMediaType(mediaItem);
    const mediaElement = inferredType === "video" ? createVideoMedia(mediaItem) : createImageMedia(mediaItem);
    gridContainer.appendChild(mediaElement);
  });

  memoryMedia.appendChild(gridContainer);
}

function updateTopProgress() {
  const curWp = gardenEngine ? gardenEngine.character.currentWaypointIndex : activeMemoryId;

  if (curWp === 0) {
    topProgressBadge.textContent = "🌸 Entrada del Jardín";
    if (timelineProgress) timelineProgress.textContent = "Entrada al Jardín de Recuerdos";
  } else {
    activeMemoryId = curWp;
    topProgressBadge.textContent = `🌸 ${curWp} / ${memories.length}`;
    if (timelineProgress) timelineProgress.textContent = `Flor ${curWp} de ${memories.length}`;
  }
}

function openMemory(memoryId) {
  const selectedMemory = memories.find((memory) => memory.id === memoryId);
  if (!selectedMemory) return;

  activeMemoryId = memoryId;
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
      const nextIndex = activeMemoryId + 1;
      if (gardenEngine) {
        gardenEngine.walkToWaypoint(nextIndex);
      } else {
        triggerBloomInteraction(nextIndex);
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
    stopButton.addEventListener("click", () => triggerBloomInteraction(memory.id));
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
    if (btnViewGarden) btnViewGarden.classList.add("active");
    if (btnViewList) btnViewList.classList.remove("active");
    if (gardenSection) gardenSection.classList.remove("hidden");
    if (timelineCard) timelineCard.classList.add("hidden");
    if (finalCard) finalCard.classList.add("hidden");
  } else {
    if (btnViewList) btnViewList.classList.add("active");
    if (btnViewGarden) btnViewGarden.classList.remove("active");
    if (gardenSection) gardenSection.classList.add("hidden");
    if (timelineCard) timelineCard.classList.remove("hidden");
    if (finalCard) finalCard.classList.add("hidden");
    renderTimeline();
  }
}

// Event Listeners
if (btnViewGarden) btnViewGarden.addEventListener("click", () => switchView("garden"));
if (btnViewList) btnViewList.addEventListener("click", () => switchView("list"));

if (btnAudioToggle) {
  btnAudioToggle.addEventListener("click", () => {
    const active = audioSynth.toggle();
    btnAudioToggle.classList.toggle("active", active);
    if (audioIcon) audioIcon.textContent = active ? "🔊" : "🎵";
    if (audioText) audioText.textContent = active ? "Música: On" : "Música: Off";
  });
}

if (modalCloseX) modalCloseX.addEventListener("click", closeMemoryModal);
if (backToGardenBtn) backToGardenBtn.addEventListener("click", closeMemoryModal);
if (bloomCloseX) bloomCloseX.addEventListener("click", () => bloomOverlay.classList.add("hidden"));

memoryModal.addEventListener("click", (e) => {
  if (e.target === memoryModal) {
    closeMemoryModal();
  }
});

if (bloomOverlay) {
  bloomOverlay.addEventListener("click", (e) => {
    if (e.target === bloomOverlay) {
      bloomOverlay.classList.add("hidden");
    }
  });
}

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    unlockedStops = 1;
    activeMemoryId = 1;
    switchView("garden");
    if (gardenEngine) {
      gardenEngine.character.currentWaypointIndex = 0;
      gardenEngine.character.targetWaypointIndex = 0;
      gardenEngine.character.x = gardenEngine.waypoints[0].x;
      gardenEngine.character.y = gardenEngine.waypoints[0].y;
      gardenEngine.character.isWalking = false;
    }
    updateTopProgress();
  });
}

// Inicialización
createPetals();
renderTimeline();
if (gardenCanvas) {
  gardenEngine = new GardenCanvasEngine(gardenCanvas);
  updateTopProgress();
}
