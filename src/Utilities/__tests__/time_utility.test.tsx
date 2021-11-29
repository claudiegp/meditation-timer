import {
  getSecondsFromHours,
  calculateTotalSeconds,
  getSecondsFromMinutes,
  getHmsFromSeconds,
} from "../time_utility";

describe("time utilities", () => {
  describe("getSecondsFromHours", () => {
    it("should convert 1 hour into 3600 seconds", () => {
      expect(getSecondsFromHours(1)).toEqual(3600);
    });
    it("should convert 1.5 hours into 3600 seconds", () => {
      expect(getSecondsFromHours(1.5)).toEqual(5400);
    });
  });

  describe("getSecondsFromMinutes", () => {
    it("should convert 1 minute into 60 seconds", () => {
      expect(getSecondsFromMinutes(1)).toEqual(60);
    });
    it("should convert 60 minute into 360 seconds", () => {
      expect(getSecondsFromMinutes(60)).toEqual(3600);
    });
  });
  describe("calcultateTotalSeconds", () => {
    it("should return total of 5430 seconds when passed 1 hour, 30 minutes, 30 seconds", () => {
      expect(calculateTotalSeconds(1, 30, 30)).toEqual(5430);
    });

    it("should return total of 3600 seconds when passed 1 hour, 0 minutes, 0 seconds", () => {
      expect(calculateTotalSeconds(1, 0, 0)).toEqual(3600);
    });
  });

  describe("getHmsFromSeconds", () => {
    it("should convert 3600 seconds into 1 hour, 0 mins, 0 secs", () => {
      expect(getHmsFromSeconds(3600)).toEqual(
        "1 hours + 0 minutes + 0 seconds"
      );
    });

    it("should convert 5430 seconds into 1 hour, 30 mins, 30 secs", () => {
      expect(getHmsFromSeconds(5430)).toEqual(
        "1 hours + 30 minutes + 30 seconds"
      );
    });

    it("should convert 3660 seconds into 1 hour, 30 mins, 30 secs", () => {
      expect(getHmsFromSeconds(3660)).toEqual(
        "1 hours + 1 minutes + 0 seconds"
      );
    });
  });
});

/* describe("convertSecondsToHms", () => {
    it("should convert 3600 seconds into 1 hour", () => {
      expect(convertSecondsToHms(3600)).toEqual(1);
    });

    it("should convert 5400 seconds into 1.5 hours", () => {
      expect(convertSecondsToHms(5400)).toEqual(1.5);
    });

    it("should convert 60 seconds into 1 minute", () => {
      expect(convertSecondsToHms(60)).toEqual(1);
    });

    it("should convert 120 seconds into 2 minutes", () => {
      expect(convertSecondsToHms(120)).toEqual(2);
    });
    it("should return 50 seconds", () => {
      expect(convertSecondsToHms(50)).toEqual(50);
    });
  });
}); */
