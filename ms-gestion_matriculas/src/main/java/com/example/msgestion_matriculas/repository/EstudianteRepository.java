package com.example.msgestion_matriculas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.msgestion_matriculas.entity.Estudiante;

public interface EstudianteRepository extends JpaRepository <Estudiante,Integer> {
}
