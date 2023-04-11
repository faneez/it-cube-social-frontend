import axios from "axios"

const instance = axios.create({
	baseURL: "https://7026-94-51-38-102.ngrok-free.app",
	// "https://it-cube-social-backend-production.up.railway.app",
})

export default instance
