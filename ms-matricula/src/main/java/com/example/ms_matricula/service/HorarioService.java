package com.example.ms_matricula.service;

import java.util.List;
import java.util.Optional;

import com.example.ms_matricula.entity.Horario;

public interface HorarioService {
    public List<Horario> listar();

    public Horario guardar(Horario horario);

    public Optional<Horario> buscarPorId(Integer id);

    public Horario actualizar(Horario horario);

    public void eliminar(Integer id);
}
