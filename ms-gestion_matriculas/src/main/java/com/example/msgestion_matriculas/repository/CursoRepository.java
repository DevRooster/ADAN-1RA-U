package com.example.msgestion_matriculas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.msgestion_matriculas.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso,Integer> {
}
