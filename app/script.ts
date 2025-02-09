import { projects } from "@data/projects";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addIfNotExists = async () => {
  const existingProjects = await prisma.project.findMany({});
  if (existingProjects.length === projects.length) return;
  for (const project of projects) {
    const data = project;
    await prisma.project.create({ data });
  }
};
