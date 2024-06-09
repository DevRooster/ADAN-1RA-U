package com.example.msestudiante.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Perfil_Educativa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private String institucion;
    private String titulo;
    private String descripcion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "estudiante_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Estudiante estudiante;
}