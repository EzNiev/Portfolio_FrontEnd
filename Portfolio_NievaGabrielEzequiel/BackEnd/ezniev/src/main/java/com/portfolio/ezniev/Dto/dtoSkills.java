package com.portfolio.ezniev.Dto;

import javax.validation.constraints.NotBlank;

public class dtoSkills {
    @NotBlank
    private String nombreS;
    @NotBlank
    private int porcentajeS;

    public dtoSkills() {
    }

    public dtoSkills(String nombreS, int porcentajeS) {
        this.nombreS = nombreS;
        this.porcentajeS = porcentajeS;
    }

    public String getNombreS() {
        return nombreS;
    }

    public void setNombreS(String nombreS) {
        this.nombreS = nombreS;
    }

    public int getPorcentajeS() {
        return porcentajeS;
    }

    public void setPorcentajeS(int porcentajeS) {
        this.porcentajeS = porcentajeS;
    }
    
    
    
}
