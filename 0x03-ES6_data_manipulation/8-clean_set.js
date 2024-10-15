export default function cleanSet(set, startString) {
  if (string === undefined || string.length === 0) {
    return "";
  }

  return [...set]
    .filter((x) => (x !== undefined ? x.startsWith(startString) : ""))
    .map((x) => (x !== undefined ? x.slice(startString.length) : ""))
    .join("-");
}
