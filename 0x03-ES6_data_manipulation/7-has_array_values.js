export default function hasValuesFromArray(set, array) {
    let present = true;
    array.map((x) => {
        if (!set.has(x)) {
            present = false;
        }
    })

    return present;
}
