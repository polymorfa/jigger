const WamPinInChatInteraction = 4436 // channel: regular

type PinInChatInteractionEvent struct {
	GroupRole GROUPROLETYPE `wam:"group_role"` // field 1
	GroupSize int64 `wam:"group_size"` // field 2
	GroupTypeClient GROUPTYPECLIENT `wam:"group_type_client"` // field 3
	IsAGroup bool `wam:"is_a_group"` // field 4
	MediaType MEDIATYPE `wam:"media_type"` // field 5
	PinCount int64 `wam:"pin_count"` // field 6
	PinInChatInteractionType PININCHATINTERACTIONTYPE `wam:"pin_in_chat_interaction_type"` // field 7
	IsSelfPin bool `wam:"is_self_pin"` // field 8
	PinIndex int64 `wam:"pin_index"` // field 9
	UiSurface TSSURFACE `wam:"ui_surface"` // field 10
}