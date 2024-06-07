package com.example.msgestion_matriculas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.msgestion_matriculas.entity.Matricula;

public interface MatriculaRepository extends JpaRepository<Matricula, Integer>{
}