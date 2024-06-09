package com.example.msmatricula.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Inscripcion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String apellido;
    private String direccion;
    private String telefono;
    private String email;
    private LocalDate fechaNacimiento;
    private String nivelEducacional;  

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inscripcion_id", nullable = false)
    private Matricula matricula;
}
