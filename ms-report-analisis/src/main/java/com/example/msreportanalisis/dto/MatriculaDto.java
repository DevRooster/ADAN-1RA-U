package com.example.msreportanalisis.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class MatriculaDto {
    private Integer id;
    private Date fechaMatriculacion;
    private String estadoMatricula;

    private EstudianteDto estudiante;


}
