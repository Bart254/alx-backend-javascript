export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, value] of array.entries()) {
    array[idx] = value + appendString;
  }
  return array;
}
