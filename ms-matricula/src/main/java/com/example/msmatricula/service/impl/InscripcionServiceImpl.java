package com.example.msmatricula.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.msmatricula.entity.Inscripcion;
import com.example.msmatricula.repository.InscripcionRepository;
import com.example.msmatricula.service.InscripcionService;

import java.util.List;
import java.util.Optional;

@Service
public class InscripcionServiceImpl implements InscripcionService {
    @Autowired
    private InscripcionRepository inscripcionRepository;

    @Override
    public List<Inscripcion> listar() {
        return inscripcionRepository.findAll();
    }

    @Override
    public Inscripcion guardar(Inscripcion inscripcion) {
        return inscripcionRepository.save(inscripcion);
    }

    @Override
    public Optional<Inscripcion> buscarPorId(Integer id) {
        return inscripcionRepository.findById(id);
    }

    @Override
    public Inscripcion actualizar(Inscripcion inscripcion) {
        return inscripcionRepository.save(inscripcion);
    }

    @Override
    public void eliminar(Integer id) {
        inscripcionRepository.deleteById(id);
    }
}
