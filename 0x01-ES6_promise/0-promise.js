export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const state = true;
    if (state) {
      resolve('success');
    } else {
      reject(Error('Failed'));
    }
  });
}
