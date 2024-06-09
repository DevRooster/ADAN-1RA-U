package com.example.msmatricula.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.msmatricula.entity.Inscripcion;
import com.example.msmatricula.service.InscripcionService;

import java.util.List;

@RestController
@RequestMapping("/inscripcion")
public class InscripcionController {
    @Autowired
    private InscripcionService inscripcionService;

    @GetMapping
    public ResponseEntity<List<Inscripcion>> listar() {
        return ResponseEntity.ok(inscripcionService.listar());
    }

    @PostMapping
    public ResponseEntity<Inscripcion> guardar(@RequestBody Inscripcion inscripcion) {
        return ResponseEntity.ok(inscripcionService.guardar(inscripcion));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inscripcion> buscarPOrId(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(inscripcionService.buscarPorId(id).get());
    }

    @PutMapping
    public ResponseEntity<Inscripcion> actualizar(@RequestBody Inscripcion inscripcion) {
        return ResponseEntity.ok(inscripcionService.actualizar(inscripcion));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Inscripcion>>  eliminar(@PathVariable(required = true) Integer id) {
        inscripcionService.eliminar(id);
        return ResponseEntity.ok(inscripcionService.listar());
    }
}
