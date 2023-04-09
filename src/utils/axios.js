import axios from "axios"

const instance = axios.create({
	baseURL: "https://it-cube-social-backend-production.up.railway.app",
})

export default instance
