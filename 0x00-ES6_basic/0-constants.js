// Use const to instantiate variables in taskFirst
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// getLast function remains unchanged

// Use let to instantiate variables in taskNext
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

export function getLast() {
  return ' is okay';
}
