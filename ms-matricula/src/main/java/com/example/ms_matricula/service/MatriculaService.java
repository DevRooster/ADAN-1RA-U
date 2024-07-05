package com.example.ms_matricula.service;

import java.util.List;
import java.util.Optional;


import com.example.ms_matricula.entity.Matricula;


public interface MatriculaService {
    public List<Matricula> listar();

    public Matricula guardar(Matricula matricula);

    public Optional<Matricula> buscarPorId(Integer id);

    public Matricula actualizar(Matricula matricula);

    public void eliminar(Integer id);
}
