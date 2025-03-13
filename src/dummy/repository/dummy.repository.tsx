import axios from "axios";
import { DummyComment, DummyPost } from "../model/DummyData";

const API_URL = process.env.REACT_APP_BASE_API_URL

export const getDummyPostData = async (): Promise<DummyPost[]> => {
    try {
        const url = API_URL + "posts"
        const response = await axios.get<DummyPost[]>(url);

        return Array.isArray(response.data) ? response.data : []
    } catch (error) {
        return []
    }
}

export const getDummyCommentData = async (): Promise<DummyComment[]> => {
    try {
        const url = (API_URL ?? "") + "comments"
        const response = await axios.get<DummyComment[]>(url);

        return Array.isArray(response.data) ? response.data : []
    } catch (error) {
        return []
    }
}

export const searchDummyPostData = async (query: string): Promise<DummyPost[]> => {
    try {
        const url = (API_URL ?? "") + "posts/1/?title=" + query
        const response = await axios.get<DummyPost[]>(url);

        return Array.isArray(response.data) ? response.data : [response.data]
    } catch (error) {
        return []
    }
}

export const searchDummyCommentData = async (query: string): Promise<DummyComment[]> => {
    try {
        const url = (API_URL ?? "") + "comments/1/?name=" + query
        const response = await axios.get<DummyComment[]>(url);

        return Array.isArray(response.data) ? response.data : [response.data]
    } catch (error) {
        return []
    }
}