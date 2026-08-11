const WamPinInChatMessageSend = 4438 // channel: regular

type PinInChatMessageSendEvent struct {
	GroupRole GROUPROLETYPE `wam:"group_role"` // field 1
	GroupTypeClient GROUPTYPECLIENT `wam:"group_type_client"` // field 2
	IsAGroup bool `wam:"is_a_group"` // field 3
	MediaType MEDIATYPE `wam:"media_type"` // field 4
	PinInChatExpirySecs int64 `wam:"pin_in_chat_expiry_secs"` // field 5
	PinInChatType PININCHATTYPE `wam:"pin_in_chat_type"` // field 6
	IsSelfParentMessage bool `wam:"is_self_parent_message"` // field 7
	IsSelfPin bool `wam:"is_self_pin"` // field 8
	TimeRemainingToExpirySecs int64 `wam:"time_remaining_to_expiry_secs"` // field 9
}