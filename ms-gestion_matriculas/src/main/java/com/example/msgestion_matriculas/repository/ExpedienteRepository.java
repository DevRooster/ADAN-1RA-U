package com.example.msgestion_matriculas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.msgestion_matriculas.entity.Expediente;

public interface ExpedienteRepository extends JpaRepository<Expediente,Integer> {
}
