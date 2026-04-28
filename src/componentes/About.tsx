// src/componentes/About.tsx
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-5">
                ¡Bienvenido a Genial!
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Genial!</strong> es una aplicación innovadora diseñada para simplificar la gestión de información personal y la generación de documentos importantes. Nuestra plataforma permite a los usuarios registrar, actualizar y administrar datos de manera segura y eficiente.
            </p>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Características Principales</h2>
                <ul className="list-disc list-inside mt-4 text-gray-600">
                    <li className="mb-2">
                        <strong>Registro de Personas:</strong> Un formulario intuitivo para capturar datos personales, incluyendo validaciones para garantizar la precisión de la información.
                    </li>
                    <li className="mb-2">
                        <strong>Gestión de Datos:</strong> Edita y elimina registros con facilidad, manteniendo la información siempre actualizada.
                    </li>
                    <li className="mb-2">
                        <strong>Generación de Documentos PDF:</strong>
                        <ul className="list-disc list-inside ml-6 mt-2">
                            <li><strong>Identificación Oficial:</strong> Genera una tarjeta de identificación en formato PDF con los datos del usuario y un código QR para una verificación rápida.</li>
                            <li><strong>Constancia de Registro:</strong> Crea una constancia formal que certifica el registro en el sistema.</li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <strong>Notificaciones Interactivas:</strong> Recibe notificaciones en tiempo real sobre las acciones realizadas, como la creación, actualización o eliminación de registros.
                    </li>
                    <li className="mb-2">
                        <strong>Diseño Moderno y Responsivo:</strong> Una interfaz de usuario atractiva y adaptable a cualquier dispositivo, construida con React, TypeScript y Tailwind CSS.
                    </li>
                </ul>
            </div>
            <div className="mt-8 text-center">
                <p className="text-gray-500">
                    Desarrollado con ❤️ por un estudiante de la UTHH.
                </p>
            </div>
        </div>
    );
};

export default About;
