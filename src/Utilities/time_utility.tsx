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

/**  
Converts seconds into hours, minutes and seconds.
Then generates a string e.g. '1 hour 30 minutes 0 seconds'
*/
export const convertSecondsToHms = (seconds: number): string => {
  const hours: number = Math.floor(seconds / 3600);
  const minutes: number = Math.floor((seconds - hours * 3600) / 60);
  const secs: number = seconds - hours * 3600 - minutes * 60;

  // question - string or a number/both?
  const digitalHours: number | string = hours < 10 ? `0` + hours : hours;
  const digitalMins: number | string = minutes < 10 ? `0` + minutes : minutes;
  const digitalSeconds: number | string = secs < 10 ? `0` + secs : secs;

  return `${digitalHours}:${digitalMins}:${digitalSeconds}`;
};

/* WIP refactor  */

/* export const createDigitalClock = (
  hours: number,
  minutes: number,
  secs: number
): string | number => {
  // question - string or a number/both?
  const digitalHours: number | string = hours < 10 ? `0` + hours : hours;
  const digitalMins: number | string = minutes < 10 ? `0` + minutes : minutes;
  const digitalSeconds: number | string = secs < 10 ? `0` + secs : secs;

  return `${digitalHours}:${digitalMins}:${digitalSeconds}`;
};
 */

/* export const digitizeNumbers = (
  hours: number,
  minutes: number,
  secs: number
)=> {
  // question - string or a number/both?
  const digitalHours: number | string = hours < 10 ? `0` + hours : hours;
  const digitalMins: number | string = minutes < 10 ? `0` + minutes : minutes;
  const digitalSeconds: number | string = secs < 10 ? `0` + secs : secs;
};
 */
