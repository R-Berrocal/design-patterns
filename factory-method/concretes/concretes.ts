import { Creator } from '../base/creator.base';
import { Product } from '../interfaces/product.interface';

/**
 * Concrete Products proporciona varias implementaciones de la interfaz del Producto.
 */
export class ConcreteProduct1 implements Product {
  operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

export class ConcreteProduct2 implements Product {
  operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}

/**
 * Concrete Creators anula el método de fábrica para cambiar el
 * tipo de producto resultante.
 */
export class ConcreteCreator1 extends Creator {
  /**
   * Tenga en cuenta que la firma del método todavía utiliza el tipo de producto abstracto,
   * aunque el producto concreto realmente se devuelva del
   * método. De esta manera el Creador puede permanecer independiente de clases de productos concretas.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
