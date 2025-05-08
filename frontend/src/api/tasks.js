import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getTasks = () => axios.get(`${BASE_URL}/tasks`);
export const createTask = (task) => axios.post(`${BASE_URL}/tasks`, task);
export const updateTask = (id, task) => axios.put(`${BASE_URL}/tasks/${id}`, task);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/tasks/${id}`);
