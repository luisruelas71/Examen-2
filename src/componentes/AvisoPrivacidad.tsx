export default function AvisoPrivacidad() {
    return (
        <div className="p-8 rounded-lg max-w-4xl mx-auto my-10 space-y-12">
            
            <section id="privacidad">
                <h2 className="text-3xl font-black text-emerald-400 mb-6 border-b-2 border-emerald-500 pb-2">
                    Aviso de Privacidad
                </h2>
                <div className="text-gray-200 space-y-4">
                    <p>
                        El Servicio de Administración Tributaria (en adelante SAT), con domicilio en Av. Hidalgo 77, col. Guerrero, c.p. 06300, Ciudad de México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
                    </p>
                    <h3 className="text-xl font-bold text-white mt-6">¿Para qué fines utilizaremos sus datos personales?</h3>
                    <p>
                        Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                    </p>
                    <ul className="list-disc list-inside ml-6 text-gray-300">
                        <li>Verificar y confirmar su identidad.</li>
                        <li>Integrar su expediente como contribuyente u operante.</li>
                        <li>Notificarle sobre el estado de sus trámites.</li>
                        <li>Cumplir con las obligaciones legales derivadas de nuestras operaciones institucionales.</li>
                    </ul>
                    <h3 className="text-xl font-bold text-white mt-6">¿Qué datos personales utilizaremos para estos fines?</h3>
                    <p>
                        Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: Nombre completo, Edad, Registro Federal de Contribuyentes (RFC), Clave Única de Registro de Población (CURP), Fecha de nacimiento y Estado de origen.
                    </p>
                    <h3 className="text-xl font-bold text-white mt-6">Transferencia de datos</h3>
                    <p>
                        Se le informa que sus datos personales no serán compartidos con ninguna autoridad, empresa, organización o persona distinta a nosotros y serán utilizados exclusivamente para los fines señalados, salvo en los casos previstos por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.
                    </p>
                </div>
            </section>

            <section id="terminos">
                <h2 className="text-3xl font-black text-emerald-400 mb-6 border-b-2 border-emerald-500 pb-2">
                    Términos y Condiciones de Uso
                </h2>
                <div className="text-gray-200 space-y-4">
                    <p>
                        El uso de este sistema informático institucional implica la aceptación absoluta, expresa y sin reservas de los presentes términos y condiciones. Todo usuario adquiere el compromiso de utilizar esta plataforma bajo los principios de legalidad, honradez y transparencia.
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-3 mt-4 text-gray-300">
                        <li>
                            <strong className="text-white">Uso de Identidad:</strong> Es estrictamente obligatorio ingresar datos verídicos correspondientes a personas físicas comprobables. La inserción de datos espurios y la falsificación de documentación oficial es un delito federal grave.
                        </li>
                        <li>
                            <strong className="text-white">Responsabilidad del Operador:</strong> Usted asume toda la responsabilidad sobre la administración, actualización o baja de los registros que modifique durante su sesión, así como el resguardo de las constancias y PDFs que el sistema genera.
                        </li>
                        <li>
                            <strong className="text-white">Propiedad de la Información:</strong> Todos los datos administrados dentro de esta entidad pasan a formar parte del banco de información del Gobierno Federal, quedando prohibida su extracción masiva o usos de comercialización de base de datos.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="directorio">
                <h2 className="text-3xl font-black text-emerald-400 mb-6 border-b-2 border-emerald-500 pb-2">
                    Directorio Institucional
                </h2>
                <div className="text-gray-200 space-y-4">
                    <p>
                        Si requiere de asistencia técnica, hacer alguna consulta corporativa o emitir una duda referente a su identidad fiscal o constancias, ponemos a su disposición los medios de contacto de nuestros principales departamentos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900/60 backdrop-blur-sm border border-emerald-500/30 p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-emerald-400/60 transition-all">
                            <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2">
                                🏢 Oficinas Centrales
                            </h4>
                            <p className="text-sm text-gray-300 mb-1"><span className="font-bold text-white">Ubicación:</span> Av. Hidalgo 77, col. Guerrero, c.p. 06300, Ciudad de México.</p>
                            <p className="text-sm text-gray-300"><span className="font-bold text-white">Horario:</span> Lunes a Jueves de 8:30 a 16:00 hrs. Viernes de 8:30 a 15:00 hrs.</p>
                        </div>
                        
                        <div className="bg-gray-900/60 backdrop-blur-sm border border-emerald-500/30 p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-emerald-400/60 transition-all">
                            <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2">
                                📞 Atención a la Ciudadanía
                            </h4>
                            <p className="text-sm text-gray-300 mb-1"><span className="font-bold text-white">Teléfono:</span> MarcaSAT 55 627 22 728</p>
                            <p className="text-sm text-gray-300 mb-1"><span className="font-bold text-white">Desde Exterior:</span> (+52) 55 627 22 728</p>
                            <p className="text-sm text-gray-300"><span className="font-bold text-white">Horario telefónico:</span> 8:00 a 18:30 hrs.</p>
                        </div>

                        <div className="bg-gray-900/60 backdrop-blur-sm border border-emerald-500/30 p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-emerald-400/60 transition-all">
                            <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2">
                                💻 Soporte Técnico del Sistema
                            </h4>
                            <p className="text-sm text-gray-300 mb-1"><span className="font-bold text-white">Teléfono:</span> 55 1234 5678 (Ext 1)</p>
                            <p className="text-sm text-gray-300"><span className="font-bold text-white">Correo:</span> soporte.sistemas@sat.gob.mx</p>
                        </div>

                        <div className="bg-gray-900/60 backdrop-blur-sm border border-emerald-500/30 p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-emerald-400/60 transition-all">
                            <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2">
                                📄 Transparencia y Denuncias
                            </h4>
                            <p className="text-sm text-gray-300 mb-1"><span className="font-bold text-white">Teléfono:</span> 55 1234 5678 (Ext 4)</p>
                            <p className="text-sm text-gray-300"><span className="font-bold text-white">Portal:</span> denuncias.sat.gob.mx</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
