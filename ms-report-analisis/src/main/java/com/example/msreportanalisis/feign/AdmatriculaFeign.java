package com.example.msreportanalisis.feign;


import com.example.msreportanalisis.dto.MatriculaDto;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-matricula-service", path = "/matricula")
public interface AdmatriculaFeign {
    @GetMapping("/{id}")
    @CircuitBreaker(name = "admatriculaPorIdCB", fallbackMethod = "fallbackAdmatricula")
    public ResponseEntity<MatriculaDto> productoBuscarPorId(@PathVariable(required = true) Integer id) ;
    default ResponseEntity<MatriculaDto> fallbackAdmatricula (Integer id, Exception e) {
        MatriculaDto productoDto = new MatriculaDto();
        productoDto.setId(900000);
        return ResponseEntity.ok(new MatriculaDto());
    }

}
