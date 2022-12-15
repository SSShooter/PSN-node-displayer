import axios from 'axios'
const link = axios.create({
  // baseURL: 'http://localhost:2333',
  baseURL: 'https://ps-trophy.onrender.com/',
})
link.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default link
