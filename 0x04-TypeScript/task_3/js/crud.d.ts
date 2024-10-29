 import { RowID, RowElement } from "../interface";

 export declare function insertRow(row: RowElement): RowID;
 export declare function deleteRow(rowID: RowID): void;
 export declare function updateRow(rowID: RowID, row: RowElement): void;
 export declare function selectRow(rowID: RowID): RowElement;

 