import { API_BASE_URL } from "../constants/appConstants";
import apiHandler from "../helper/apiHandler";

export const signup = async (data) => {
    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    try {
        const response = await apiHandler.post(`${API_BASE_URL}/register`, data, options);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const login = async (data) => {
    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    try {
        const response = await apiHandler.post(`${API_BASE_URL}/login`, data, options);
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
