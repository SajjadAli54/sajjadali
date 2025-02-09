// import { Project } from "@prisma/client";

import { projects } from "@data/projects";

import { Project } from "@types";

// import axios from "axios";

// const url = "/api/projects";

export const fetchProjects = async () => {
  // try {
  //   const response = await axios.get(url);
  //   if (!response!.data!.data) return [];
  //   return response.data.data;
  // } catch (error) {
  //   console.error("Error fetching projects:", error);
  //   return [];
  // }

  return projects;
};

export const fetchProjectById = async (id: string) => {
  // try {
  //   const response = await axios.get(`${url}/${id}`);
  //   return response.data.data;
  // } catch (error) {
  //   console.error("Error fetching project:", error);
  //   return null;
  // }
  return projects.find((project) => project.id === id);
};

export const createProject = async (project: Project): Promise<boolean> => {
  console.log("New project data:", project);
  // try {
  //   await axios.post(url, project);
  //   return true;
  // } catch (error) {
  //   console.error("Error creating project:", error);
  //   return false;
  // }

  return true;
};

export const updateProject = async (id: string, updatedProject: object) => {
  console.log("Updated project data:", id, updatedProject);
  // try {
  //   await axios.put(`/api/projects/${id}`, updatedProject);
  //   return true;
  // } catch (error) {
  //   console.error("Error updating project:", error);
  //   return false;
  // }

  return true;
};

export const deleteProjectById = async (id: string) => {
  console.log("Deleting project:", id);
  // try {
  //   await axios.delete(url, { data: { id } });
  // } catch (error) {
  //   console.error("Error deleting project:", error);
  // }
  return true;
};
