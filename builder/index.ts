/**
 * La interfaz builder especifica metodos para crear las diferentes partes
 * los objetos products.
 */
interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

/**
 * Las clases de Concrete Builder siguen la interfaz de Builder y proporcionan
 * implementaciones específicas de los pasos de construcción. Su programa puede tener varios
 * variaciones de Builders, implementadas de manera diferente
 */

class ConcreteBuilder1 implements Builder {
  private product!: Product1;

  /**
   * Una nueva instancia de constructor debe contener un objeto de producto en blanco, que es
   * utilizado en el montaje posterior.
   */
  public constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  /**
   * Todos los pasos de producción funcionan con la misma instancia de producto.
   */
  public producePartA(): void {
    this.product.parts.push('PartA1');
  }

  public producePartB(): void {
    this.product.parts.push('PartB1');
  }

  public producePartC(): void {
    this.product.parts.push('PartC1');
  }

  /**
   * Los Builders concretos deben proporcionar sus propios métodos para
   * obtener resultados. Esto se debe a que varios tipos de builders pueden crear
   * productos completamente diferentes que no siguen la misma interfaz.
   * Por lo tanto, esos métodos no pueden declararse en la interfaz base Builder
   * (al menos en un lenguaje de programación de tipo estático).
   *
   * Por lo general, después de devolver el resultado final al cliente,
   * se espera que una instancia del builder esté lista para comenzar a producir
   * otro producto. Por eso, es una práctica habitual llamar al método reset
   * al final del cuerpo del método getProduct. Sin embargo, este comportamiento
   * no es obligatorio y puedes hacer que tus builders esperen una llamada de reset
   * explícita desde el código del cliente antes de desechar el resultado anterior.
   */
  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

/**
 * Tiene sentido utilizar el patrón Builder solo cuando tus productos son bastante
 * complejos y requieren una configuración extensa.
 *
 * A diferencia de otros patrones de creación, diferentes builders concretos pueden
 * producir productos no relacionados. En otras palabras, los resultados de varios
 * builders pueden no seguir siempre la misma interfaz.
 */

class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}
/**
 * El Director solo es responsable de ejecutar los pasos de construcción
 * en una secuencia particular. Es útil cuando se producen productos según
 * un orden o configuración específicos. Estrictamente hablando, la clase Director
 * es opcional, ya que el cliente puede controlar los builders directamente.
 */
class Director {
  private builder!: Builder;

  /**
   * El Director funciona con cualquier instancia de builder que el código
   * del cliente le pase. De esta manera, el código del cliente puede alterar
   * el tipo final del producto recién ensamblado.
   */
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  /**
   * El Director puede construir varias variaciones de productos utilizando
   * los mismos pasos de construcción.
   */

  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

/**
 * El código del cliente crea un objeto builder, lo pasa al director
 * y luego inicia el proceso de construcción. El resultado final se obtiene
 * del objeto builder.
 */

function clientCode(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  // Recuerda, el patrón Builder puede ser utilizado sin una clase Director.
  console.log('Custom product:');
  builder.producePartA();
  builder.producePartB();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
