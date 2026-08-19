const WamSendRevokeMessage = 1348 // channel: regular

type SendRevokeMessageEvent struct {
	MessageType MESSAGETYPE `wam:"message_type"` // field 1
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 2
	RevokeSendDelay int64 `wam:"revoke_send_delay"` // field 3
}