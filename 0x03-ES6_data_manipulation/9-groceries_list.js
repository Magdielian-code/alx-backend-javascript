export default function groceriesList(name, quantity) {
    const obj = {
        Apples: 10,
        Tomatoes: 10,
        Pasta: 1,
        Rice: 1,
        Bananas: 5,
    }
    const finalMap = new Map(Object.entries(obj));
    return finalMap;
}