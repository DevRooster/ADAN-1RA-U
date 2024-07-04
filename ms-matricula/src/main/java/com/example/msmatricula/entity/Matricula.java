package com.example.msmatricula.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
public class Matricula {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate fechaMatricula;
    private String estudiante; // nombre; estudiante
    private String estado; //Matricula, No matriculado
    private String gradoActual; //4,5,6 Años

}
