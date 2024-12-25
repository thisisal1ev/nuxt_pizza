import type { CartDTO } from './dto/cart.dto'
import { axiosInstance } from './instance'

export const getCart = async (): Promise<CartDTO> => {
	return (await axiosInstance.get<CartDTO[]>('/cart')).data[0]
}

export const updateItemQuantity = async (id: number, quantity: number): Promise<CartDTO> => {
	return (await axiosInstance.patch<CartDTO>(`/cart/${id}`, { quantity })).data
}

export const removeCartItem = async (id: number): Promise<CartDTO> => {
	return (await axiosInstance.delete<CartDTO>(`/cart/${id}`)).data
}