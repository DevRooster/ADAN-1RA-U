package com.example.msmatricula.entity;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
public class Horario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String curso; //Nombre del curso
    private String docente; //Nombre del Docente
    private String descripcion; // Aula
    private String grado; //Grado 4,5,6 Años

}
