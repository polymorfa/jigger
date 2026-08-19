const WamStatusInteractionReceived = 6810 // channel: regular

type StatusInteractionReceivedEvent struct {
	StatusId string `wam:"status_id"` // field 1
	StatusInteractionType STATUSINTERACTIONTYPE `wam:"status_interaction_type"` // field 2
	UnifiedSessionId string `wam:"unified_session_id"` // field 3
	StatusInteractionMessageType STATUSINTERACTIONMESSAGETYPE `wam:"status_interaction_message_type"` // field 4
	StatusInteractionResultType STATUSINTERACTIONRESULTTYPE `wam:"status_interaction_result_type"` // field 5
	StatusInteractionActors STATUSINTERACTIONACTORS `wam:"status_interaction_actors"` // field 6
	ChannelStatusId int64 `wam:"channel_status_id"` // field 7
	Cid string `wam:"cid"` // field 8
}