import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

interface Params {
  params: Promise<{ id: string }>;
}
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const projectId = parseInt(id);
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching project", error },
      { status: 500 }
    );
  }
}

// Update project by ID
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const projectId = parseInt(id);
    const body = await request.json();

    const { title, description, language, topics, clone_url, live, image } =
      body;

    // Update project with the provided details
    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: {
        title,
        description,
        language,
        topics,
        clone_url,
        live,
        image,
      },
    });

    return NextResponse.json(
      { success: true, data: updatedProject },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error updating project", error },
      { status: 500 }
    );
  }
}
