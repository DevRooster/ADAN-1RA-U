package com.example.msgestion_matriculas.service;



import com.example.msgestion_matriculas.entity.Curso;

import java.util.List;
import java.util.Optional;

public interface CursoService {
     List<Curso> lista();
    
     Curso guardar(Curso curso);

     Optional<Curso> buscarPorId(Integer id);

     Curso actualizar(Curso curso);

     void eliminar(Integer id);
}
