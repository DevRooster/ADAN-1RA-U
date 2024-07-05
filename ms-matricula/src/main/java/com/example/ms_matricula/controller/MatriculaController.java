package com.example.ms_matricula.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ms_matricula.entity.Matricula;
import com.example.ms_matricula.service.MatriculaService;

@RestController
@RequestMapping("/matricula")
public class MatriculaController {
        @Autowired
    private MatriculaService matriculaService;

    @GetMapping
    public ResponseEntity<List<Matricula>> lista() {
        return ResponseEntity.ok(matriculaService.lista());
    }

    @PostMapping
    public ResponseEntity<Matricula> guardar(@RequestBody Matricula matricula) {
        return ResponseEntity.ok(matriculaService.guardar(matricula));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Matricula> buscarPorId(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(matriculaService.buscarPorId(id).get());
    }

    @PutMapping
    public ResponseEntity<Matricula> actualizar(@RequestBody Matricula matricula) {
        return ResponseEntity.ok(matriculaService.actualizar(matricula));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Matricula>> eleminar(@PathVariable(required = true) Integer id) {
        matriculaService.eleminar(id);
        return ResponseEntity.ok(matriculaService.lista());
    }
}
