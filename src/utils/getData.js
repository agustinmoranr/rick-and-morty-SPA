const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  const ApiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(ApiURL);
    const data = await response.json()
    return data
  }
  catch (error) {
    console.error('[getData ERROR]: ', error)
  }
}

export default getData;