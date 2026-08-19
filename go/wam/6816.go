const WamAboutConsumptionDaily = 6816 // channel: regular

type AboutConsumptionDailyEvent struct {
	AboutChatBubbleTapCount int64 `wam:"about_chat_bubble_tap_count"` // field 1 (about_chat_bubble_tap_count >= 0)
	AboutChatConsumptionCount int64 `wam:"about_chat_consumption_count"` // field 2 (about_chat_consumption_count >= 0)
	AboutLocale string `wam:"about_locale"` // field 3
	AboutMessageSendCount int64 `wam:"about_message_send_count"` // field 4 (about_message_send_count >= 0)
}