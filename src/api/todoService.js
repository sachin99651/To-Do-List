import axios from 'axios';

const Backend_URL = '/api/todo';

export const todoService = {
  getAll: () => axios.get(Backend_URL),
  create: (item) => axios.post(Backend_URL, { item }),
  update: (id, data) => axios.put(`${Backend_URL}/${id}`, data),
  delete: (id) => axios.delete(`${Backend_URL}/${id}`),
};