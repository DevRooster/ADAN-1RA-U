package com.example.msdocente.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.msdocente.entity.Docente;
import com.example.msdocente.repository.DocenteRepository;
import com.example.msdocente.service.DocenteService;
import java.util.List;
import java.util.Optional;

@Service
public class DocenteServiceImpl implements DocenteService {
    @Autowired
    private DocenteRepository docenteRepository;

    @Override
    public List<Docente> listar() {
        return docenteRepository.findAll();
    }

    @Override
    public Docente guardar(Docente docente) {
        return docenteRepository.save(docente);
    }

    @Override
    public Optional<Docente> buscarPorId(Integer id) {
        return docenteRepository.findById(id);
    }

    @Override
    public Docente actualizar(Docente docente) {
        return docenteRepository.save(docente);
    }

    @Override
    public void eliminar(Integer id) {
        docenteRepository.deleteById(id);
    }
}
