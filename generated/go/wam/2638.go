const WamOfflineCountTooHigh = 2638 // channel: regular

type OfflineCountTooHighEvent struct {
	StanzaType STANZATYPE `wam:"stanza_type"` // field 1
	OfflineCount int64 `wam:"offline_count"` // field 2
	MediaType MEDIATYPE `wam:"media_type"` // field 3
	MessageType MESSAGETYPE `wam:"message_type"` // field 4
	ReceiptStanzaType string `wam:"receipt_stanza_type"` // field 5
	NotificationStanzaType string `wam:"notification_stanza_type"` // field 6
	CallStanzaType CALLSTANZATYPE `wam:"call_stanza_type"` // field 7
	InvisibleMessageCategory INVISIBLEMESSAGECATEGORYTYPE `wam:"invisible_message_category"` // field 8
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 9
	E2eSenderType E2EDEVICETYPE `wam:"e2e_sender_type"` // field 10
}