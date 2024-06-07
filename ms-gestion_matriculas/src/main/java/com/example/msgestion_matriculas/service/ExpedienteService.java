package com.example.msgestion_matriculas.service;

import java.util.List;
import java.util.Optional;
import com.example.msgestion_matriculas.entity.Expediente;

public interface ExpedienteService {
    public List<Expediente> listar();
    
    public Expediente guardar(Expediente expediente);

    public Optional<Expediente> buscarPorId(Integer id);

    public Expediente actualizar(Expediente expediente);

    public void eliminar(Integer id);
}
