package com.example.ms_matricula.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.ms_matricula.entity.Horario;

@Service
public interface HorarioService {
    List<Horario> lista();
    Horario guardar(Horario horario);
    Optional<Horario> buscarPorId(Integer id);
    Horario actualizar(Horario horario);
    void eleminar(Integer id);
}
