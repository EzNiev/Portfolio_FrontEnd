export class Educacion {
    id?: number;
    tituloEd: string;
    subtituloEd: string;
    periodoEd: string;
    descripcionEd: string;
    imgEd: string;

    constructor(tituloEd: string, subtituloEd: string, periodoEd: string, descripcionEd: string, imgEd: string) {
        this.tituloEd = tituloEd;
        this.subtituloEd = subtituloEd;
        this.periodoEd = periodoEd;
        this.descripcionEd = descripcionEd;
        this.imgEd = imgEd;
    }
}
