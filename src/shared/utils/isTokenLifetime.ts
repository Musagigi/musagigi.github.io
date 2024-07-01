import { TOKEN } from '../lib/constans';
import { getCurrentDateTime } from './getCurrentDateTime';
import { getTimeToMinutes } from './getTimeToMinutes';

export const isTokenLifetime = () => {
  const authToken = localStorage.getItem(TOKEN);
  if (!authToken) return true;

  const authTokenParse = JSON.parse(authToken);

  if (!authTokenParse || !authTokenParse.date || !authTokenParse.time) {
    return true;
  }

  const currentDateTime = getCurrentDateTime();

  if (currentDateTime.date > authTokenParse.date) {
    return true;
  }

  const currentTime = getTimeToMinutes(currentDateTime.time);
  const tokenTime = getTimeToMinutes(authTokenParse.time);

  const differenceTime = currentTime - tokenTime;

  return differenceTime >= 60;
};
