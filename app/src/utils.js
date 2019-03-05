import axios from 'axios'
const API_URL = 'http://localhost:8000'

export function getImages() {
  const url =  `${API_URL}/api/memes/`
  return axios
    .get(url)
    .then(response => response.data)
}

export function getEmojis() {
  const url =  `${API_URL}/api/emojis/`
  return axios
    .get(url)
    .then(response => response.data)
}