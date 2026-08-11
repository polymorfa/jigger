const WamMdBadDeviceSentMessage = 2176 // channel: regular

type MdBadDeviceSentMessageEvent struct {
	PeerType DEVICETYPE `wam:"peer_type"` // field 1
	DsmError DSMERROR `wam:"dsm_error"` // field 2
	EditType EDITTYPE `wam:"edit_type"` // field 3
	IsLid bool `wam:"is_lid"` // field 4
	MediaType MEDIATYPE `wam:"media_type"` // field 5
	MessageType MESSAGETYPE `wam:"message_type"` // field 6
	RevokeType REVOKETYPE `wam:"revoke_type"` // field 7
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 9
	SenderPlatform PLATFORMTYPE `wam:"sender_platform"` // field 10
}