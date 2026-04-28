import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Error from './Error'
import { usePacienteStore } from './store'
import type { DraftPatient } from './Index'

const Formulario = () => {
    const { agregarPaciente, pacienteActivo, actualizarPaciente, limpiarPacienteActivo } = usePacienteStore()

    const {
        register, handleSubmit, formState: { errors },
        setValue,
        reset
    } = useForm<DraftPatient>()

    const registrarPaciente = (data: DraftPatient) => {
        if (pacienteActivo) {
            actualizarPaciente(data)
            toast.success('Registro actualizado exitosamente', {
                style: {
                    background: 'linear-gradient(to right, #00b09b, #96c93d)',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    borderRadius: '10px'
                },
                icon: () => '✅'
            })
        } else {
            agregarPaciente(data)
            toast.success('Registro procesado exitosamente', {
                style: {
                    background: 'linear-gradient(to right, #11998e, #38ef7d)',
                    color: 'white',
                    fontWeight: 'bold',
                    border: '2px solid #fff',
                    boxShadow: '0px 0px 20px rgba(56, 239, 125, 0.8)',
                    borderRadius: '12px'
                },
                icon: () => '🎉'
            })
        }
        reset() 
    }

    useEffect(() => {
        if (pacienteActivo) {
            setValue('name', pacienteActivo.name)
            setValue('age', pacienteActivo.age)
            setValue('rfc', pacienteActivo.rfc)
            setValue('curp', pacienteActivo.curp)
            setValue('birthdate', pacienteActivo.birthdate)
            setValue('birthCountry', pacienteActivo.birthCountry)
        }
    }, [pacienteActivo, setValue])

    const handleCancelar = () => {
        limpiarPacienteActivo()
        reset()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <div className="flex flex-col items-center mb-6">
                <div className="bg-emerald-600 text-white p-3 rounded-full mb-3 shadow-md">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h2 className="font-black text-3xl text-center text-gray-800">Sistema de Registro</h2>
                <p className="text-sm font-bold text-center text-gray-500 mt-2 uppercase tracking-widest border-b-2 border-emerald-500 pb-2">
                    Servicio de Administración Tributaria
                </p>
            </div>

            <p className="text-lg text-center mb-6 text-gray-600">
                {pacienteActivo ? 'Actualice la información del ' : 'Ingrese los datos solicitados y '}
                <span className="text-emerald-600 font-bold">Administre el Registro</span>
            </p>

            <form
                className="bg-white shadow-2xl rounded-xl py-10 px-8 mb-10 border-t-4 border-t-emerald-500 border-x border-b border-gray-100"
                noValidate
                onSubmit={handleSubmit(registrarPaciente)}
            >
                <div className="bg-gray-50 border-l-4 border-indigo-500 p-4 mb-8 rounded-r-lg shadow-sm">
                    <p className="text-sm text-gray-600 font-medium">
                        <span className="font-bold text-gray-800 text-base block mb-1">Aviso Importante:</span> 
                        Llene los campos obligatorios con información verídica y verificable. Esta plataforma procesa información con carácter oficial e institucional.
                    </p>
                </div>

                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold text-gray-700 block mb-2">
                        Nombre
                    </label>
                    <input
                        id="name"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register('name', {
                            required: "El nombre del paciente es obligatorio",
                            maxLength: { value: 20, message: "El nombre no puede tener más de 20 caracteres" },
                            minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" }
                        })}
                    />
                    {errors.name &&
                        <Error> {errors.name?.message?.toString()} </Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="age" className="text-sm uppercase font-bold text-gray-700">
                        Edad
                    </label>
                    <input
                        id="age"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
                        type="number"
                        placeholder="Edad del Paciente"
                        {...register('age', { 
                            required: "La edad del paciente es obligatoria",
                            min: { value: 18, message: "Debe tener al menos 18 años" }
                        })}
                    />
                    {errors.age &&
                        <Error> {errors.age?.message?.toString()} </Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="rfc" className="text-sm uppercase font-bold text-gray-700">
                        RFC
                    </label>
                    <input
                        id="rfc"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
                        type="text"
                        placeholder="RFC del Paciente"
                        {...register('rfc', {
                            required: "El RFC es obligatorio",
                           // pattern: {
                             //   value: /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/,
                               // message: "RFC no válido"
                            //}
                        })}
                    />
                    {errors.rfc &&
                        <Error> {errors.rfc?.message?.toString()} </Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="curp" className="text-sm uppercase font-bold text-gray-700">
                        CURP
                    </label>
                    <input
                        id="curp"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
                        type="text"
                        placeholder="CURP del Paciente"
                        {...register('curp', {
                            required: "El CURP es obligatorio",
                            //pattern: {
                              //  value: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
                                //message: "CURP no válido"
                            //}
                        })}
                    />
                    {errors.curp &&
                        <Error> {errors.curp?.message?.toString()} </Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="birthdate" className="text-sm uppercase font-bold text-gray-700">
                        Fecha de Nacimiento
                    </label>
                    <input
                        id="birthdate"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm text-gray-600"
                        type="date"
                        {...register('birthdate', { 
                            required: "La fecha de nacimiento es obligatoria",
                            validate: (value) => {
                                const fechaNacimiento = new Date(value.toString());
                                const hoy = new Date();
                                const edadLimite = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());
                                return fechaNacimiento <= edadLimite || "Debe ser mayor de 18 años según su fecha de nacimiento";
                            }
                        })}
                    />
                    {errors.birthdate &&
                        <Error> {errors.birthdate?.message?.toString()} </Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="birthCountry" className="text-sm uppercase font-bold text-gray-700">
                        Estado
                    </label>
                    <input
                        id="birthCountry"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm"
                        type="text"
                        placeholder="Estado (ej. Jalisco, Nuevo León)"
                        {...register('birthCountry', { required: "El Estado es obligatorio" })}
                    />
                    {errors.birthCountry &&
                        <Error> {errors.birthCountry?.message?.toString()} </Error>
                    }
                </div>

                <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-gray-200">
                    <input
                        type="submit"
                        className="bg-emerald-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer transition-all duration-300 tracking-wide"
                        value={pacienteActivo ? 'Actualizar Registro' : 'Procesar Registro'}
                    />

                    {pacienteActivo && (
                        <button
                            type="button"
                            className="bg-gray-100 border border-gray-300 w-full p-3 text-gray-700 uppercase font-bold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 cursor-pointer transition-all duration-300 tracking-wide"
                            onClick={handleCancelar}
                        >
                            Cancelar Operación
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Formulario