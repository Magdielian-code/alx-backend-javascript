export function insertROw(row) {
  console.log("insert row", row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log("delete row id", rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
