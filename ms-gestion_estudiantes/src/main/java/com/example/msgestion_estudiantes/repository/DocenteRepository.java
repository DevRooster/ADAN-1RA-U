package com.example.msgestion_estudiantes.repository;


import com.example.msgestion_estudiantes.entity.Docente;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DocenteRepository extends JpaRepository <Docente,Integer> {
}
