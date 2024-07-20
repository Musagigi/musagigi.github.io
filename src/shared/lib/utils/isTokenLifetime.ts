import { getCurrentDate } from './getCurrentDate';
import { getTimeToMinutes } from './getTimeToMinutes';

import { TOKEN } from '../constans';

export const isTokenLifetime = () => {
  const authToken = localStorage.getItem(TOKEN);
  if (!authToken) return true;

  const authTokenParse = JSON.parse(authToken);

  if (!authTokenParse || !authTokenParse.date || !authTokenParse.time) {
    return true;
  }

  const currentDateTime = getCurrentDate();

  if (currentDateTime.date > authTokenParse.date) {
    return true;
  }

  const currentTime = getTimeToMinutes(currentDateTime.time);
  const tokenTime = getTimeToMinutes(authTokenParse.time);

  const differenceTime = currentTime - tokenTime;

  return differenceTime >= 60;
};
