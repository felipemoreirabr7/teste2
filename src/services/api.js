import axios from "axios"

const api = axios.create({
    baseURL: "http://3.83.110.70:8000"
})

export default api;