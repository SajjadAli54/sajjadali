import _ from "lodash";

import bcrypt from "bcryptjs";

const hashPassword = async (data: string) => {
  const saltRounds = 10; // Higher rounds = more secure, but slower
  const hashedData = await bcrypt.hash(data, saltRounds);
  return hashedData;
};

export function calculateExperience(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // If no end date, use the current date
  const diffInMs = end.getTime() - start.getTime();
  const diffInMonths = Math.ceil(diffInMs / (1000 * 60 * 60 * 24 * 30)); // Approximate months
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}${
      months > 0 ? ` and ${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  } else {
    return `${months} month${months > 1 ? "s" : ""}`;
  }
}

/**
 * Paginates an array of items.
 * @param items - Array of items to paginate.
 * @param pageNumber - Current page number (1-based index).
 * @param pageSize - Number of items per page.
 * @returns A subset of the original array based on pagination.
 */
export function paginate<T>(
  items: T[],
  pageNumber: number,
  pageSize: number
): T[] {
  // Edge case: Ensure pageNumber and pageSize are valid
  if (pageNumber < 1 || pageSize < 1) {
    console.error("Invalid page number or page size.");
    return [];
  }

  // Calculate start index
  const startIndex = (pageNumber - 1) * pageSize;

  // Edge case: If start index is greater than or equal to the length of the items, return an empty array
  if (startIndex >= items.length) {
    return items;
  }

  // Return the paginated result
  return _(items)
    .slice(startIndex) // Get items starting from the calculated startIndex
    .take(pageSize) // Take the specified number of items (pageSize)
    .value();
}

/**
 * Extracts unique programming languages from a list of projects.
 * @param projects - Array of projects containing a 'language' field.
 * @returns An array of unique languages used in projects.
 */
export function getAllLanguages(projects: { language: string }[]): string[] {
  return Array.from(new Set(projects.map((project) => project.language)));
}
