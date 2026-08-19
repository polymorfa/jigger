const WamQbmMessageClick = 5178 // channel: regular

type QbmMessageClickEvent struct {
	ButtonClickedType QBMMESSAGECLICKBUTTONCLICKEDTYPE `wam:"button_clicked_type"` // field 1
	ChatsFolderType CHATSFOLDERTYPE `wam:"chats_folder_type"` // field 2
	ContactType CONTACTTYPE `wam:"contact_type"` // field 3
	DeltaTime int64 `wam:"delta_time"` // field 4
	DeltaTimeReceived int64 `wam:"delta_time_received"` // field 5
	HsmTagStr string `wam:"hsm_tag_str"` // field 6
	MessageTypeStr string `wam:"message_type_str"` // field 7
	QbmFlag QBMFLAG `wam:"qbm_flag"` // field 8
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 9
	BizTrustTier string `wam:"biz_trust_tier"` // field 10
	MessageIdHmac string `wam:"message_id_hmac"` // field 11
	ThumbnailType THUMBNAILTYPE `wam:"thumbnail_type"` // field 12
	IsBizIntent bool `wam:"is_biz_intent"` // field 13
	IsBroadcastMessage bool `wam:"is_broadcast_message"` // field 14
	IsInsubContact bool `wam:"is_insub_contact"` // field 15
	EntSourceSubplatform string `wam:"ent_source_subplatform"` // field 16
	DecisionId string `wam:"decision_id"` // field 17
	ThreadLidHmac string `wam:"thread_lid_hmac"` // field 18
	IsOba bool `wam:"is_oba"` // field 19
	ButtonValueJsonArray string `wam:"button_value_json_array"` // field 20
	MessageFieldJsonArray string `wam:"message_field_json_array"` // field 21
	SubmessageFieldJsonArray string `wam:"submessage_field_json_array"` // field 22
	BodyUrlCountInt int64 `wam:"body_url_count_int"` // field 27
	BodyUrlUniqueCountInt int64 `wam:"body_url_unique_count_int"` // field 28
	CtaUrlUniqueCountInt int64 `wam:"cta_url_unique_count_int"` // field 29
	UrlUniqueCountInt int64 `wam:"url_unique_count_int"` // field 30
	IsCoex bool `wam:"is_coex"` // field 31
	IsThroughDecisionService bool `wam:"is_through_decision_service"` // field 32
	IasEntryPoint SIGNUPENTRYPOINT `wam:"ias_entry_point"` // field 33
	IasOptinDs string `wam:"ias_optin_ds"` // field 34
	IsIasSubscriber bool `wam:"is_ias_subscriber"` // field 35
	IsFromPill bool `wam:"is_from_pill"` // field 36
	PillEntryPoint PILLENTRYPOINT `wam:"pill_entry_point"` // field 37
}