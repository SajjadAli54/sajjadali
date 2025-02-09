// import { Project } from "@prisma/client";

import { Project } from "@types";

import axios from "axios";

const url = "/api/projects";

export const addAllProjects = async () => {
  axios.put(url);
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchProjectById = async (id: number) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

export const createProject = async (project: Project): Promise<boolean> => {
  try {
    await axios.post(url, project);
    return true;
  } catch (error) {
    console.error("Error creating project:", error);
    return false;
  }
};

export const updateProject = async (id: string, updatedProject: object) => {
  console.log("Updated project data:", id, updatedProject);
  try {
    await axios.put(`/api/projects/${id}`, updatedProject);
    return true;
  } catch (error) {
    console.error("Error updating project:", error);
    return false;
  }
};

export const deleteProjectById = async (id: number) => {
  try {
    await axios.delete(url, { data: { id } });
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};
