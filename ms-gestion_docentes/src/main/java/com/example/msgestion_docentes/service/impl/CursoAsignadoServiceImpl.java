package com.example.msgestion_docentes.service.impl;


import com.example.msgestion_docentes.entity.CursoAsignado;
import com.example.msgestion_docentes.repository.CursoAsignadoRepository;
import com.example.msgestion_docentes.service.CursoAsignadoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CursoAsignadoServiceImpl implements CursoAsignadoService {
    @Autowired
    private CursoAsignadoRepository cursoAsignadoRepository;

    @Override
    public List<CursoAsignado> lista() {
        return cursoAsignadoRepository.findAll();
    }

    @Override
    public CursoAsignado guardar(CursoAsignado cursoAsignado) {
        return cursoAsignadoRepository.save(cursoAsignado);
    }

    @Override
    public Optional<CursoAsignado> buscarPorId(Integer id) {
        return cursoAsignadoRepository.findById(id);
    }

    @Override
    public CursoAsignado actualizar(CursoAsignado cursoAsignado) {
        return cursoAsignadoRepository.save(cursoAsignado);
    }

    @Override
    public void eleminar(Integer id) {
        cursoAsignadoRepository.deleteById(id);

    }
}
