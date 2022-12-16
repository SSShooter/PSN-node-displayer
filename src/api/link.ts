import axios from 'axios'
const link = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_URL as string,
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
