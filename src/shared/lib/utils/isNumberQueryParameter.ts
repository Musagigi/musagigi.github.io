export const isNumberQueryParameter = (params: string) => {
  return !/^\d+$/.test(params!);
};
