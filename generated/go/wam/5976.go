const WamQbmMessageLevelAction = 5976 // channel: regular

type QbmMessageLevelActionEvent struct {
	BizTrustTier string `wam:"biz_trust_tier"` // field 1
	ContactType CONTACTTYPE `wam:"contact_type"` // field 2
	DeltaTimeReceived int64 `wam:"delta_time_received"` // field 3
	IsInsubContact bool `wam:"is_insub_contact"` // field 4
	MessageActionEntryPoint MESSAGEACTIONENTRYPOINT `wam:"message_action_entry_point"` // field 5
	MessageHasUrl bool `wam:"message_has_url"` // field 6
	MessageIdHmac string `wam:"message_id_hmac"` // field 7
	MessageLevelAction MESSAGELEVELACTION `wam:"message_level_action"` // field 8
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 9
	IsBizIntent bool `wam:"is_biz_intent"` // field 10
	IsBroadcastMessage bool `wam:"is_broadcast_message"` // field 11
	EntSourceSubplatform string `wam:"ent_source_subplatform"` // field 12
	DecisionId string `wam:"decision_id"` // field 13
	ThreadLidHmac string `wam:"thread_lid_hmac"` // field 14
	IsOba bool `wam:"is_oba"` // field 15
	ButtonValueJsonArray string `wam:"button_value_json_array"` // field 16
	MessageFieldJsonArray string `wam:"message_field_json_array"` // field 17
	SubmessageFieldJsonArray string `wam:"submessage_field_json_array"` // field 18
	BodyUrlCountInt int64 `wam:"body_url_count_int"` // field 23
	BodyUrlUniqueCountInt int64 `wam:"body_url_unique_count_int"` // field 24
	CtaUrlUniqueCountInt int64 `wam:"cta_url_unique_count_int"` // field 25
	UrlUniqueCountInt int64 `wam:"url_unique_count_int"` // field 26
	IsCoex bool `wam:"is_coex"` // field 27
	IsThroughDecisionService bool `wam:"is_through_decision_service"` // field 28
	IasEntryPoint SIGNUPENTRYPOINT `wam:"ias_entry_point"` // field 29
	IasOptinDs string `wam:"ias_optin_ds"` // field 30
	IsIasSubscriber bool `wam:"is_ias_subscriber"` // field 31
	IsFromPill bool `wam:"is_from_pill"` // field 32
	PillEntryPoint PILLENTRYPOINT `wam:"pill_entry_point"` // field 33
}