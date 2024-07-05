package com.example.ms_matricula.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.ms_matricula.entity.Matricula;

@Service
public interface MatriculaService {
    List<Matricula> lista();
    Matricula guardar(Matricula matricula);
    Optional<Matricula> buscarPorId(Integer id);
    Matricula actualizar(Matricula matricula);
    void eleminar(Integer id);
}
