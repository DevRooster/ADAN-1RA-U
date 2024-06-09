package com.example.msestudiante.service;

import java.util.List;
import java.util.Optional;

import com.example.msestudiante.entity.Estudiante;

public interface EstudianteService {

    public List<Estudiante> listar();

    public Estudiante guardar(Estudiante estudiante);

    public Optional<Estudiante> buscarPorId(Integer id);

    public Estudiante actualizar(Estudiante estudiante);

    public void eliminar(Integer id);
}