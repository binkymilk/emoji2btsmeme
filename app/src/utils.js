import axios from 'axios'
const API_URL = 'http://localhost:9000'

export function getAllImages() {
  const url =  `${API_URL}/api/memes/`
  return axios
    .get(url)
    .then(response => response.data)
}

export function getImages(emojiName) {
  const url =  `${API_URL}/api/memes/${emojiName}/`
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
