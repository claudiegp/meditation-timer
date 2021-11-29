export const convertHoursToSeconds = (hours: number): number => {
  const seconds: number = Math.floor(hours * 60 * 60);
  return seconds;
};

export const convertMinutesToSeconds = (minutes: number): number => {
  const seconds: number = Math.floor(minutes * 60);
  return seconds;
};

export const calculateTotalSeconds = (
  hours: number,
  minutes: number,
  seconds: number
): number => {
  const hoursAsSeconds: number = convertHoursToSeconds(hours);
  const minutesAsSeconds: number = convertMinutesToSeconds(minutes);

  const total: number = hoursAsSeconds + minutesAsSeconds + seconds;
  return total;
};

/* 
Converts seconds into hours, minutes and seconds.
Then generates a string e.g. '1 hour 30 minutes 0 seconds'
*/
export const convertSecondsToHms = (seconds: number): string => {
  const hours: number = Math.floor(seconds / 3600);
  const minutes: number = Math.floor((seconds - hours * 3600) / 60);
  const secs: number = seconds - hours * 3600 - minutes * 60;

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
