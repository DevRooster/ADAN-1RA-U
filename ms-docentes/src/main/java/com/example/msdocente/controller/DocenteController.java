package com.example.msdocente.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.msdocente.entity.Docente;
import com.example.msdocente.service.DocenteService;

import java.util.List;

@RestController
@RequestMapping("/producto")
public class DocenteController {
    @Autowired
    private DocenteService productoService;

    @GetMapping
    public ResponseEntity<List<Docente>> listar() {
        return ResponseEntity.ok(productoService.listar());
    }

    @PostMapping
    public ResponseEntity<Docente> guardar(@RequestBody Docente producto) {
        return ResponseEntity.ok(productoService.guardar(producto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Docente> buscarPorId(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(productoService.buscarPorId(id).get());
    }

    @PutMapping
    public ResponseEntity<Docente> actualizar(@RequestBody Docente producto) {
        return ResponseEntity.ok(productoService.actualizar(producto));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Docente>> eliminar(@PathVariable(required = true) Integer id) {
        productoService.eliminar(id);
        return ResponseEntity.ok(productoService.listar());
    }
}
