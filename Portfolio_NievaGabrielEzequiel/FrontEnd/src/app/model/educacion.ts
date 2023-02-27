export class Educacion {
    id?: number;
    tituloEd: string;
    subtituloEd: string;
    periodoEd: string;
    descripcionEd: string;

    constructor(tituloEd: string, subtituloEd: string, periodoEd: string, descripcionEd: string) {
        this.tituloEd = tituloEd;
        this.subtituloEd = subtituloEd;
        this.periodoEd = periodoEd;
        this.descripcionEd = descripcionEd;
    }
}
