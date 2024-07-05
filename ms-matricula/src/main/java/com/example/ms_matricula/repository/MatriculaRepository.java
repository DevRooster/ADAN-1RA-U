package com.example.ms_matricula.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ms_matricula.entity.Matricula;

public interface MatriculaRepository extends JpaRepository<Matricula, Integer>{
    
}
