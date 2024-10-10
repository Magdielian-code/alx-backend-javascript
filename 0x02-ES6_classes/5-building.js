export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error("Class BUilding cannot be instantiated directly ");
    }
    if (typeof sqft !== "number") {
      throw TypeError("sqft must be a number");
    }
    this._sqft = sqft;
  }
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMethod() {
    throw new Error(
      "Class extending Building must override evacuationWarningMessage"
    );
  }
}
