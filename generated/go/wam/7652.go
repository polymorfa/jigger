const WamPaidMessageVpvImpression = 7652 // channel: regular

type PaidMessageVpvImpressionEvent struct {
	BodyUrlCountInt int64 `wam:"body_url_count_int"` // field 1
	BodyUrlUniqueCountInt int64 `wam:"body_url_unique_count_int"` // field 2
	ButtonValueJsonArray string `wam:"button_value_json_array"` // field 3
	ChatsFolderType CHATSFOLDERTYPE `wam:"chats_folder_type"` // field 4
	ContactType CONTACTTYPE `wam:"contact_type"` // field 5
	CtaUrlUniqueCountInt int64 `wam:"cta_url_unique_count_int"` // field 6
	DecisionId string `wam:"decision_id"` // field 7
	DeltaTime int64 `wam:"delta_time"` // field 8
	DeltaTimeReceived int64 `wam:"delta_time_received"` // field 9
	HsmTagStr string `wam:"hsm_tag_str"` // field 10
	IsBizIntent bool `wam:"is_biz_intent"` // field 11
	IsBroadcastMessage bool `wam:"is_broadcast_message"` // field 12
	IsInsubContact bool `wam:"is_insub_contact"` // field 13
	IsMuted bool `wam:"is_muted"` // field 14
	MessageFieldJsonArray string `wam:"message_field_json_array"` // field 15
	MessageIdHmac string `wam:"message_id_hmac"` // field 16
	QbmFlag QBMFLAG `wam:"qbm_flag"` // field 17
	ReadReceiptsEnabled bool `wam:"read_receipts_enabled"` // field 18
	SubmessageFieldJsonArray string `wam:"submessage_field_json_array"` // field 19
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 20
	UnifiedSessionId string `wam:"unified_session_id"` // field 21
	UrlUniqueCountInt int64 `wam:"url_unique_count_int"` // field 22
	VpvDwellTimeMs int64 `wam:"vpv_dwell_time_ms"` // field 23
	VpvJsonObject string `wam:"vpv_json_object"` // field 24
	MessageBodyType MESSAGEBODYTYPEENUM `wam:"message_body_type"` // field 25
	MmCarouselCardIndex int64 `wam:"mm_carousel_card_index"` // field 26
	MessageBubbleHeightPx int64 `wam:"message_bubble_height_px"` // field 27
	MessageBubbleWidthPx int64 `wam:"message_bubble_width_px"` // field 28
}