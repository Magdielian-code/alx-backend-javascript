export function taskFirst() {
  const task = "I preger const when i can";
  return task;
}

export function getLast() {
  return "is okay";
}

export function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}

