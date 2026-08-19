const WamWebcMessageSend = 2072 // channel: regular

type WebcMessageSendEvent struct {
	MessageType MESSAGETYPE `wam:"message_type"` // field 1
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 2
	MessageIsForward bool `wam:"message_is_forward"` // field 3
	MessageSendT string `wam:"message_send_t"` // field 4
}