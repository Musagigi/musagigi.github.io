export type TCustomPagination = {
  listItems: Array<string>;
  setItems: (React.Dispatch<React.SetStateAction<string[]>>;)
  itemsPerPage?: number;
};
