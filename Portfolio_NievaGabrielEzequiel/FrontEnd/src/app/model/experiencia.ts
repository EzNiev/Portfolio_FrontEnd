export class Experiencia {
    id?: number;
    tituloE: string;
    modalidadE: string;
    empresaE: string;
    periodoE: string;
    ubicacionE: string;
    descripcionE: string;

    constructor(tituloE: string, modalidadE: string, empresaE: string, periodoE: string, ubicacionE: string, descripcionE: string) {
        this.tituloE = tituloE;
        this.modalidadE = modalidadE;
        this.empresaE = empresaE;
        this.periodoE = periodoE;
        this.ubicacionE = ubicacionE;
        this.descripcionE = descripcionE;
    }
}
