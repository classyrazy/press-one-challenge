import axios from 'axios'
const BASE_URL = "https://api.jsonserve.com/"
const useAxios = () => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": 'application/json',
        "Accept": 'application/json',
      },
    })

    return axiosInstance
}
export default useAxios