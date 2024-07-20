export const getTimeToMinutes = (time: string) => {
  const currentTime = time.split(':');
  const hours = +currentTime[0];
  const minutes = +currentTime[1];
  const seconds = +currentTime[2];
  const totalMinutes = hours * 60 + minutes + seconds / 60;

  return totalMinutes;
};
