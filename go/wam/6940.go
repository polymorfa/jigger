const WamQbmRichOrderStatusInteraction = 6940 // channel: regular

type QbmRichOrderStatusInteractionEvent struct {
	ActionTypeRichOrderStatus string `wam:"action_type_rich_order_status"` // field 1
	ChatsFolderType CHATSFOLDERTYPE `wam:"chats_folder_type"` // field 2
	ContactType CONTACTTYPE `wam:"contact_type"` // field 3
	DecisionId string `wam:"decision_id"` // field 4
	DeltaTime int64 `wam:"delta_time"` // field 5
	DeltaTimeReceived int64 `wam:"delta_time_received"` // field 6
	EntryPoint ENTRYPOINT `wam:"entry_point"` // field 7
	HsmTagStr string `wam:"hsm_tag_str"` // field 8
	IsBizIntent bool `wam:"is_biz_intent"` // field 9
	IsBroadcastMessage bool `wam:"is_broadcast_message"` // field 10
	IsInsubContact bool `wam:"is_insub_contact"` // field 11
	IsMuted bool `wam:"is_muted"` // field 12
	MessageIdHmac string `wam:"message_id_hmac"` // field 13
	QbmFlag QBMFLAG `wam:"qbm_flag"` // field 14
	ReadReceiptsEnabled bool `wam:"read_receipts_enabled"` // field 15
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 16
	UnifiedSessionId string `wam:"unified_session_id"` // field 17
}