//Paciente.tsx
import { useState } from 'react'
import { toast } from 'react-toastify'
import type { Patient } from './Index'
import PacienteDetalle from "./PacienteDetalle"
import { usePacienteStore } from '../componentes/store'
import DialogModal from "./DialogModal"
import { generarPDFConstancia, generarPDFIdentificacion } from './DocumentoPDF'

type PacienteProps = {
    paciente: Patient
}

const Paciente = ({ paciente }: PacienteProps) => {
    const onProced = () => {
        eliminarPaciente(paciente.id)
        toast.error('Registro Eliminado', {
            style: {
                background: 'linear-gradient(45deg, #ff0000, #ff4d4d, #cc0000)',
                color: '#fff',
                fontWeight: '900',
                fontSize: '16px',
                textTransform: 'uppercase',
                border: '3px solid #ffcccc',
                boxShadow: '0 0 25px rgba(255, 0, 0, 0.9), inset 0 0 10px rgba(0,0,0,0.5)',
                borderRadius: '15px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            },
            icon: () => '🔥',
            theme: 'colored'
        })
        setisOpen(false)
    }
    const establecerPacienteActivo = usePacienteStore((state) => state.establecerPacienteActivo)
    const eliminarPaciente = usePacienteStore((state) => state.eliminarPaciente)

    const [isOpen, setisOpen] = useState(false)

    // Manejador del click
    const handleClickEditar = () => {
        establecerPacienteActivo(paciente) // Enviar el objeto completo
    }
    return (
        <div className="mx-5 my-10 px-6 py-8 ring-1 ring-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
            <PacienteDetalle label="ID" data={paciente.id} />
            <PacienteDetalle label="Nombre" data={paciente.name} />
            <PacienteDetalle label="Edad" data={paciente.age} />
            <PacienteDetalle label="RFC" data={paciente.rfc} />
            <PacienteDetalle label="CURP" data={paciente.curp} />
            <PacienteDetalle label="Fecha de Nacimiento" data={paciente.birthdate} />
            <PacienteDetalle label="Estado" data={paciente.birthCountry} />

            <div className="flex flex-wrap gap-4 mt-8 justify-between pt-5 border-t border-gray-100">
                <button
                    type="button"
                    className="flex-1 py-2 px-4 shadow-sm bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-700 border border-indigo-200 font-bold uppercase rounded-lg transition-colors focus:ring-4 focus:ring-indigo-100 text-sm"
                    onClick={handleClickEditar}
                >Editar</button>

                <button
                    type="button"
                    className="flex-1 py-2 px-4 shadow-sm bg-red-50 hover:bg-red-600 hover:text-white text-red-700 border border-red-200 font-bold uppercase rounded-lg transition-colors focus:ring-4 focus:ring-red-100 text-sm"
                    onClick={() => setisOpen(true)}
                >Eliminar</button>

                <button
                    type="button"
                    className="flex-1 py-2 px-4 shadow-sm bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 border border-emerald-200 font-bold uppercase rounded-lg transition-colors focus:ring-4 focus:ring-emerald-100 text-sm"
                    onClick={() => generarPDFIdentificacion(paciente)}
                >ID Oficial</button>

                <button
                    type="button"
                    className="flex-1 py-2 px-4 shadow-sm bg-sky-50 hover:bg-sky-600 hover:text-white text-sky-700 border border-sky-200 font-bold uppercase rounded-lg transition-colors focus:ring-4 focus:ring-sky-100 text-sm"
                    onClick={() => generarPDFConstancia(paciente)}
                >Constancia</button>

                <DialogModal
                    title={`¿Deseas eliminar al paciente ${paciente.name}?`}
                    isOpened={isOpen}
                    onProceed={onProced}
                    onClose={() => setisOpen(false)}
                >
                    <p className="text-center text-gray-500">
                        Esta acción no se puede deshacer.
                    </p>
                </DialogModal>
            </div>
        </div>
    )
}

export default Paciente
