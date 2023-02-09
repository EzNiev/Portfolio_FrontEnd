package com.portfolio.ezniev.Controller;

import com.portfolio.ezniev.Entity.Experiencia;
import com.portfolio.ezniev.Security.Controller.Mensaje;
import com.portfolio.ezniev.Security.Dto.dtoExperiencia;
import com.portfolio.ezniev.Service.SExperiencia;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("experiencia")
@CrossOrigin(origins = "http://localhost:4200")
public class CExperiencia {

    @Autowired
    SExperiencia sExperiencia;

    @GetMapping("/lista")
    public ResponseEntity<List<Experiencia>> list() {
        List<Experiencia> list = sExperiencia.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoExperiencia dtoexp) {
        if (StringUtils.isBlank(dtoexp.getTituloE())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sExperiencia.existByNombreE(dtoexp.getTituloE())) {
            return new ResponseEntity(new Mensaje("Esa experiencia existe"), HttpStatus.BAD_REQUEST);
        }

        Experiencia experiencia = new Experiencia(dtoexp.getTituloE(),
                dtoexp.getModalidadE(),
                dtoexp.getEmpresaE(),
                dtoexp.getPeriodoE(),
                dtoexp.getUbicacionE(),
                dtoexp.getDescripcionE());
        sExperiencia.save(experiencia);

        return new ResponseEntity(new Mensaje("Experiencia agregada correctamente."), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoExperiencia dtoexp) {
        //Validamos si existe el ID
        if (!sExperiencia.existById(id)) {
            return new ResponseEntity(new Mensaje("El ID no existe."), HttpStatus.BAD_REQUEST);
        }
        //Compara nombre de experiencia
        if (sExperiencia.existByNombreE(dtoexp.getTituloE()) && sExperiencia.getByNombreE(dtoexp.getTituloE()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Esa experiencia ya existe."), HttpStatus.BAD_REQUEST);
        }
        //No puede estar vacio
        if (StringUtils.isBlank(dtoexp.getTituloE())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio."), HttpStatus.BAD_REQUEST);
        }

        Experiencia experiencia = sExperiencia.getOne(id).get();
        experiencia.setTituloE(dtoexp.getTituloE());
        experiencia.setDescripcionE(dtoexp.getModalidadE());
        experiencia.setEmpresaE(dtoexp.getEmpresaE());
        experiencia.setPeriodoE(dtoexp.getPeriodoE());
        experiencia.setUbicacionE(dtoexp.getUbicacionE());
        experiencia.setDescripcionE(dtoexp.getDescripcionE());
        
        sExperiencia.save(experiencia);
        return new ResponseEntity(new Mensaje("Experiencia actualizada/editada."), HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity
}
