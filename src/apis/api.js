import axios from "../config/axios";
import {CONSULTATION, COURSE_API, COURSE_CATEGORY_API} from "../constants/api";

export const getCourses = async (pageNumber = 1) => {
    const response = await axios.get(COURSE_API + `?page=${pageNumber}`)
    return response.data
}

export const getCourseCategory = async (id) => {
    const response = await axios.get(COURSE_CATEGORY_API)
    return response.data
}

export const createConsultationForm = async (data) => {
    const response = await axios.post(CONSULTATION, data)
    return response.data
}

export const getCourseDetail = async (slug) => {
    const response = await axios.get(COURSE_API + `${slug}`)
    return response.data
}

export const loginApi = async (data) => {
    const response = await axios.post('/login', data)
    return response.data
}