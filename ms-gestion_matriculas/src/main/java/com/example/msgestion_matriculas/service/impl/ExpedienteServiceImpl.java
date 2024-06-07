package com.example.msgestion_matriculas.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.msgestion_matriculas.entity.Expediente;
import com.example.msgestion_matriculas.repository.ExpedienteRepository;
import com.example.msgestion_matriculas.service.ExpedienteService;

import java.util.List;
import java.util.Optional;

@Service
public class ExpedienteServiceImpl implements ExpedienteService {
    @Autowired
    private ExpedienteRepository expedienteRepository;

    @Override
    public List<Expediente> listar() {
        return expedienteRepository.findAll();
    }

    @Override
    public Expediente guardar(Expediente expediente) {
        return expedienteRepository.save(expediente);
    }

    @Override
    public Optional<Expediente> buscarPorId(Integer id) {
        return expedienteRepository.findById(id);
    }

    @Override
    public Expediente actualizar(Expediente expediente) {
        return expedienteRepository.save(expediente);
    }

    @Override
    public void eliminar(Integer id) {
        expedienteRepository.deleteById(id);
    }
}
