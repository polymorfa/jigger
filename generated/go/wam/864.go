const WamWebcChatOpen = 864 // channel: regular

type WebcChatOpenEvent struct {
	WebcUnreadCount string `wam:"webc_unread_count"` // field 1
	WebcChatOpenT string `wam:"webc_chat_open_t"` // field 2
	WebcRenderedMessageCount int64 `wam:"webc_rendered_message_count"` // field 4
	WebcFinalRenderedMessageCount int64 `wam:"webc_final_rendered_message_count"` // field 5
	WebcChatOpenPaintedT string `wam:"webc_chat_open_painted_t"` // field 6
	WebcChatOpenBeforePaintT string `wam:"webc_chat_open_before_paint_t"` // field 7
	WebcWindowHeightFloat string `wam:"webc_window_height_float"` // field 8
}