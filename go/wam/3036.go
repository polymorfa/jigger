const WamAdvStoredTimestampExpired = 3036 // channel: regular

type AdvStoredTimestampExpiredEvent struct {
	AdvExpireTimeInHours int64 `wam:"adv_expire_time_in_hours"` // field 1
}