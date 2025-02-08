import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// ✅ Get all projects
export async function GET() {
  try {
    const projects = (await prisma.project.findMany()).sort(
      (a, b) => b.id - a.id
    );
    return NextResponse.json(
      { success: true, data: projects },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching projects", error },
      { status: 500 }
    );
  }
}

// ✅ Create a new project
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.title || !data.description || !data.language) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, description, and language are required",
        },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({ data });
    return NextResponse.json(
      { success: true, message: "Project created", data: project },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error creating project", error },
      { status: 500 }
    );
  }
}

// ✅ Update (Edit) an existing project
export async function PATCH(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Project ID is required" },
        { status: 400 }
      );
    }

    const project = await prisma.project.update({ where: { id }, data });

    return NextResponse.json(
      { success: true, message: "Project updated", data: project },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error updating project", error },
      { status: 500 }
    );
  }
}

// ✅ Delete a project
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Project ID is required" },
        { status: 400 }
      );
    }

    await prisma.project.delete({ where: { id } });

    return NextResponse.json(
      { success: true, message: "Project deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error deleting project", error },
      { status: 500 }
    );
  }
}
