import React from 'react';
import Layout from './components/Layout';
import AIChatDrawer from './components/AIChatDrawer';
import { CONFERENCES, CATEGORIES } from './constants';

// --- CONSTANTES DE DATOS ---
const FEATURES = [
  { 
    id: 1, 
    title: 'Aval Oficial', 
    description: 'Respaldo total de la Asociación de Baloncesto del Estado Aragua.', 
    imageUrl: 'https://i.postimg.cc/fyq3J3kg/download.jpg' 
  },
  { 
    id: 2, 
    title: 'Arbitraje Federado', 
    description: 'Cuerpo colegiado con certificación nacional para garantizar la justicia deportiva.', 
    imageUrl: 'https://i.postimg.cc/hPLX3zVD/download.jpg' 
  },
  { 
    id: 3, 
    title: 'Cobertura Digital', 
    description: 'Transmisión multiplataforma con presencia constante en medios y redes sociales.', 
    imageUrl: 'https://i.postimg.cc/kXNTr4yc/image.png' 
  }
];

// --- COMPONENTES DE SECCIÓN ---

const Hero: React.FC = () => (
  <section className="relative overflow-hidden pt-4">
    <div className="max-w-xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
        <div 
          className="flex min-h-[850px] flex-col gap-8 items-center justify-center p-8 text-center bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 1) 100%), url("https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop")`
          }}
        >
          {/* --- LOGO PRINCIPAL CORREGIDO --- */}
          <div className="logo-glow relative mb-4 group">
            {/* Se cambió rounded-full por rounded-[3rem] para dar más espacio al escudo */}
            {/* Se eliminó el scale-[1.35] que lo descuadraba */}
            {/* Se añadió p-6 para darle aire interno */}
            <div className="w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-[3rem] border-[6px] border-primary/50 bg-black/90 backdrop-blur-xl overflow-hidden flex items-center justify-center shadow-[0_0_100px_rgba(255,107,0,0.3)] p-6 transition-all group-hover:border-primary/80 group-hover:scale-[1.02]">
              <img 
                src="https://i.postimg.cc/FKgNmFpv/Whats_App_Image_2026_01_25_at_12_07_36_AM.jpg" 
                alt="LMB Eje Este Logo"
                // Se eliminaron las transformaciones manuales, ahora se centra naturalmente
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          {/* --- FIN LOGO CORREGIDO --- */}

          <div className="space-y-4 max-w-sm">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 border border-primary/30 text-primary text-[10px] font-black rounded-full tracking-[0.2em] uppercase">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              LANZAMIENTO OFICIAL 2026
            </div>
            <h1 className="text-white text-5xl font-black leading-[0.95] tracking-tighter uppercase">
              FUNDACIÓN DE LA <span className="text-primary italic">LMB</span> ARAGUA
            </h1>
            <p className="text-gray-400 text-sm font-medium px-4 leading-relaxed">
              Estructura formal de la Liga Metropolitana de Baloncesto. Un compromiso con el desarrollo deportivo regional.
            </p>
          </div>

          <div className="grid grid-cols-2 w-full gap-4 mt-6 max-w-[360px]">
            <a href="#conferencias" className="flex items-center justify-center rounded-2xl h-14 bg-primary text-white text-[11px] font-black transition-all active:scale-95 shadow-xl shadow-primary/20 uppercase tracking-widest border-b-4 border-orange-700">
              Conferencias
            </a>
            <a href="#categorias" className="flex items-center justify-center rounded-2xl h-14 bg-primary text-white text-[11px] font-black transition-all active:scale-95 shadow-xl shadow-primary/20 uppercase tracking-widest border-b-4 border-orange-700">
              Categorías
            </a>
            <a href="#vision" className="flex items-center justify-center rounded-2xl h-14 bg-white/5 text-white text-[11px] font-bold border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest backdrop-blur-sm">
              Visión
            </a>
            <a href="#fundadores" className="flex items-center justify-center rounded-2xl h-14 bg-white/5 text-white text-[11px] font-bold border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest backdrop-blur-sm">
              Fundadores
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LeagueStructure: React.FC = () => (
  <section id="estructura" className="max-w-xl mx-auto px-6 py-16">
    <div className="flex flex-col gap-2 mb-10 text-center">
      <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Organización</h4>
      <h2 className="text-4xl font-black leading-tight tracking-tight uppercase italic">Estructura del Circuito</h2>
      <p className="text-gray-500 text-sm max-w-xs mx-auto mt-2">Distribución estratégica para maximizar la competitividad en todo el estado Aragua.</p>
    </div>

    <div className="space-y-12">
      <div id="conferencias" className="space-y-6 scroll-mt-28">
        <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-4">
          <span className="h-0.5 w-8 bg-primary"></span>
          Conferencias
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {CONFERENCES.map((conf) => (
            <div key={conf.id} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 group">
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-40 transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url(${conf.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-6 w-full">
                <h4 className="text-white text-xl font-black italic uppercase leading-none">{conf.name}</h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {conf.locations?.map((loc, idx) => (
                    <span key={idx} className="text-[10px] font-black uppercase tracking-tight text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10">
                      {loc}
                    </span>
                  ))}
                </div>
                <p className="text-primary text-[8px] font-black uppercase tracking-widest mt-3">Circuito Regional</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-4">
          <span className="h-0.5 w-8 bg-primary"></span>
          Fase Final
        </h3>
        <div className="bg-gradient-to-br from-surface-dark to-black border border-primary/20 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-primary">emoji_events</span>
          </div>
          <div className="relative z-10 space-y-6">
            <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-black rounded-full uppercase tracking-widest">
              Gran Postemporada
            </div>
            <h4 className="text-3xl font-black uppercase italic tracking-tighter text-white">Duelo de <span className="text-primary">Titanes</span></h4>
            <div className="grid grid-cols-7 items-center gap-2">
              <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl py-4">
                <span className="block text-2xl font-black text-white italic">04</span>
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Eje Este</span>
              </div>
              <div className="col-span-1 text-lg font-black italic text-primary">VS</div>
              <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl py-4">
                <span className="block text-2xl font-black text-white italic">04</span>
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Eje Oeste</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Vision: React.FC = () => (
  <section id="vision" className="max-w-xl mx-auto px-6 py-20 bg-black/40 border-y border-white/5 scroll-mt-24">
    <div className="flex flex-col gap-2 mb-12 text-center">
      <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Nuestro Compromiso</h4>
      <h2 className="text-4xl font-black leading-tight tracking-tight uppercase italic text-white">Visión de la Liga</h2>
    </div>
    <div className="relative px-8 text-center mb-16">
      <p className="text-xl md:text-2xl font-bold text-gray-200 italic leading-relaxed tracking-tight">
        Ser reconocidos como la plataforma deportiva modelo en la región central de Venezuela para el desarrollo del baloncesto, fusionando excelencia competitiva e innovación tecnológica.
      </p>
    </div>

    <div className="grid gap-4">
      {FEATURES.map((feature) => (
        <div key={feature.id} className="flex gap-6 items-center p-6 bg-surface-dark rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all group">
          <div className="h-16 w-16 rounded-2xl bg-black overflow-hidden flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
            <img 
              src={feature.imageUrl} 
              alt={feature.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-black uppercase tracking-wider text-white">{feature.title}</h3>
            <p className="text-xs text-gray-500 leading-snug font-medium">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Founders: React.FC = () => (
  <section id="fundadores" className="max-w-xl mx-auto px-6 py-16 scroll-mt-24">
    <div className="flex flex-col gap-2 mb-10 text-center">
      <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Liderazgo</h4>
      <h2 className="text-3xl font-black leading-tight tracking-tight uppercase italic text-white">Junta Fundadora</h2>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {[
        { 
          name: 'Edixon Zea', 
          role: 'Fundador',
          image: 'https://i.postimg.cc/Cx6HYgTL/image.png',
          title: 'TSU Mantenimiento Industrial',
          bio: 'Ex jugador profesional de baloncesto. Entrenador de Baloncesto. Representante legal de la asociación Ecobalez.'
        },
        { 
          name: 'Rafael David Rodrigues Kanzler', 
          role: 'Fundador | Vicepresidente',
          image: 'https://i.postimg.cc/vBwPFsfD/image.png',
          title: 'Comerciante',
          bio: 'Vicepresidente de la Liga Metropolitana de Baloncesto. Delegado categoría i10.'
        },
        { 
          name: 'Kelita Seijas', 
          role: 'Fundadora',
          image: 'https://i.postimg.cc/Zq53MYfr/image.png',
          title: 'Secretaria Ejecutiva | Administración de Empresas',
          bio: 'Maestra Repostera y Chef Pastelera. Delegada de las categorías U10 y U8 en la Escuela de Baloncesto Ecobalez.'
        },
        { 
          name: 'Oneal Uzcategui', 
          role: 'Tesorero de la Liga Metropolitana',
          image: 'https://i.postimg.cc/QxzJZDrr/image.png',
          title: 'Asistente Administrativo y Supervisor de Jhonsson',
          bio: 'Gestión administrativa y supervisión operativa de la liga.'
        },
        { 
          name: 'Gilson Weffer', 
          role: 'Fundador',
          image: 'https://i.postimg.cc/fLW90qh8/image.png',
          title: 'TSU Mantenimiento Industrial',
          bio: 'Especialista mecánico (28 años en Polar/Plumrose). Trayectoria como Manager de béisbol menor y asistente de entrenador en baloncesto.'
        },
        { 
          name: 'Manuel Diaz', 
          role: 'Fundador',
          image: 'https://i.postimg.cc/XJvb5d1P/Whats-App-Image-2026-01-29-at-10-40-42-AM.jpg',
          title: 'Comerciante | TSU Ciencias Navales',
          bio: 'Maestría en Baloncesto Profesional (Tech Global University). Diplomado en Psicología Deportiva. Entrenador Nivel 1 ENE y Coach en Lobos de Ribas.'
        },
        { 
          name: 'Yorbin Mier y Teran', 
          role: 'Fundador',
          image: 'https://i.postimg.cc/tC84HSv9/image.png',
          title: 'Músico Percusionista',
          bio: 'Jugador de baloncesto activo. Presidente de la escuela de baloncesto menor Hijos de Bolívar de San Mateo.'
        }
      ].map((founder, i) => (
        <div key={i} className="flex items-start gap-6 p-5 bg-surface-dark border border-white/5 rounded-[1.5rem] group hover:border-primary/40 transition-all">
          <div className="h-14 w-14 rounded-xl bg-black border border-white/10 flex items-center justify-center text-primary font-black text-xl italic overflow-hidden shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
            {founder.image ? (
              <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
            ) : (
              founder.name.split(' ').map(n => n[0]).join('')
            )}
          </div>
          <div className="space-y-1 text-left">
            <h3 className="text-lg font-black italic uppercase text-white leading-tight">{founder.name}</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{founder.role}</p>
            {founder.title && (
              <p className="text-[9px] font-bold uppercase text-gray-400 leading-tight pt-1 border-t border-white/5">{founder.title}</p>
            )}
            {founder.bio && (
              <p className="text-[8px] font-medium text-gray-500 leading-relaxed max-w-xs">{founder.bio}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const DigitalCoverage: React.FC = () => (
  <section id="cobertura" className="max-w-xl mx-auto px-6 py-16 scroll-mt-24 border-t border-white/5">
    <div className="flex flex-col gap-2 mb-10 text-center">
      <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Transmisión</h4>
      <h2 className="text-3xl font-black leading-tight tracking-tight uppercase italic text-white">Cobertura Digital</h2>
    </div>

    <div className="flex flex-col gap-6">
      <div className="p-6 bg-gradient-to-br from-surface-dark to-black border border-primary/40 rounded-[2rem] flex flex-col items-center text-center gap-4 relative overflow-hidden group shadow-[0_0_50px_rgba(255,107,0,0.15)]">
         <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl text-primary">live_tv</span>
         </div>
         <h3 className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">Medio Oficial</h3>
         <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_30px_rgba(255,107,0,0.3)] bg-black">
            <img
              src="https://i.postimg.cc/FKgNmFpv/Whats_App_Image_2026_01_25_at_12_07_36_AM.jpg"
              alt="LMB Oficial"
              className="w-full h-full object-cover"
            />
         </div>
         <div>
            <h4 className="text-2xl font-black italic uppercase text-white leading-none">LMB TV</h4>
             <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Canal Oficial de la Liga</p>
         </div>
         <a href="https://youtube.com/@ligametropolitanadelejeeste?si=2_UZ291lEiZ1029H" target="_blank" className="w-full max-w-[200px] py-3 bg-white text-black hover:bg-gray-200 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl">
             <span className="material-symbols-outlined text-lg">play_circle</span>
             Suscribirse
         </a>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-surface-dark border border-white/5 rounded-[1.5rem] flex flex-col items-center text-center gap-3 group hover:border-primary/40 transition-all">
          <div className="w-full aspect-square rounded-xl overflow-hidden bg-black p-2 border border-white/5">
            <img
              src="https://i.postimg.cc/N09JQZHc/Diseno-sin-titulo-20260128-120557-0000.png"
              alt="Narrador en Vivo"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h4 className="text-[9px] font-black italic uppercase text-white">Narración Oficial</h4>
        </div>

        <div className="p-4 bg-surface-dark border border-white/5 rounded-[1.5rem] flex flex-col items-center text-center gap-3 group hover:border-primary/40 transition-all">
          <div className="w-full aspect-square rounded-xl overflow-hidden bg-black border border-white/5">
            <img
              src="https://i.postimg.cc/RZ9XnGD5/channels4-profile.jpg"
              alt="Barbakanzler"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h4 className="text-[9px] font-black italic uppercase text-white">@Barbakanzler</h4>
        </div>

        <div className="p-4 bg-surface-dark border border-white/5 rounded-[1.5rem] flex flex-col items-center text-center gap-3 group hover:border-primary/40 transition-all">
          <div className="w-full aspect-square rounded-xl overflow-hidden bg-black p-2 border border-white/5">
            <img
              src="https://i.postimg.cc/SN88zMMr/unnamed.jpg"
              alt="Nuevo Aliado"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h4 className="text-[9px] font-black italic uppercase text-white">Aliado Comercial</h4>
        </div>

        <div className="p-4 border border-dashed border-white/10 rounded-[1.5rem] flex flex-col items-center justify-center text-center gap-2 opacity-30 hover:opacity-100 transition-opacity min-h-[160px]">
          <span className="material-symbols-outlined text-3xl text-gray-500">person_add</span>
          <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">Cupo Disponible</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-black px-6 py-16">
    <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-10">
      <div className="h-28 w-28 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center p-1">
        <img 
          alt="LMB Footer" 
          className="w-full h-full object-contain" 
          src="https://i.postimg.cc/FKgNmFpv/Whats_App_Image_2026_01_25_at_12_07_36_AM.jpg" 
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-black uppercase tracking-tighter italic text-white">LMB EJE ESTE ARAGUA</h2>
        <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">Hacia la profesionalización del baloncesto central</p>
      </div>
      <div className="flex flex-col gap-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
        <div className="flex gap-8 justify-center">
          <a href="#" className="hover:text-primary transition-colors">Estatutos</a>
          <a href="#" className="hover:text-primary transition-colors">Federación</a>
          <a href="#" className="hover:text-primary transition-colors">Contacto</a>
        </div>
        <p className="opacity-30 font-bold tracking-tighter">© 2026 PROYECTO LIGA METROPOLITANA DE BALONCESTO • ARAGUA</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <LeagueStructure />
      <Vision />
      <Founders />
      <DigitalCoverage /> 
      <Footer />
      <AIChatDrawer />
    </Layout>
  );
};

export default App;