export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from API');
    return { status: 200, body: 'success' };
  }).catch(() => new Error());
}
