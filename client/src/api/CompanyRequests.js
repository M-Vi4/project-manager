import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUserCompanies = (id) =>
  API.get(`/company/${id}/getUserCompanies`);

export const createCompany = (formData) =>
  API.post("/company/createCompany", formData);

export const getCompanyByUsername = (username) =>
  API.get(`/company/${username}/getCompanyByUsername`);

export const getCompanyById = (id) => API.get(`/company/${id}/getCompany`);

export const getCompanyProjects = (username) =>
  API.get(`/company/${username}/getCompanyProjects`);

export const updateCompany = (id, formData) =>
  API.put(`/company/${id}/updateCompany`, formData);

export const addEmployee = (id, data) => {
  API.put(`/company/${id}/addEmployee`, data);
};
