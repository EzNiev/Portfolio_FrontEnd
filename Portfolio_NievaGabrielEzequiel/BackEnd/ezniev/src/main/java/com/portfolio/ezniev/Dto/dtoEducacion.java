package com.portfolio.ezniev.Dto;

import javax.validation.constraints.NotBlank;

public class dtoEducacion {
    @NotBlank
    private String tituloEd;
    @NotBlank
    private String subtituloEd;
    @NotBlank
    private String periodoEd;
    @NotBlank
    private String descripcionEd;

    public dtoEducacion() {
    }

    public dtoEducacion(String tituloEd, String subtituloEd, String periodoEd, String descripcionEd) {
        this.tituloEd = tituloEd;
        this.subtituloEd = subtituloEd;
        this.periodoEd = periodoEd;
        this.descripcionEd = descripcionEd;
    }

    public String getTituloEd() {
        return tituloEd;
    }

    public void setTituloEd(String tituloEd) {
        this.tituloEd = tituloEd;
    }

    public String getSubtituloEd() {
        return subtituloEd;
    }

    public void setSubtituloEd(String subtituloEd) {
        this.subtituloEd = subtituloEd;
    }

    public String getPeriodoEd() {
        return periodoEd;
    }

    public void setPeriodoEd(String periodoEd) {
        this.periodoEd = periodoEd;
    }

    public String getDescripcionEd() {
        return descripcionEd;
    }

    public void setDescripcionEd(String descripcionEd) {
        this.descripcionEd = descripcionEd;
    }
    
    
}
