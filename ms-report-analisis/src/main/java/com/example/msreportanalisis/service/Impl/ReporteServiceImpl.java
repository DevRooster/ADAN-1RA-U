package com.example.msreportanalisis.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.msreportanalisis.entity.Reporte;
import com.example.msreportanalisis.repository.ReporteRepository;
import com.example.msreportanalisis.service.ReporteService;

@Service
public class ReporteServiceImpl implements ReporteService {
    @Autowired
    private ReporteRepository mensajeRepository;

    @Override
    public List<Reporte> listar() {
        return mensajeRepository.findAll();
    }

    @Override
    public Reporte guardar(Reporte mensaje) {
        return mensajeRepository.save(mensaje);
    }

    @Override
    public Optional<Reporte> buscarPorId(Integer id) {
        return mensajeRepository.findById(id);
    }

    @Override
    public Reporte actualizar(Reporte mensaje) {
        return mensajeRepository.save(mensaje);
    }

    @Override
    public void eliminar(Integer id) {
        mensajeRepository.deleteById(id);
    }
}
