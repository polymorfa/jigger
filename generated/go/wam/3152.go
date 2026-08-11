const WamGatedMessageReceived = 3152 // channel: regular

type GatedMessageReceivedEvent struct {
	ChatGatedReason CHATGATEDREASON `wam:"chat_gated_reason"` // field 1
}