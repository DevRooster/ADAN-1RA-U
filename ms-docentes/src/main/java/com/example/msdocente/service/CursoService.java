package com.example.msdocente.service;

import java.util.List;
import java.util.Optional;
import com.example.msdocente.entity.Curso;

public interface CursoService {

    public List<Curso> listar();

    public Curso guardar(Curso curso);

    public Optional<Curso> buscarPorId(Integer id);

    public Curso actualizar(Curso curso);

    public void eliminar(Integer id);
}