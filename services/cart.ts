import { axiosInstance } from './instance'
import type { CartDTD } from './dto/cart.dto'

export const fetchCart = async (): Promise<CartDTD> => {
	return (await axiosInstance.get<CartDTD>('/cart')).data
}