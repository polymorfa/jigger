const WamChannelMessageVisibilityTracking = 5998 // channel: regular

type ChannelMessageVisibilityTrackingEvent struct {
	Cid string `wam:"cid"` // field 1
	PostId string `wam:"post_id"` // field 4
	UnifiedSessionId string `wam:"unified_session_id"` // field 6
	IsVpvImpression bool `wam:"is_vpv_impression"` // field 7
	IsStarredPost bool `wam:"is_starred_post"` // field 8
	ContainsMusic bool `wam:"contains_music"` // field 9
	ChannelUserType CHANNELUSERTYPE `wam:"channel_user_type"` // field 10
	TraceIdInt int64 `wam:"trace_id_int"` // field 11
	IsOriginalAuthor bool `wam:"is_original_author"` // field 12
	AiProvenanceLabelEnabled bool `wam:"ai_provenance_label_enabled"` // field 13
	AiProvenanceLabelShown bool `wam:"ai_provenance_label_shown"` // field 14
}