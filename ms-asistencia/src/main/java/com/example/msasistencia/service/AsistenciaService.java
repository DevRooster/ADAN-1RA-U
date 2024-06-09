package com.example.msasistencia.service;

import java.util.List;
import java.util.Optional;

import com.example.msasistencia.entity.Asistencia;

public interface AsistenciaService {

    public List<Asistencia> listar();

    public Asistencia guardar(Asistencia asistencia);

    public Optional<Asistencia> buscarPorId(Integer id);

    public Asistencia actualizar(Asistencia asistencia);

    public void eliminar(Integer id);
}