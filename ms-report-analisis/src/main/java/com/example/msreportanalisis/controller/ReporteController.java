package com.example.msreportanalisis.controller;

import com.example.msreportanalisis.entity.Reporte;
import com.example.msreportanalisis.service.ReporteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
}