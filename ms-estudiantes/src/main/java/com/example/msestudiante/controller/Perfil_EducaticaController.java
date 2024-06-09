package com.example.msestudiante.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.msestudiante.entity.Perfil_Educativa;
import com.example.msestudiante.service.Perfil_EducativaService;

import java.util.List;

@RestController
@RequestMapping("/perfil")
public class Perfil_EducaticaController {
    @Autowired
    private Perfil_EducativaService productoService;

    @GetMapping
    public ResponseEntity<List<Perfil_Educativa>> listar() {
        return ResponseEntity.ok(productoService.listar());
    }

    @PostMapping
    public ResponseEntity<Perfil_Educativa> guardar(@RequestBody Perfil_Educativa producto) {
        return ResponseEntity.ok(productoService.guardar(producto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Perfil_Educativa> buscarPorId(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(productoService.buscarPorId(id).get());
    }

    @PutMapping
    public ResponseEntity<Perfil_Educativa> actualizar(@RequestBody Perfil_Educativa producto) {
        return ResponseEntity.ok(productoService.actualizar(producto));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Perfil_Educativa>> eliminar(@PathVariable(required = true) Integer id) {
        productoService.eliminar(id);
        return ResponseEntity.ok(productoService.listar());
    }
}
