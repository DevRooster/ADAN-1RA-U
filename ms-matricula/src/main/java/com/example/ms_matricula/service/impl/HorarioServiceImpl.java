package com.example.ms_matricula.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ms_matricula.entity.Horario;
import com.example.ms_matricula.repository.HorarioRepository;
import com.example.ms_matricula.service.HorarioService;


@Service
public class HorarioServiceImpl implements HorarioService{
    @Autowired
    private HorarioRepository horarioRepository;

    @Override
    public List<Horario> lista() {
        return horarioRepository.findAll();
    }

    @Override
    public Horario guardar(Horario horario) {
        return horarioRepository.save(horario);
    }

    @Override
    public Optional<Horario> buscarPorId(Integer id) {
        return horarioRepository.findById(id);
    }

    @Override
    public Horario actualizar(Horario horario) {
        return horarioRepository.save(horario);
    }

    @Override
    public void eleminar(Integer id) {
        horarioRepository.deleteById(id);

    }
}
