package com.example.msgestion_estudiantes.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.msgestion_estudiantes.entity.Historial_Académico;
import com.example.msgestion_estudiantes.repository.Historial_AcadémicoRepository;
import com.example.msgestion_estudiantes.service.Historial_AcadémicoService;

import java.util.List;
import java.util.Optional;

@Service
public class Historial_AcadémicoServiceImpl implements Historial_AcadémicoService {
    @Autowired
    private Historial_AcadémicoRepository historialacademicoRepository;

    @Override
    public List<Historial_Académico> lista() {
        return historialacademicoRepository.findAll();
    }

    @Override
    public Historial_Académico guardar(Historial_Académico historial_académico) {
        return historialacademicoRepository.save(historial_académico);
    }

    @Override
    public Optional<Historial_Académico> buscarPorId(Integer id) {
        return historialacademicoRepository.findById(id);
    }

    @Override
    public Historial_Académico actualizar(Historial_Académico historial_académico) {
        return historialacademicoRepository.save(historial_académico);
    }

    @Override
    public void eleminar(Integer id) {
        historialacademicoRepository.deleteById(id);

    }
}
