import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      {/* --- AQUÍ EMPIEZA LA NUEVA SECCIÓN COBERTURA DIGITAL --- */}
      <section id="cobertura-digital" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h2>Cobertura Digital</h2>
        
        {/* Contenedor flexible para alinear los logos */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          
          {/* 1. LOGO PRINCIPAL: NARRADOR EN VIVO */}
          <div className="narrador-box">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#646cff' }}>Narrador en Vivo</h3>
            <img 
              src="https://i.postimg.cc/N09JQZHc/Diseno-sin-titulo-20260128-120557-0000.png" 
              alt="Logo Narrador en Vivo" 
              width="180" 
              style={{ borderRadius: '12px', border: '2px solid #646cff' }}
            />
          </div>

          {/* 2. LOS 3 COLABORADORES (Espacios reservados) */}
          {/* Cuando tengas los links de las otras imagenes, cámbialos en el 'src' abajo */}
          
          <div className="colab-box">
            <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>Colaborador 1</h3>
            <img src={viteLogo} alt="Pendiente" width="100" style={{ opacity: 0.5 }} />
          </div>

          <div className="colab-box">
            <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>Colaborador 2</h3>
            <img src={viteLogo} alt="Pendiente" width="100" style={{ opacity: 0.5 }} />
          </div>

          <div className="colab-box">
            <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>Colaborador 3</h3>
            <img src={viteLogo} alt="Pendiente" width="100" style={{ opacity: 0.5 }} />
          </div>

        </div>
      </section>
      {/* --- FIN DE SECCIÓN COBERTURA DIGITAL --- */}


      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
           {/* ... Resto del código original ... */}
          <ul>
             {/* ... */}
          </ul>
        </div>
        {/* ... (El resto del footer se queda igual) ... */}
      </section>
      
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App