package com.example.msreportanalisis.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class EstudianteDto {
    private Integer id;
    private String nombre;
    private LocalDate fechaNacimiento;
    private String direccion;
    private String telefono;
    private String email;
    private String gradoActual;


}
