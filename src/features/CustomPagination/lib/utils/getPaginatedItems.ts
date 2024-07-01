export const getPaginatedItems = (
  page: number,
  itemsPerPage: number,
  items: string[],
) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return items.slice(startIndex, endIndex);
};
