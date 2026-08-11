export const WamClockSkewDifferenceT = 3178 as const

export interface ClockSkewDifferenceTEvent {
  /** field 1, wire `clock_skew_hourly` */
  clockSkewHourly?: number
}