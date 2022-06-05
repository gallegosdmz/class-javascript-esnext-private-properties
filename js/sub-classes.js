export class Persona {

    //Propiedad Estatica
    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola a todos son un método estatico');
    }

    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    constructor (nombre, codigo, frase) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
 
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);        
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona {
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Eduardo', 'Anuel AA', 'Real hasta la muerte');

console.log(spiderman);