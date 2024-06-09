package com.example.msmatricula.service;

import java.util.List;
import java.util.Optional;

import com.example.msmatricula.entity.Inscripcion;

public interface InscripcionService {

    public List<Inscripcion> listar();

    public Inscripcion guardar(Inscripcion inscripcion);

    public Optional<Inscripcion> buscarPorId(Integer id);

    public Inscripcion actualizar(Inscripcion inscripcion);

    public void eliminar(Integer id);
}
