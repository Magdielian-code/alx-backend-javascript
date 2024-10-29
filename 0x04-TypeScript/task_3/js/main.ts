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
