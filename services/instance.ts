import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: process.env.NUXT_PUBLIC_API_URL
})