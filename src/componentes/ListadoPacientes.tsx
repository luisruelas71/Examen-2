//ListadoPacientes.tsx
import { usePacienteStore } from './store'
import Paciente from './Paciente'

const ListadoPacientes = () => {
    const Patients = usePacienteStore(state => state.pacientes)

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent">
            {Patients.length ? (
                <>
                    <h2 className="font-extrabold text-3xl text-center text-gray-800 tracking-tight">Listado de Personas</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-green-600">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Personas y Captura</span>
                    </p>

                    {Patients.map(patient => (
                        <Paciente
                            key={patient.id}
                            paciente={patient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-extrabold text-3xl text-center text-gray-800 tracking-tight">No hay Personas</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-green-600">
                        Comienza agregando personas {''}
                        <span className="text-emerald-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}



export default ListadoPacientes
