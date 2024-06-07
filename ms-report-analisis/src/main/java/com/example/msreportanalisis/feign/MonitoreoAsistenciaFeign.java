package com.example.msreportanalisis.feign;


import com.example.msreportanalisis.dto.RegistroAsistenciaDto;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-monitoreoasistencia-service", path = "/registro_asistencia")
public interface MonitoreoAsistenciaFeign {
    @GetMapping("/{id}")
    @CircuitBreaker(name = "clienteListarPorIdCB", fallbackMethod = "fallbackRegistroAsistencia")
    public ResponseEntity<RegistroAsistenciaDto> buscarPorId(@PathVariable(required = true) Integer id) ;
    default ResponseEntity<RegistroAsistenciaDto> fallbackRegistroAsistencia (Integer id, Exception e) {

        return ResponseEntity.ok(new RegistroAsistenciaDto());
    }
}
