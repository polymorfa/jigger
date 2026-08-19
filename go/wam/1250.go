const WamStatusRevoke = 1250 // channel: regular

type StatusRevokeEvent struct {
	StatusSessionId int64 `wam:"status_session_id"` // field 1
	MediaType MEDIATYPE `wam:"media_type"` // field 2
	StatusLifeT int64 `wam:"status_life_t"` // field 3
	StatusId string `wam:"status_id"` // field 4
	UnifiedSessionId string `wam:"unified_session_id"` // field 5
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 6
}