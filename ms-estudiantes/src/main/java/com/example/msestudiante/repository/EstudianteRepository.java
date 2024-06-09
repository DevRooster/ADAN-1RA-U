package com.example.msestudiante.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.msestudiante.entity.Estudiante;

public interface EstudianteRepository extends JpaRepository<Estudiante,Integer> {
}
