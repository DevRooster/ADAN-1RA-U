package com.example.msgestion_matriculas.repository;


import com.example.msgestion_matriculas.entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository<Curso, Integer>{
    
}
