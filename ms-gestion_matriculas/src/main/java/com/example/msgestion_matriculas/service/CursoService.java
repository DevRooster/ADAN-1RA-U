package com.example.msgestion_matriculas.service;

import com.example.msgestion_matriculas.entity.Curso;
import java.util.List;
import java.util.Optional;

public interface CursoService {
    public List<Curso> listar();
    
    public Curso guardar(Curso curso);

    public Optional<Curso> buscarPorId(Integer id);

    public Curso actualizar(Curso curso);

    public void eliminar(Integer id);
}
