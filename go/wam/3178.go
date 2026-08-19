const WamClockSkewDifferenceT = 3178 // channel: private

type ClockSkewDifferenceTEvent struct {
	ClockSkewHourly int64 `wam:"clock_skew_hourly"` // field 1
}