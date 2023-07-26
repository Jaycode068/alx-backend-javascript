export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      console.log('Success:', response);
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.error('Error:', error.message);
      throw new Error(); // Throw an empty Error object
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

