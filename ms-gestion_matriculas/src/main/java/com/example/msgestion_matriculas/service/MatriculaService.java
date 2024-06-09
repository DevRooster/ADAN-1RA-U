package com.example.msgestion_matriculas.service;



import com.example.msgestion_matriculas.entity.Matricula;

import java.util.List;
import java.util.Optional;

public interface MatriculaService {
     List<Matricula> lista();
    
     Matricula guardar(Matricula matricula);

     Optional<Matricula> buscarPorId(Integer id);

     Matricula actualizar(Matricula matricula);

     void eliminar(Integer id);
}
