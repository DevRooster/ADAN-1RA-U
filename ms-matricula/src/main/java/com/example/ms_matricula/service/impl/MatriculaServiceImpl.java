package com.example.ms_matricula.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.ms_matricula.entity.Matricula;
import com.example.ms_matricula.repository.MatriculaRepository;
import com.example.ms_matricula.service.MatriculaService;

public class MatriculaServiceImpl  implements MatriculaService{
    @Autowired
    private MatriculaRepository matriculaRepository;

    @Override
    public List<Matricula> lista() {
        return matriculaRepository.findAll();
    }

    @Override
    public Matricula guardar(Matricula horario) {
        return matriculaRepository.save(horario);
    }

    @Override
    public Optional<Matricula> buscarPorId(Integer id) {
        return matriculaRepository.findById(id);
    }

    @Override
    public Matricula actualizar(Matricula horario) {
        return matriculaRepository.save(horario);
    }

    @Override
    public void eleminar(Integer id) {
        matriculaRepository.deleteById(id);

    }
}
