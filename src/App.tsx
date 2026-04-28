//App.tsx
import { useState } from 'react'
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import AvisoPrivacidad from "./componentes/AvisoPrivacidad"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import satBg from './componentes/sat.png'

function App() {
  const [vistaActual, setVistaActual] = useState<'inicio' | 'privacidad'>('inicio')

  return (
    <div 
      className={`min-h-screen font-sans flex flex-col relative transition-all duration-300 ${vistaActual === 'inicio' ? 'bg-gray-50' : 'bg-gray-900'}`}
      style={vistaActual === 'privacidad' ? {
        backgroundImage: `url(${satBg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
     {vistaActual === 'privacidad' && (
        <div className="absolute inset-0 bg-black/60"></div>
      )}

      <div className="container mx-auto flex-grow relative z-10 py-10">
          <div className="cursor-pointer" onClick={() => setVistaActual('inicio')}>
            <h1 className={`font-extrabold text-5xl text-center md:w-2/3 md:mx-auto drop-shadow-md hover:opacity-80 transition-opacity ${vistaActual === 'privacidad' ? 'text-white' : 'text-gray-800'}`}>
              Seguimiento de Personas {''}
              <span className={`bg-clip-text ${vistaActual === 'privacidad' ? 'text-emerald-400' : 'text-emerald-600'}`}>Sat</span>
            </h1>
          </div>

          {/* Renderizado Condicional de la Vista */}
          {vistaActual === 'inicio' ? (
            <div className="mt-12 md:flex gap-8 justify-center">
                <Formulario />
                <ListadoPacientes />
            </div>
          ) : (
            <AvisoPrivacidad />
          )}
      </div>
      
      {vistaActual === 'inicio' && (
        <footer className="mt-20 border-t-4 border-emerald-600 bg-gray-900/95 backdrop-blur-sm py-10 text-center text-gray-400 text-sm relative z-10">
          <div className="container mx-auto px-5 md:w-3/4 lg:w-1/2">
            <p className="font-bold text-white mb-2 tracking-wider uppercase">Servicio de Administración Tributaria</p>
            <p className="mb-4">Este sistema es de uso exclusivo y oficial. La manipulación, intercepción, daño, o robo de información aquí procesada se encuentra penada por las leyes aplicables de los Estados Unidos Mexicanos.</p>
            
            <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-gray-700">
              <span 
                onClick={() => { setVistaActual('privacidad'); window.scrollTo(0, 0); }}
                className="hover:text-white cursor-pointer transition-colors hover:underline">
                Aviso de Privacidad
              </span>
              <span 
                onClick={() => { setVistaActual('privacidad'); window.scrollTo(0, 0); }}
                className="hover:text-white cursor-pointer transition-colors hover:underline">
                Términos y Condiciones
              </span>
              <span 
                onClick={() => { setVistaActual('privacidad'); window.scrollTo(0, 0); }}
                className="hover:text-white cursor-pointer transition-colors hover:underline">
                Directorio
              </span>
            </div>
            
            <p className="mt-8 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Gobierno de México. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      )}

      <ToastContainer />
    </div>
  )
}

export default App