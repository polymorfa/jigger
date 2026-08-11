const WamViewOnceScreenshotActions = 3606 // channel: regular

type ViewOnceScreenshotActionsEvent struct {
	IsAGroup bool `wam:"is_a_group"` // field 1
	ThreadId string `wam:"thread_id"` // field 2
	VoMessageType VOMESSAGETYPE `wam:"vo_message_type"` // field 3
	VoSsAction VOSSACTION `wam:"vo_ss_action"` // field 4
}