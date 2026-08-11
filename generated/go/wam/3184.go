const WamReactionActions = 3184 // channel: regular

type ReactionActionsEvent struct {
	MessageType MESSAGETYPE `wam:"message_type"` // field 1
	ReactionAction REACTIONACTIONTYPE `wam:"reaction_action"` // field 2
	MediaType MEDIATYPE `wam:"media_type"` // field 3
}