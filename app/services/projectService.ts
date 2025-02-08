import { Project } from "@prisma/client";

import axios from "axios";

const url = "/api/projects";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
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

export const deleteProjectById = async (id: number) => {
  try {
    await axios.delete(url, { data: { id } });
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};
