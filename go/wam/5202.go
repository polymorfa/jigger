const WamChannelSimilarChannels = 5202 // channel: regular

type ChannelSimilarChannelsEvent struct {
	BannerStatus BANNERSTATUS `wam:"banner_status"` // field 1
	BannerStatusReason BANNERSTATUSREASON `wam:"banner_status_reason"` // field 2
	Cid string `wam:"cid"` // field 3
	SimilarChannelDisplayRank int64 `wam:"similar_channel_display_rank"` // field 4
	SimilarChannelEventSurface CHANNELEVENTSURFACE `wam:"similar_channel_event_surface"` // field 5
	SimilarChannelId string `wam:"similar_channel_id"` // field 6
	SimilarChannelRank int64 `wam:"similar_channel_rank"` // field 7
	SimilarChannelUserType CHANNELUSERTYPE `wam:"similar_channel_user_type"` // field 9
	SimilarChannelsSessionId int64 `wam:"similar_channels_session_id"` // field 10
	UnifiedSessionId string `wam:"unified_session_id"` // field 11
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 12
}