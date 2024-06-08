package com.example.msreportanalisis.controller;

import com.example.msreportanalisis.entity.Reporte;
import com.example.msreportanalisis.service.ReporteService;
import com.example.msreportanalisis.utils.PdfUtils;
import com.example.msreportanalisis.utils.UserExcelExporter;
import com.itextpdf.text.DocumentException;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/reporte")
public class ReporteController {
    @Autowired
    private ReporteService reporteService;

    @GetMapping
    public ResponseEntity<List<Reporte>> listar() {
        return ResponseEntity.ok(reporteService.listar());
    }

    @PostMapping
    public ResponseEntity<Reporte> guardar(@RequestBody Reporte reporte) {
        return ResponseEntity.ok(reporteService.guardar(reporte));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reporte> buscarPOrId(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(reporteService.buscarPorId(id).get());
    }

    @PutMapping
    public ResponseEntity<Reporte> actualizar(@RequestBody Reporte reporte) {
        return ResponseEntity.ok(reporteService.actualizar(reporte));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Reporte>> eliminar(@PathVariable(required = true) Integer id) {
        reporteService.eliminar(id);
        return ResponseEntity.ok(reporteService.listar());
    }




    @GetMapping("/pdf")
    public ResponseEntity<byte[]> exportPdf() throws IOException, DocumentException {
        //List<Map<String, Object>> queryResults = myService.executeQuery(request);
        ByteArrayOutputStream pdfStream = PdfUtils.generatePdfStream(reporteService.listar());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=query_results.pdf");
        headers.setContentLength(pdfStream.size());
        return new ResponseEntity<>(pdfStream.toByteArray(), headers, HttpStatus.OK);
    }
    @GetMapping("/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        UserExcelExporter excelExporter = new UserExcelExporter(reporteService.listar());
        excelExporter.export(response);
    }
    @PostMapping("/upload")
    @ResponseBody
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Error: Por favor selecciona un archivo para subir.";
        }

        try {
            // Obtener el nombre del archivo original
            String fileName = file.getOriginalFilename();

            // Guardar el archivo en el directorio base del proyecto
            String projectBaseDir = System.getProperty("user.dir");
            System.out.println("projectBaseDir: "+projectBaseDir);
            String uploadDir = projectBaseDir + File.separator + "uploads";
            String filePath = uploadDir + File.separator + fileName;
            File dest = new File(filePath);
            file.transferTo(dest);

            return "Archivo subido exitosamente: " + fileName;
        } catch (IOException e) {
            return "Error al subir el archivo: " + e.getMessage();
        }
    }
}