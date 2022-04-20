const fetchData = {
  getData() {
    return fetch('https://restcountries.com/v3.1/all')
    .then(response => {
      if (!response.ok) {
        throw new Error('error')
      } else {
        return response.json()
      }
    })
  }
}

export default fetchData;
