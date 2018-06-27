export abstract class ToyFactoryBase {
  constructor() {
    //
  }

  protected applyBehaviours(derived: any, baseClass: any) {
    Object.getOwnPropertyNames(baseClass.__proto__).forEach(name => {
      if (name !== "constructor") {
        derived.__proto__[name] = baseClass.__proto__[name];
      }
    });
  }
}
