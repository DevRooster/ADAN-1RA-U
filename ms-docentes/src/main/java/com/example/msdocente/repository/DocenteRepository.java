package com.example.msdocente.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.msdocente.entity.Docente;

public interface DocenteRepository extends JpaRepository<Docente, Integer> {
}
