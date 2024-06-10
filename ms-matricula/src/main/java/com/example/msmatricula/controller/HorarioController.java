package com.example.msmatricula.controller;


import com.example.msmatricula.entity.Horario;
import com.example.msmatricula.service.HorarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/horarios")
public class HorarioController {
    @Autowired
    private HorarioService horarioService;

    @GetMapping
    ResponseEntity<List<Horario>> lista(){
        return ResponseEntity.ok(horarioService.lista());
    }
    @PostMapping
    ResponseEntity<Horario> guardar(@RequestBody Horario horario){
        return ResponseEntity.ok(horarioService.guardar((horario)));
    }

    @GetMapping("/{id}")
    ResponseEntity<Horario> buscarPorId(@PathVariable(required = true) Integer id){
        return ResponseEntity.ok(horarioService.buscarPorId(id).get());

    }

    @PutMapping
    ResponseEntity<Horario> actualizar(@RequestBody Horario horario){
        return ResponseEntity.ok(horarioService.actualizar((horario)));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<Horario>> eleminar(@PathVariable(required = true) Integer id){
        horarioService.eleminar(id);
        return ResponseEntity.ok(horarioService.lista());

    }
}
