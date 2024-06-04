const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 0);
  }
  const total = weakMap.get(endpoint) + 1;
  if (total >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, total);
}

export { weakMap, queryAPI };
