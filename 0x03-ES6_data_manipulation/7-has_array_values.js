export default function hasValuesFromArray(set, array) {
  for (const data of array) {
    if (!set.has(data)) {
      return false;
    }
  }
  return true;
}
