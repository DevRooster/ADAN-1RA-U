package com.example.msestudiante.service;

import java.util.List;
import java.util.Optional;

import com.example.msestudiante.entity.Perfil_Educativa;

public interface Perfil_EducativaService {

    public List<Perfil_Educativa> listar();

    public Perfil_Educativa guardar(Perfil_Educativa perfilEducativa);

    public Optional<Perfil_Educativa> buscarPorId(Integer id);

    public Perfil_Educativa actualizar(Perfil_Educativa perfilEducativa);

    public void eliminar(Integer id);
}
