package com.example.msgestion_estudiantes.repository;


import com.example.msgestion_estudiantes.entity.Evaluación;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluaciónRepository extends JpaRepository<Evaluación,Integer> {
}
