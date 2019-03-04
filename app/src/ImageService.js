import axios from 'axios'
const API_URL = 'http://localhost:8000'

export default class ImageService {
  getImages() {
    const url =  `${API_URL}/api/memes/`
    return axios
      .get(url)
      .then(response => response.data)
  }
}