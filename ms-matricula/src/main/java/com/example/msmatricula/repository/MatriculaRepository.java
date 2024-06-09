package com.example.msmatricula.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.msmatricula.entity.Matricula;

public interface MatriculaRepository extends JpaRepository<Matricula, Integer> {
}
