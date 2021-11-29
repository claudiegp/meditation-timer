export const getSecondsFromHours = (hours: number): number => {
  const seconds = Math.floor(hours * 60 * 60);
  return seconds;
};

export const getSecondsFromMinutes = (minutes: number): number => {
  const seconds = Math.floor(minutes * 60);
  return seconds;
};

export const calculateTotalSeconds = (
  hours: number,
  minutes: number,
  seconds: number
) => {
  const hoursAsSeconds = getSecondsFromHours(hours);
  const minutesAsSeconds = getSecondsFromMinutes(minutes);

  const total = hoursAsSeconds + minutesAsSeconds + seconds;
  return total;
};

export const getHmsFromSeconds = (seconds: number): string => {
  let hours = Math.floor(seconds / 3600);
  console.log(hours);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  console.log(minutes);
  let secs = seconds - hours * 3600 - minutes * 60;
  console.log(secs);

  return `${hours} hours + ${minutes} minutes + ${secs} seconds`;
};

/* export const secondsToHours = (seconds: number): number => {
  let hours = Math.floor(seconds / 3600);
  return hours;
};

export const secondsToMinutes = (seconds: number, hours: number): number => {
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  return minutes;
};

export const getSeconds = (
  seconds: number,
  hours: number,
  minutes: number
): number => {
  let secs = seconds - hours * 3600 - minutes * 60;
  return secs;
}; */

/* export const convertSecondsToHms = (seconds: number): number => {
  if (seconds / 3600 >= 1) {
    const hour = seconds / 3600;
    // const hourRemainder = seconds % 3600;
    return hour;
  } else if (seconds / 60 >= 1) {
    const minutes = seconds / 60;
    return minutes;
  } else {
    return seconds;
  }
}; */
