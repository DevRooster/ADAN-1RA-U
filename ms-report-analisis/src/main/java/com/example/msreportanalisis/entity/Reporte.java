package com.example.msreportanalisis.entity;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Reporte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String contenido;
    private Date fechaEnvio;
    private Integer docenteId;

    // Relación con Destinatario (Uno a Muchos)
    // @OneToMany(mappedBy = "mensaje", cascade = CascadeType.ALL)
    // private List<Destinatario> destinatario;

    // Relación con Notificación (Uno a Uno)

}