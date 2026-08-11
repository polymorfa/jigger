const WamStatusInteractionSent = 6812 // channel: regular

type StatusInteractionSentEvent struct {
	StatusId string `wam:"status_id"` // field 1
	StatusInteractionType STATUSINTERACTIONTYPE `wam:"status_interaction_type"` // field 2
	StatusRowSection STATUSROWSECTION `wam:"status_row_section"` // field 3
	StatusViewerSessionId int64 `wam:"status_viewer_session_id"` // field 4
	UnifiedSessionId string `wam:"unified_session_id"` // field 5
	StatusInteractionMessageType STATUSINTERACTIONMESSAGETYPE `wam:"status_interaction_message_type"` // field 6
	StatusInteractionResultType STATUSINTERACTIONRESULTTYPE `wam:"status_interaction_result_type"` // field 7
	StatusPosterContactType STATUSPOSTERCONTACTTYPE `wam:"status_poster_contact_type"` // field 8
	StatusInteractionActors STATUSINTERACTIONACTORS `wam:"status_interaction_actors"` // field 9
	ChannelStatusId int64 `wam:"channel_status_id"` // field 10
	ChannelUserType CHANNELUSERTYPE `wam:"channel_user_type"` // field 11
	Cid string `wam:"cid"` // field 12
}