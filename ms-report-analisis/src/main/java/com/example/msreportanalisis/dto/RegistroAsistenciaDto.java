package com.example.msreportanalisis.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class RegistroAsistenciaDto {
    private Integer id;
    private Integer DocenteId;
    private Integer estudiante_id;
    private Integer clase_id;
    private String estado_asistencia;
    private LocalDate fecha_asistencia;
    private String observaciones;

    private DocenteDto docente;
    private EstudianteDto estudiante;



}
