package com.example.msestudiante.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.msestudiante.entity.Perfil_Educativa;
import com.example.msestudiante.repository.Perfil_EducativaRepository;
import com.example.msestudiante.service.Perfil_EducativaService;

import java.util.List;
import java.util.Optional;

@Service
public class Perfil_EducativaServiceImpl implements Perfil_EducativaService {
    @Autowired
    private Perfil_EducativaRepository perfilEducativaRepository;

    @Override
    public List<Perfil_Educativa> listar() {
        return perfilEducativaRepository.findAll();
    }

    @Override
    public Perfil_Educativa guardar(Perfil_Educativa perfilEducativa) {
        return perfilEducativaRepository.save(perfilEducativa);
    }

    @Override
    public Optional<Perfil_Educativa> buscarPorId(Integer id) {
        return perfilEducativaRepository.findById(id);
    }

    @Override
    public Perfil_Educativa actualizar(Perfil_Educativa perfilEducativa) {
        return perfilEducativaRepository.save(perfilEducativa);
    }

    @Override
    public void eliminar(Integer id) {
        perfilEducativaRepository.deleteById(id);
    }
}
