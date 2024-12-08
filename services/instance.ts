import axios from 'axios'
import { env } from 'process'

export const axiosInstance = axios.create({
	baseURL: env.NUXT_PUBLIC_API_URL
})