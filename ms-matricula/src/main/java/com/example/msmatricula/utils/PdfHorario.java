package com.example.msmatricula.utils;

import com.example.msmatricula.entity.Horario;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.ByteArrayOutputStream;
import java.util.List;

public class PdfHorario {
    public static ByteArrayOutputStream generatePdfStream(List<Horario> horarios) throws DocumentException {
        Document document = new Document();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PdfWriter.getInstance(document, outputStream);
        document.open();

        // Estilo de fuente en negrita
        Font boldFont = new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD);

        // Agregar título al documento
        document.add(new Paragraph("Lista de Horarios", boldFont));
        document.add(new Paragraph("\n"));

        // Iterar sobre la lista de horarios
        for (Horario horario : horarios) {
            // Agregar los datos de cada horario
            document.add(new Paragraph("ID: " + horario.getId()));
            document.add(new Paragraph("Curso: " + horario.getCurso(), boldFont));
            document.add(new Paragraph("Descripción: " + horario.getDescripcion()));
            document.add(new Paragraph("Grado Designado: " + horario.getGradoDesigando()));
            document.add(new Paragraph("ID del Estudiante: " + horario.getEstudianteId()));
            document.add(new Paragraph("\n")); // Espacio entre registros
        }

        // Cerrar el documento
        document.close();

        return outputStream;
    }
}
