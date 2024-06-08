package com.example.msgestion_matriculas.repository;


import com.example.msgestion_matriculas.entity.Matricula;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatriculaRepository extends JpaRepository<Matricula, Integer>{
    
}
