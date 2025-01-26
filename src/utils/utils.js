export function calculateExperience(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // If no end date, use the current date
  const diffInMs = end - start;
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
