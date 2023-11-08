import { Product } from '../interfaces/product.interface';
/**
 * La clase Creator declara el método de fábrica que se supone que devuelve un
 * objeto de una clase de Producto. Las subclases del Creador normalmente proporcionan la
 * implementación de este método.
 */
export abstract class Creator {
  /**
   * Tenga en cuenta que el Creador también puede proporcionar alguna implementación predeterminada del
   * método de fábrica.
   */
  public abstract factoryMethod(): Product;

  /**
   * También tenga en cuenta que, a pesar de su nombre, la responsabilidad principal del Creador es
   *no crear productos. Por lo general, contiene alguna lógica empresarial central que
   * se basa en objetos Producto, devueltos por el método de fábrica. Las subclases pueden
   * cambiar indirectamente esa lógica empresarial anulando el método de fábrica
   * y devolver un tipo de producto diferente al mismo.
   */
  public someOperation(): string {
    // Llame al método de fábrica para crear un objeto Producto.
    const product = this.factoryMethod();

    // Ahora usa el producto
    return `Creator: the same creator's code has just worked with ${product.operation()}`;
  }
}
