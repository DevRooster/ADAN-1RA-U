package com.example.ms_matricula.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ms_matricula.entity.Horario;

public interface HorarioRepository extends JpaRepository<Horario, Integer>{
    
}
