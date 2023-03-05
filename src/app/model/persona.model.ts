export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    profesion: string;
    descripcion: string;
    rutacv: string;

    

    constructor(nombre: string, apellido: string, img: string, profesion: string, descripcion: string, rutacv: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.profesion = profesion;
        this.descripcion = descripcion;
        this.rutacv = rutacv;
    }
}