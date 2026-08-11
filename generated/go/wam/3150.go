const WamGatedChatOpened = 3150 // channel: regular

type GatedChatOpenedEvent struct {
	ChatGatedReason CHATGATEDREASON `wam:"chat_gated_reason"` // field 1
	SelfInitiated bool `wam:"self_initiated"` // field 2
}