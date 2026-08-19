const WamUsernameUnknownUserDisplayed = 8524 // channel: regular

type UsernameUnknownUserDisplayedEvent struct {
	UnknownUserDisplayContext string `wam:"unknown_user_display_context"` // field 1
	ClientTsMs int64 `wam:"client_ts_ms"` // field 2
	DurationInSecs int64 `wam:"duration_in_secs"` // field 3
	HasPn bool `wam:"has_pn"` // field 4
	HasPush bool `wam:"has_push"` // field 5
	HasUn bool `wam:"has_un"` // field 6
	IsFirstDisplay bool `wam:"is_first_display"` // field 7
	JidType string `wam:"jid_type"` // field 8
	UnknownUserDisplayLid string `wam:"unknown_user_display_lid"` // field 9
	InDb bool `wam:"in_db"` // field 10
}