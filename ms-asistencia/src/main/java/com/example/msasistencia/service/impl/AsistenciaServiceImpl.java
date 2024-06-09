package com.example.msasistencia.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.msasistencia.entity.Asistencia;
import com.example.msasistencia.repository.AsistenciaRepository;
import com.example.msasistencia.service.AsistenciaService;

import java.util.List;
import java.util.Optional;

@Service
public class AsistenciaServiceImpl implements AsistenciaService {
    @Autowired
    private AsistenciaRepository asistenciaRepository;

    @Override
    public List<Asistencia> listar() {
        return asistenciaRepository.findAll();
    }

    @Override
    public Asistencia guardar(Asistencia asistencia) {
        return asistenciaRepository.save(asistencia);
    }

    @Override
    public Optional<Asistencia> buscarPorId(Integer id) {
        return asistenciaRepository.findById(id);
    }

    @Override
    public Asistencia actualizar(Asistencia categoria) {
        return asistenciaRepository.save(categoria);
    }

    @Override
    public void eliminar(Integer id) {
        asistenciaRepository.deleteById(id);
    }
}
