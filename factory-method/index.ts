import { Creator } from './base/creator.base';
import { ConcreteCreator1, ConcreteCreator2 } from './concretes/concretes';

/**
 * El código del cliente funciona con una instancia de un creador concreto, aunque a través de
 * su interfaz base. Mientras el cliente siga trabajando con el creador a través de
 * la interfaz base, puedes pasarle la subclase de cualquier creador.
 */

function clientCode(creator: Creator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
}

/**
 * La Aplicación elige el tipo de creador dependiendo de la configuración o
 * ambiente.
 */
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
