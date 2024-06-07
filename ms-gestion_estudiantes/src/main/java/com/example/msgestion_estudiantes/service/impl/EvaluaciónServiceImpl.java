package com.example.msgestion_estudiantes.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.msgestion_estudiantes.entity.Evaluación;
import com.example.msgestion_estudiantes.repository.EvaluaciónRepository;
import com.example.msgestion_estudiantes.service.EvaluaciónService;

import java.util.List;
import java.util.Optional;

@Service
public class EvaluaciónServiceImpl implements EvaluaciónService {
    @Autowired
    private EvaluaciónRepository evaluaciónRepository;

    @Override
    public List<Evaluación> lista() {
        return evaluaciónRepository.findAll();
    }

    @Override
    public Evaluación guardar(Evaluación evaluación) {
        return evaluaciónRepository.save(evaluación);
    }

    @Override
    public Optional<Evaluación> buscarPorId(Integer id) {
        return evaluaciónRepository.findById(id);
    }

    @Override
    public Evaluación actualizar(Evaluación evaluación) {
        return evaluaciónRepository.save(evaluación);
    }

    @Override
    public void eleminar(Integer id) {
        evaluaciónRepository.deleteById(id);

    }
}
