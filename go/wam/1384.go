const WamUserActivity = 1384 // channel: regular

type UserActivityEvent struct {
	UserActivitySessionId string `wam:"user_activity_session_id"` // field 1
	UserActivityStartTime int64 `wam:"user_activity_start_time"` // field 2
	UserActivityBitmapLow int64 `wam:"user_activity_bitmap_low"` // field 3
	UserActivityBitmapHigh int64 `wam:"user_activity_bitmap_high"` // field 4
	UserActivityBitmapLen int64 `wam:"user_activity_bitmap_len"` // field 5
	UserActivitySessionSeq int64 `wam:"user_activity_session_seq"` // field 6
	UserActivitySessionCum int64 `wam:"user_activity_session_cum"` // field 7
}