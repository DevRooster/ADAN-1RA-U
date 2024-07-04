package com.example.msmatricula.service.impl;

import com.example.msmatricula.entity.Matricula;
import com.example.msmatricula.repository.MatriculaRepository;
import com.example.msmatricula.service.MatriculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MatriculaServiceImpl implements MatriculaService {
    @Autowired
    private MatriculaRepository matriculaRepository;


    @Override
    public List<Matricula> lista() {
        return matriculaRepository.findAll();
    }

    @Override
    public Matricula guardar(Matricula matricula) {

        return matriculaRepository.save(matricula);
    }

    @Override
    public Optional<Matricula> buscarPorId(Integer id) {
        return matriculaRepository.findById(id);
    }
    @Override
    public Matricula actualizar(Matricula matricula) {
        return matriculaRepository.save(matricula);
    }

    @Override
    public void eleminar(Integer id) {
        matriculaRepository.deleteById(id);

    }
}
