/**
 * ToyFactoryBase is the base class that is shared among ToyFactories.
 *
 * @export
 * @abstract
 * @class ToyFactoryBase
 */
export abstract class ToyFactoryBase {
  constructor() {
    //
  }

  /**
   * applyBehaviours copies the methods of a baseClass to the derivedClass
   *
   * @protected
   * @param {*} derivedClass
   * @param {*} baseClass
   * @memberof ToyFactoryBase
   */
  protected applyBehaviours(derivedClass: any, baseClasses: any[]) {
    baseClasses.forEach(baseClass => {
      Object.getOwnPropertyNames(baseClass.__proto__).forEach(name => {
        if (name !== "constructor") {
          derivedClass.__proto__[name] = baseClass.__proto__[name];
        }
      });
    });
  }
}
