export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-unused-vars */
    const task = true;
    const task2 = false;
    /* eslint-enable no-unused-vars */
  }

  return [task, task2];
}
