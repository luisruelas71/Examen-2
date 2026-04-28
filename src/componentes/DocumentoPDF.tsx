import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // <-- Sintaxis correcta para evitar errores
import QRCode from 'qrcode';
import type { Patient } from './Index';

export const generarPDFIdentificacion = async (paciente: Patient) => {
    try {
        const doc = new jsPDF();

        // 1. Diseño de Encabezado (Header con color)
        doc.setFillColor(79, 70, 229); // Color indigo-600 de Tailwind
        doc.rect(0, 0, 210, 40, 'F'); // Rectángulo lleno en la parte superior

        // Título principal en blanco sobre fondo índigo
        doc.setTextColor(255, 255, 255);
        
        // Información formal institucional
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.text('ESTADOS UNIDOS MEXICANOS', 10, 10);
        doc.text('SECRETARÍA DE HACIENDA Y CRÉDITO PÚBLICO', 10, 14);
        doc.text('SERVICIO DE ADMINISTRACIÓN TRIBUTARIA', 10, 18);
        
        const fechaActualCorta = new Date().toLocaleDateString('es-MX');
        doc.text(`FOLIO: SAT-${Math.floor(Math.random() * 1000000)}`, 200, 10, { align: 'right' });
        doc.text(`FECHA DE EMISIÓN: ${fechaActualCorta}`, 200, 14, { align: 'right' });

        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text('IDENTIFICACIÓN OFICIAL', 105, 28, { align: 'center' });
        
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text('Sistema de Seguimiento Sat', 105, 34, { align: 'center' });

        // Regresar a color texto oscuro
        doc.setTextColor(51, 51, 51); // gray-800
        
        const patientData = [
            ['Nombre Completo', paciente.name],
            ['Edad', `${paciente.age} años`], 
            ['RFC', paciente.rfc],
            ['CURP', paciente.curp],
            ['Fecha de Nacimiento', paciente.birthdate],
            ['Estado', paciente.birthCountry],
        ];

        // 2. Tabla de Datos mejorada
        autoTable(doc, {
            startY: 50,
            head: [['Campo', 'Datos Personales']],
            body: patientData,
            theme: 'grid',
            margin: { left: 15, right: 80 }, // Dejar margen derecho para el QR
            styles: {
                fontSize: 11,
                cellPadding: 6,
                lineColor: [229, 231, 235], // gray-200
                lineWidth: 0.1,
            },
            headStyles: {
                fillColor: [79, 70, 229], // indigo-600
                textColor: 255,
                fontStyle: 'bold',
                halign: 'left'
            },
            columnStyles: {
                0: { fontStyle: 'bold', fillColor: [249, 250, 251] } // gray-50
            }
        });

        // 3. Generar y colocar QR con marco
        const qrData = JSON.stringify(paciente);
        const qrCodeImage = await QRCode.toDataURL(qrData);
        
        // Marco contenedor para el QR
        doc.setDrawColor(200, 200, 200);
        doc.setFillColor(250, 250, 250);
        doc.roundedRect(138, 50, 60, 65, 3, 3, 'FD'); // Marco a la derecha de la tabla
        
        // Imagen QR
        doc.addImage(qrCodeImage, 'PNG', 143, 52, 50, 50);
        
        // Texto debajo del QR
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.text('CÓDIGO DE VERIFICACIÓN', 168, 108, { align: 'center' });

        // 4. Pie de página decorativo
        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(0.5);
        doc.line(10, 280, 200, 280);
        
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text('Documento oficial intransferible. Válido únicamente en el ecosistema Sat.', 105, 286, { align: 'center' });

        doc.save(`Identificacion_${paciente.name}.pdf`);
    } catch (error) {
        console.error("Error al generar el PDF de Identificación:", error);
    }
};

export const generarPDFConstancia = (paciente: Patient) => {
    try {
        const doc = new jsPDF();

        // 1. Diseño Formal de Constancia: Márgenes decorativos
        const pWidth = 210, pHeight = 297;
        const offset = 8;
        
        doc.setDrawColor(20, 184, 166); // Color emerald-500
        doc.setLineWidth(1.5);
        doc.rect(offset, offset, pWidth - (offset*2), pHeight - (offset*2)); // Borde principal
        doc.setLineWidth(0.5);
        doc.rect(offset + 2, offset + 2, pWidth - (offset*2 + 4), pHeight - (offset*2 + 4)); // Borde fino interno

        // 2. Encabezado Oficial
        doc.setFillColor(20, 184, 166); // Fondo Esmeralda arriba
        doc.rect(12, 12, pWidth - 24, 30, 'F');
        
        doc.setTextColor(255, 255, 255);

        // Información formal en el encabezado
        doc.setFont("times", "normal");
        doc.setFontSize(9);
        doc.text('ESTADOS UNIDOS MEXICANOS', 18, 20);
        doc.text('SECRETARÍA DE HACIENDA Y CRÉDITO PÚBLICO', 18, 24);
        doc.text('SERVICIO DE ADMINISTRACIÓN TRIBUTARIA', 18, 28);
        
        const fechaActualCorta = new Date().toLocaleDateString('es-MX');
        doc.text(`FOLIO: SAT-${Math.floor(Math.random() * 1000000)}`, pWidth - 18, 20, { align: 'right' });
        doc.text(`FECHA DE EMISIÓN: ${fechaActualCorta}`, pWidth - 18, 24, { align: 'right' });

        doc.setFont("times", "bold");
        doc.setFontSize(22);
        doc.text('CONSTANCIA DE REGISTRO', pWidth / 2, 35, { align: 'center' });

        // Regresar color oscuro
        doc.setTextColor(30, 41, 59); // gray-800
        doc.setFont("times", "normal");
        doc.setFontSize(13);

        const fechaActual = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        
        // 3. Párrafo formal y justificado
        const textoPrincipal = `A quien corresponda:

Por medio del presente documento oficial, la administración del Sistema de Seguimiento Sat hace constar y certifica que el C. ${paciente.name.toUpperCase()}, que acredita su identidad con Registro Federal de Contribuyentes (RFC) ${paciente.rfc} y Clave Única de Registro de Población (CURP) ${paciente.curp}, ha sido debidamente aceptado(a) e incorporado(a) al registro activo en nuestra institución.

Los datos presentados fueron validados conforme a los procedimientos institucionales y se resguardan de manera segura en el sistema, asegurando el cumplimiento y transparencia correspondientes al día de emisión, ${fechaActual}.`;

        // Imprimir párrafo respetando un ancho máximo
        doc.text(textoPrincipal, 30, 55, { maxWidth: pWidth - 50, align: 'justify', lineHeightFactor: 1.6 });

        const patientData = [
            ['Nombre Registrado', paciente.name],
            ['Años de Edad', `${paciente.age} años`], 
            ['C.U.R.P.', paciente.curp],
            ['R.F.C.', paciente.rfc],
            ['Fecha de Nacimiento', paciente.birthdate],
            ['Estado de Origen', paciente.birthCountry],
        ];

        // 4. Tabla de datos elegante y centrada
        autoTable(doc, {
            startY: 135,
            head: [['Especificación', 'Información Validada']],
            body: patientData,
            theme: 'grid',
            margin: { left: 40, right: 40 },
            styles: {
                fontSize: 11,
                cellPadding: 5,
                lineColor: [209, 213, 219], // gray-300
                lineWidth: 0.1,
            },
            headStyles: {
                fillColor: [20, 184, 166], // emerald-500
                textColor: 255,
                fontStyle: 'bold',
                halign: 'center'
            },
            bodyStyles: {
                halign: 'center'
            }
        });

        // 5. Firma y cierre formal
        doc.setFont("times", "italic");
        doc.setFontSize(12);
        //doc.text(`Se expide para los fines legales que al interesado convengan, a los ${new Date().getDate()} días del mes de ${new Date().toLocaleString('es-ES', { month: 'long' })} de ${new Date().getFullYear()}.`, 25, 220, { maxWidth: pWidth - 50, align: 'justify' });

        doc.setLineWidth(0.5);
        doc.setDrawColor(50, 50, 50);
        doc.line(75, 260, 135, 260); // Línea de firma
        doc.setFont("times", "bold");
        doc.setFontSize(12);
        doc.text('Firma Autorizada', pWidth / 2, 266, { align: 'center' });
        doc.setFont("times", "normal");
        doc.setFontSize(10);
        doc.text('Sistema de Seguimiento Sat - Sede Central', pWidth / 2, 271, { align: 'center' });

        doc.save(`Constancia_${paciente.name}.pdf`);
    } catch (error) {
        console.error("Error al generar el PDF de Constancia:", error);
    }
};