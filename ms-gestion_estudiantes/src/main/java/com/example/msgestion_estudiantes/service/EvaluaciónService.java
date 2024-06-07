package com.example.msgestion_estudiantes.service;


import com.example.msgestion_estudiantes.entity.Evaluación;


import java.util.List;
import java.util.Optional;

public interface EvaluaciónService {
    List<Evaluación> lista();
    Evaluación guardar(Evaluación evaluación);
    Optional<Evaluación> buscarPorId(Integer id);
    Evaluación actualizar(Evaluación evaluación);
    void eleminar(Integer id);
}
