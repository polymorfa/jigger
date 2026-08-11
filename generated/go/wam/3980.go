const WamAttachmentTrayActions = 3980 // channel: regular

type AttachmentTrayActionsEvent struct {
	ActionDurationMs int64 `wam:"action_duration_ms"` // field 1
	AttachmentTrayAction ATTACHMENTTRAYACTIONTYPE `wam:"attachment_tray_action"` // field 2
	AttachmentTrayActionTarget ATTACHMENTTRAYACTIONTARGETTYPE `wam:"attachment_tray_action_target"` // field 3
	GroupSizeBucket CLIENTGROUPSIZEBUCKET `wam:"group_size_bucket"` // field 4
	IsAGroup bool `wam:"is_a_group"` // field 5
	IsSuccessful bool `wam:"is_successful"` // field 6
	SendMediaType SENDMEDIATYPETYPE `wam:"send_media_type"` // field 7
	SendTime int64 `wam:"send_time"` // field 8
	ActionThreadType ACTIONTHREADTYPETYPE `wam:"action_thread_type"` // field 9
}