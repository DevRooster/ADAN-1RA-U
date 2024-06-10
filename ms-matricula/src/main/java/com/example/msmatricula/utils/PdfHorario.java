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
        // Write column names
       // Map<String, Object> firstRow = queryResults.get(0);
        for (Horario horario :horarios) {
            Font boldFont = new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD);
            Paragraph paragraph = new Paragraph(horario.getNombre(), boldFont);
            document.add(paragraph);
        }
        document.add(new Paragraph("\n"));
        // Write data rows
       // for (Map<String, Object> row : queryResults) {
            //for (Object value : row.values()) {
            //    Paragraph paragraph2 = new Paragraph(value.toString());
            //    document.add(paragraph2);
           // }
            document.add(new Paragraph("\n"));
       // }
        document.close();
        return outputStream;
    }
}