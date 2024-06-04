export default function cleanSet(set, startString) {
  const array = [...set];

  return array.filter((string) => string.startsWith(startString))
    .map((string) => string.slice(startString.length))
    .join('-');
}
