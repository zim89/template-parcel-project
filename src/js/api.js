import axios from 'axios';

class FetchApi {
  async getData(BASE_URL, API_KEY) {
    try {
      const fetch = await axios.get(BASE_URL, {
        params: { apikey: API_KEY, limit: '100' },
      });
      return fetch.data.data.results;
    } catch (error) {
      console.log(error.message);
      return false;
    } finally {
    }
  }
}

export const try1 = new FetchApi();
