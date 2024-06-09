package com.example.msdocente.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.msdocente.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso,Integer> {
}
