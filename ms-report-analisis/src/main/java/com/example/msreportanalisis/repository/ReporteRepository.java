package com.example.msreportanalisis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.msreportanalisis.entity.Reporte;

public interface ReporteRepository extends JpaRepository<Reporte, Integer>{
    
}
