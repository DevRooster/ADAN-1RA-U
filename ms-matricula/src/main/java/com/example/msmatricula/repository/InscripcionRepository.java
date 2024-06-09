package com.example.msmatricula.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.msmatricula.entity.Inscripcion;

public interface InscripcionRepository extends JpaRepository<Inscripcion,Integer> {
}
