import _ from "lodash";

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

  console.log("Start Index", startIndex, items);

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
