export class Proyectos {
    id?: number;
    tituloP: string;
    descripcionP: string;
    urlP: string;
    imgP: string;

    constructor(tituloP: string, descripcionP: string, urlP: string, imP: string){
        this.tituloP = tituloP,
        this.descripcionP = descripcionP,
        this.urlP = urlP,
        this.imgP = imP
    }

}
