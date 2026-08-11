const WamForwardSend = 1728 // channel: regular

type ForwardSendEvent struct {
	MessageType MESSAGETYPE `wam:"message_type"` // field 1
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 2
	MessageIsFastForward bool `wam:"message_is_fast_forward"` // field 3
	MessageForwardAgeT string `wam:"message_forward_age_t"` // field 4
	FastForwardEnabled bool `wam:"fast_forward_enabled"` // field 5
	MessageIsFanout bool `wam:"message_is_fanout"` // field 6
	RetryCount int64 `wam:"retry_count"` // field 7
	ResendCount int64 `wam:"resend_count"` // field 8
	MessageIsInternational bool `wam:"message_is_international"` // field 9
	MediaCaptionPresent bool `wam:"media_caption_present"` // field 10
	E2eCiphertextVersion int64 `wam:"e2e_ciphertext_version"` // field 11
	E2eCiphertextType E2ECIPHERTEXTTYPE `wam:"e2e_ciphertext_type"` // field 12
	MessageSendT string `wam:"message_send_t"` // field 13
	IsFrequentlyForwarded bool `wam:"is_frequently_forwarded"` // field 14
	WouldBeFrequentlyForwardedAt3 bool `wam:"would_be_frequently_forwarded_at3"` // field 16
	WouldBeFrequentlyForwardedAt4 bool `wam:"would_be_frequently_forwarded_at4"` // field 17
	EphemeralityDuration int64 `wam:"ephemerality_duration"` // field 18
	SenderDefaultDisappearingDuration int64 `wam:"sender_default_disappearing_duration"` // field 19
	ReceiverDefaultDisappearingDuration int64 `wam:"receiver_default_disappearing_duration"` // field 20
	DisappearingChatInitiator DISAPPEARINGCHATINITIATORTYPE `wam:"disappearing_chat_initiator"` // field 21
	IsForwardedForward bool `wam:"is_forwarded_forward"` // field 22
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 23
	EphemeralityInitiator EPHEMERALITYINITIATORTYPE `wam:"ephemerality_initiator"` // field 24
	EphemeralityTriggerAction EPHEMERALITYTRIGGERACTIONTYPE `wam:"ephemerality_trigger_action"` // field 25
	MessageBizType MESSAGEBIZTYPE `wam:"message_biz_type"` // field 26
	ForwardPickerOrigin FORWARDPICKERORIGIN `wam:"forward_picker_origin"` // field 27
	ForwardOrigin FORWARDORIGIN `wam:"forward_origin"` // field 28
}