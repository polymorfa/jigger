const WamPaidMessagingUserInteractionsLogger = 4740 // channel: private

type PaidMessagingUserInteractionsLoggerEvent struct {
	PmxActionTarget PAIDMESSAGINGUSERINTERACTIONSACTIONTARGET `wam:"pmx_action_target"` // field 1
	PmxActionType PAIDMESSAGINGUSERINTERACTIONSACTIONTYPE `wam:"pmx_action_type"` // field 2
	PmxComponentType PAIDMESSAGINGUSERINTERACTIONSCOMPONENTTYPE `wam:"pmx_component_type"` // field 3
	PmxHeaderMediaType PAIDMESSAGINGUSERINTERACTIONSHEADERMEDIATYPE `wam:"pmx_header_media_type"` // field 4
	PmxMarketingFormat PAIDMESSAGINGUSERINTERACTIONSMARKETINGFORMAT `wam:"pmx_marketing_format"` // field 5
	PmxQueryParams string `wam:"pmx_query_params"` // field 6
	TemplateId string `wam:"template_id"` // field 7
	PmxHostStorage PAIDMESSAGINGUSERINTERACTIONSHOSTSTORAGE `wam:"pmx_host_storage"` // field 8
	PmxSenderCountryCode string `wam:"pmx_sender_country_code"` // field 9
	PmxMessageDeliveredTs int64 `wam:"pmx_message_delivered_ts"` // field 10
	PmxHashedMessageKey int64 `wam:"pmx_hashed_message_key"` // field 11
	PmxMessageStanzaAcceptedTs int64 `wam:"pmx_message_stanza_accepted_ts"` // field 12
	PmxHashedMessageId string `wam:"pmx_hashed_message_id"` // field 13
	PmxCarouselCardIndex int64 `wam:"pmx_carousel_card_index"` // field 14
	PmxTapTargetType TAPTARGETTYPE `wam:"pmx_tap_target_type"` // field 15
	PmxTextTruncationLimit int64 `wam:"pmx_text_truncation_limit"` // field 16
	MessageBubbleHeightPx int64 `wam:"message_bubble_height_px"` // field 17
	MessageBubbleWidthPx int64 `wam:"message_bubble_width_px"` // field 18
	MessageExpandState PAIDMESSAGINGUSERINTERACTIONSMESSAGEEXPANDSTATE `wam:"message_expand_state"` // field 19
}