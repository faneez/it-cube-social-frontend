import axios from "axios"

const instance = axios.create({
	baseURL: "https://it-cube-social-backend-production.up.railway.app",
	// ,"https://7026-94-51-38-102.ngrok-free.app",
})

export default instance
