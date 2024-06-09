package com.example.msdocente.service;

import java.util.List;
import java.util.Optional;
import com.example.msdocente.entity.Docente;

public interface DocenteService {

    public List<Docente> listar();

    public Docente guardar(Docente docente);

    public Optional<Docente> buscarPorId(Integer id);

    public Docente actualizar(Docente docente);

    public void eliminar(Integer id);
}