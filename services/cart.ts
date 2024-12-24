import type { CartDTO } from './dto/cart.dto'
import { axiosInstance } from './instance'

export const getCart = async (): Promise<CartDTO> => {
	const fetchedData = await axiosInstance.get<CartDTO[]>('/cart')

	return fetchedData.data[0]
}

export const updateItemQuantity = async (id: number, quantity: number): Promise<CartDTO> => {
	const { data } = await axiosInstance.patch<CartDTO>('/cart/' + id, { quantity })

	return data
}

export const removeCartItem = async (id: number): Promise<CartDTO> => {
	const { data } = await axiosInstance.delete<CartDTO>('/cart/' + id)

	return data
}