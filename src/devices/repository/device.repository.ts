import axios from "axios"
import { DeviceBrand } from "../model/DeviceBrand";

const BASE_API_URL = "http://localhost:8080/"

export const getDeviceTypes = async (): Promise<string[]> => {
    try {
        const response = await axios.get<string[]>(BASE_API_URL + "devices/types/all")

        return response.data
    } catch (error) {
        console.error('Error getDeviceTypes', error);
        return []
    }
}

export const getDeviceBrands = async (deviceType: string): Promise<DeviceBrand[]> => {
    try {
        const url = BASE_API_URL + "devices/brands/get"
        const body = { type: deviceType }
        const response = await axios.post(url, body);

        return response.data.brands as DeviceBrand[]
    } catch (error) {
        console.error('Error getDeviceBrands', error);
        return []
    }
}