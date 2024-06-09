package com.example.msasistencia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.msasistencia.entity.Asistencia;
import com.example.msasistencia.service.AsistenciaService;

import java.util.List;

@RestController
@RequestMapping("/asistencia")
public class AsistenciaController {
    @Autowired
    private AsistenciaService asistenciaService;

    @GetMapping
    public ResponseEntity<List<Asistencia>> listar() {
        return ResponseEntity.ok(asistenciaService.listar());
    }

    @PostMapping
    public ResponseEntity<Asistencia> guardar(@RequestBody Asistencia asistencia) {
        return ResponseEntity.ok(asistenciaService.guardar(asistencia));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Asistencia> buscarPorId(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(asistenciaService.buscarPorId(id).get());
    }

    @PutMapping
    public ResponseEntity<Asistencia> actualizar(@RequestBody Asistencia asistencia) {
        return ResponseEntity.ok(asistenciaService.actualizar(asistencia));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Asistencia>>  eliminar(@PathVariable(required = true) Integer id) {
        asistenciaService.eliminar(id);
        return ResponseEntity.ok(asistenciaService.listar());
    }
}
