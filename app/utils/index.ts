import _ from "lodash";

export const BGCOLOR: string = "bg-transparent";

/**
 * Calculates experience duration between two dates in years and months.
 * @param startDate - Start date of experience.
 * @param endDate - End date of experience (optional, defaults to today).
 * @returns Formatted experience duration (e.g., "2 years and 3 months").
 */
export function calculateExperience(
  startDate: string | number | Date,
  endDate?: string | number | Date
): string {
  const start: Date = new Date(startDate);
  const end: Date = endDate ? new Date(endDate) : new Date(); // Defaults to today if no end date provided
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
export function paginate<T>(items: T[], pageNumber: number, pageSize: number): T[] {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

/**
 * Extracts unique programming languages from a list of projects.
 * @param projects - Array of projects containing a 'language' field.
 * @returns An array of unique languages used in projects.
 */
export function getAllLanguages(projects: { language: string }[]): string[] {
  return Array.from(new Set(projects.map((project) => project.language)));
}
