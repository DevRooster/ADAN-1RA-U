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
    private ReporteRepository reporteRepository;

    @Override
    public List<Reporte> listar() {
        return reporteRepository.findAll();
    }

    @Override
    public Reporte guardar(Reporte reporte) {
        return reporteRepository.save(reporte);
    }

    @Override
    public Optional<Reporte> buscarPorId(Integer id) {
        return reporteRepository.findById(id);
    }

    @Override
    public Reporte actualizar(Reporte reporte) {
        return reporteRepository.save(reporte);
    }

    @Override
    public void eliminar(Integer id) {
        reporteRepository.deleteById(id);
    }
}
