import axios from 'axios';
import { API_KEY, BASE_URL } from './js/constants';
import { try1 } from './js/api';
import App from './components/App/App';
// console.log(try1.getData(BASE_URL, API_KEY));

(async () => {
  const date = await try1.getData(BASE_URL, API_KEY);
  console.log(date);
  App.render(date);
})();
