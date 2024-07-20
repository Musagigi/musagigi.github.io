export const getAuthToken = (): Record<'date' | 'email' | 'time', string> => {
  const authToken = localStorage.getItem('authToken');
  const parseAuthToken = JSON.parse(authToken!);
  return parseAuthToken;
};
