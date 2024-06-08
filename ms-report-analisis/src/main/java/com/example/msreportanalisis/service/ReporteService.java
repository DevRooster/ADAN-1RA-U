package com.example.msreportanalisis.service;

import com.example.msreportanalisis.entity.Reporte;
import java.util.List;
import java.util.Optional;

public interface ReporteService {
    public List<Reporte> listar();
    
    public Reporte guardar(Reporte reporte);

    public Optional<Reporte> buscarPorId(Integer id);

    public Reporte actualizar(Reporte reporte);

    public void eliminar(Integer id);
}
