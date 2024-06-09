package com.example.msestudiante.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.msestudiante.entity.Estudiante;
import com.example.msestudiante.repository.EstudianteRepository;
import com.example.msestudiante.service.EstudianteService;

import java.util.List;
import java.util.Optional;

@Service
public class EstudianteServiceImpl implements EstudianteService {
    @Autowired
    private EstudianteRepository estudianteRepository;

    @Override
    public List<Estudiante> listar() {
        return estudianteRepository.findAll();
    }

    @Override
    public Estudiante guardar(Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }

    @Override
    public Optional<Estudiante> buscarPorId(Integer id) {
        return estudianteRepository.findById(id);
    }

    @Override
    public Estudiante actualizar(Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }

    @Override
    public void eliminar(Integer id) {
        estudianteRepository.deleteById(id);
    }
}
