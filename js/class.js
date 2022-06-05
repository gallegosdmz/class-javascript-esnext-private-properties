class Persona {

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

const spiderman = new Persona('Eduardo', 'Anuel AA', 'Real hasta la muerte');

console.log(spiderman);

spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'Taquitos al pastor';

/* console.log(spiderman.getComidaFavorita); */

console.log('Conteo stático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();