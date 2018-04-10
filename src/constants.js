export const Constants = {
    SOLAR_SYSTEM_OBJECT: 'SOLAR_SYSTEM_OBJECT',
    GREENWICH_OBSERVATORY_COORDINATES: {
        LATITUDE: 51.476852,
        LONGITUDE: -0.000500,
        RADIUS: 6371000 + 46
    },
    MS_PER_HOUR: 3600 * 1000,
    MS_PER_DAY: 3600 * 1000 * 24,
    MS_PER_YEAR: 3600 * 1000 * 24 * 365.2422,
    JULIAN_DAY_OFFSET: 2440587.5,
    JULIAN_DAY_2000: 2451545,
    JULIAN_DAY_2010: 2451545 + 3652.5,
    EPS: 10 ** (-9),
    DEGREE: Math.PI / 180,
    ARC_SECONDS_IN_A_DEGREE: 3600,
    DAYS_PER_JULIAN_CENTURY: 36525
};