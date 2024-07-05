package com.example.ms_matricula.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ms_matricula.entity.Horario;
import com.example.ms_matricula.service.HorarioService;


@RestController
@RequestMapping("/horario")
public class HorarioController {
    @Autowired
    private HorarioService horarioService;

    @GetMapping
    public ResponseEntity<List<Horario>> lista() {
        return ResponseEntity.ok(horarioService.lista());
    }

    @PostMapping
    public ResponseEntity<Horario> guardar(@RequestBody Horario horario) {
        return ResponseEntity.ok(horarioService.guardar(horario));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Horario> buscarPorId(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok(horarioService.buscarPorId(id).get());
    }

    @PutMapping
    public ResponseEntity<Horario> actualizar(@RequestBody Horario horario) {
        return ResponseEntity.ok(horarioService.actualizar(horario));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Horario>> eleminar(@PathVariable(required = true) Integer id) {
        horarioService.eleminar(id);
        return ResponseEntity.ok(horarioService.lista());
    }
}
