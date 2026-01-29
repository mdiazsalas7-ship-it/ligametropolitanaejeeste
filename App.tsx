import React from 'react';
import Layout from './components/Layout';
import AIChatDrawer from './components/AIChatDrawer';
import { CONFERENCES, CATEGORIES, FEATURES } from './constants';

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
          <div className="logo-glow relative mb-4">
            <div className="h-80 w-80 md:h-[22rem] md:w-[22rem] rounded-full border-[8px] border-primary/60 bg-black overflow-hidden flex items-center justify-center shadow-[0_0_80px_rgba(255,107,0,0.4)] transition-all">
              <img 
                src="https://i.postimg.cc/FKgNmFpv/Whats_App_Image_2026_01_25_at_12_07_36_AM.jpg" 
                alt="LMB Eje Este Logo"
                className="w-full h-full object-contain scale-[1.35] translate-y-[-2px]"
              />
            </div>
          </div>

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
      {/* Conferences */}
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

      {/* Post-Season Format */}
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
            <h4 className="text-3xl font-black uppercase italic tracking-tighter leading-tight">
              Duelo de <span className="text-primary">Titanes</span>
            </h4>
            
            <div className="grid grid-cols-7 items-center gap-2">
              <div className="col-span-3 space-y-2 text-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl py-4">
                  <span className="block text-2xl font-black text-white italic">04</span>
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Eje Este</span>
                </div>
              </div>
              <div className="col-span-1 text-center">
                <span className="text-lg font-black italic text-primary">VS</span>
              </div>
              <div className="col-span-3 space-y-2 text-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl py-4">
                  <span className="block text-2xl font-black text-white italic">04</span>
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Eje Oeste</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs font-medium leading-relaxed">
              Los <span className="text-white font-bold">4 mejores clasificados</span> de cada eje avanzan a la gran fase de post-temporada, donde se enfrentarán en una serie de eliminación directa por el campeonato absoluto del estado Aragua.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div id="categorias" className="space-y-6 scroll-mt-28">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-4">
                <span className="h-0.5 w-8 bg-primary"></span>
                Categorías
            </h3>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest rounded-full text-gray-400">
                Masculino & Femenino
            </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className={`p-5 rounded-[1.5rem] border transition-all ${
              cat.isMain 
              ? 'col-span-2 bg-primary/10 border-primary/30' 
              : 'bg-surface-dark border-white/5'
            }`}>
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-gray-500">
                  {cat.label}
                </span>
                <span className={`text-lg font-black italic uppercase tracking-tighter ${cat.isMain ? 'text-primary' : 'text-white'}`}>
                  {cat.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Vision: React.FC = () => (
  <section id="vision" className="max-w-xl mx-auto px-6 py-20 bg-black/40 border-y border-white/5 overflow-hidden scroll-mt-24">
     <div className="flex flex-col gap-2 mb-12 text-center">
      <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Nuestro Compromiso</h4>
      <h2 className="text-4xl font-black leading-tight tracking-tight uppercase italic">Visión de la Liga</h2>
    </div>

    <div className="relative mb-20 px-8 text-center group">
      <div className="absolute -top-12 left-0 text-primary/10 text-[160px] font-serif select-none pointer-events-none leading-none">“</div>
      <p className="text-xl md:text-2xl font-bold text-gray-200 italic leading-relaxed relative z-10 tracking-tight">
        Ser reconocidos como la plataforma deportiva modelo en la región central de Venezuela para el desarrollo y proyección del baloncesto, fusionando la excelencia competitiva, la innovación tecnológica y la gestión profesional, para convertir al Eje Este de Aragua en un epicentro de talento deportivo con estándares nacionales.
      </p>
      <div className="absolute -bottom-24 right-0 text-primary/10 text-[160px] font-serif select-none pointer-events-none leading-none">”</div>
    </div>

    <div className="grid gap-4 mt-10">
      {FEATURES.map((feature) => (
        <div key={feature.id} className="flex gap-6 items-center p-6 bg-surface-dark rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all hover:translate-x-1">
          <div className="h-16 w-16 rounded-2xl bg-black flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
            <span className="material-symbols-outlined text-4xl text-primary">{feature.icon}</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-black uppercase tracking-wider">{feature.title}</h3>
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
      <h2 className="text-3xl font-black leading-tight tracking-tight uppercase italic">Junta Fundadora</h2>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {[
        { name: 'Edizon Zega', role: 'Fundador' },
        { name: 'Manuel Diaz', role: 'Fundador' },
        { name: 'Yorbin Mier y Teran', role: 'Fundador' }
      ].map((founder, i) => (
        <div key={i} className="flex items-center gap-6 p-5 bg-surface-dark border border-white/5 rounded-[1.5rem] group hover:border-primary/40 transition-all">
          <div className="h-14 w-14 rounded-xl bg-black border border-white/10 flex items-center justify-center text-primary font-black text-xl italic group-hover:bg-primary group-hover:text-white transition-all">
            {founder.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="text-lg font-black italic uppercase text-white leading-tight">{founder.name}</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{founder.role}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* --- SECCIÓN ACTUALIZADA: COBERTURA DIGITAL --- */
const DigitalCoverage: React.FC = () => (
  <section id="cobertura" className="max-w-xl mx-auto px-6 py-16 scroll-mt-24 border-t border-white/5">
    <div className="flex flex-col gap-2 mb-10 text-center">
      <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Transmisión</h4>
      <h2 className="text-3xl font-black leading-tight tracking-tight uppercase italic">Cobertura Digital</h2>
    </div>

    {/* LISTA DE CANALES Y ALIADOS */}
    <div className="flex flex-col gap-6">

      {/* 1. CANAL OFICIAL (LOGO CORREGIDO) */}
      <div className="p-6 bg-gradient-to-br from-surface-dark to-black border border-primary/40 rounded-[2rem] flex flex-col items-center text-center gap-4 relative overflow-hidden group shadow-[0_0_50px_rgba(255,107,0,0.15)]">
         <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl text-primary">live_tv</span>
         </div>
         <h3 className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">Medio Oficial</h3>
         
         {/* Logo Liga: Se eliminó el padding y se usó object-cover */}
         <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_30px_rgba(255,107,0,0.3)] bg-black">
            <img
              src="https://i.postimg.cc/FKgNmFpv/Whats_App_Image_2026_01_25_at_12_07_36_AM.jpg"
              alt="LMB Oficial"
              // CAMBIO AQUÍ: object-cover para rellenar el círculo
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
      
      {/* 2. Aliado: NARRADOR EN VIVO */}
      <div className="p-6 bg-surface-dark border border-white/5 rounded-[2rem] flex flex-col items-center text-center gap-4 relative overflow-hidden group">
        <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Narración Oficial</h3>
        
        <div className="w-24 h-auto rounded-xl overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors bg-black">
          <img
            src="https://i.postimg.cc/N09JQZHc/Diseno-sin-titulo-20260128-120557-0000.png"
            alt="Narrador en Vivo"
            className="w-full h-full object-contain"
          />
        </div>
        <h4 className="text-lg font-black italic uppercase text-white mt-2">Narrador en Vivo</h4>
      </div>

      {/* 3. Aliado: BARBAKANZLER */}
      <div className="p-6 bg-surface-dark border border-white/5 rounded-[2rem] flex flex-col items-center text-center gap-4 relative overflow-hidden group">
        <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Transmisión & Streaming</h3>
        
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-red-500/50 transition-colors bg-black">
          <img
            src="https://i.postimg.cc/RZ9XnGD5/channels4-profile.jpg"
            alt="Barbakanzler"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
           <h4 className="text-lg font-black italic uppercase text-white leading-none">@Barbakanzler</h4>
           <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Host Oficial</p>
        </div>

        <div className="flex gap-3 mt-1 w-full justify-center">
            <a href="https://www.youtube.com/@barbakanzler" target="_blank" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-[9px] font-black uppercase tracking-wider rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                YouTube
            </a>
            <a href="https://www.tiktok.com/@barbakanzler" target="_blank" className="px-4 py-2 bg-black border border-white/10 hover:bg-white/5 text-white text-[9px] font-black uppercase tracking-wider rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                TikTok
            </a>
        </div>
      </div>

    </div>
  </section>
);
/* --- FIN DE SECCIÓN ACTUALIZADA --- */

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
        <h2 className="text-xl font-black uppercase tracking-tighter italic">LMB EJE ESTE ARAGUA</h2>
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