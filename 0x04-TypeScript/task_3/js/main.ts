import { RowID, RowElement } from "../interface";
import * as crud from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = crud.insertRow(row);

const updateRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

crud.updateRow(newRowID, updateRow);
crud.deleteRow(newRowID);
 
interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  public constructor(protected readonly radius: number) {}

  public getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
