import axios from "axios";

export const fetchProjects = async () => {
  try {
    const response = await axios.get("/api/projects");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const deleteProjectById = async (id: number) => {
  try {
    await axios.delete(`/api/projects/`, { data: { id } });
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};
