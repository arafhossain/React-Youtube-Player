import axios from 'axios';

let KEY = 'AIzaSyBgKKkR0pqxVCJs2WL0dRsIKyQdUhGxtOQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});