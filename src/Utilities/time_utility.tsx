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
*/
export const setDigitalClock = (seconds: number): string => {
  const { h, m, s } = convertSecondsToHms(seconds);

  const { digitalHours, digitalMins, digitalSeconds } = convertHmsToDigitalTime(
    h,
    m,
    s
  );

  return `${digitalHours}:${digitalMins}:${digitalSeconds}`;
};

export const convertSecondsToHms = (
  seconds: number
): { h: number; m: number; s: number } => {
  const h: number = Math.floor(seconds / 3600);
  const m: number = Math.floor((seconds - h * 3600) / 60);
  const s: number = seconds - h * 3600 - m * 60;

  return { h, m, s };
};

export const convertHmsToDigitalTime = (
  hours: number,
  minutes: number,
  secs: number
): { digitalHours: string; digitalMins: string; digitalSeconds: string } => {
  const digitalHours: string = hours < 10 ? `0` + hours : `${hours}`;
  const digitalMins: string = minutes < 10 ? `0` + minutes : `${minutes}`;
  const digitalSeconds: string = secs < 10 ? `0` + secs : `${secs}`;

  return { digitalHours, digitalMins, digitalSeconds };
};
