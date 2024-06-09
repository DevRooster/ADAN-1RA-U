package com.example.msasistencia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.msasistencia.entity.Asistencia;

public interface AsistenciaRepository extends JpaRepository<Asistencia,Integer> {
}
