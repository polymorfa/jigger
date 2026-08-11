const WamExtensionScreenProgress = 4112 // channel: private

type ExtensionScreenProgressEvent struct {
	BizPlatform BIZPLATFORM `wam:"biz_platform"` // field 1
	BusinessOwnerJid string `wam:"business_owner_jid"` // field 2
	EmbeddedError string `wam:"embedded_error"` // field 3
	EmbeddedFlow string `wam:"embedded_flow"` // field 4
	EmbeddedFlowType string `wam:"embedded_flow_type"` // field 5
	ExtensionCategory string `wam:"extension_category"` // field 6
	ExtensionScreenLength int64 `wam:"extension_screen_length"` // field 7
	ExtensionsFlowId string `wam:"extensions_flow_id"` // field 8
	ExtensionsMessageId string `wam:"extensions_message_id"` // field 9
	ExtensionsSessionId string `wam:"extensions_session_id"` // field 10
	FlowStatusExit string `wam:"flow_status_exit"` // field 11
	HsmCategory string `wam:"hsm_category"` // field 12
	IsTemplate bool `wam:"is_template"` // field 13
	ScreenProgress string `wam:"screen_progress"` // field 14
	SequenceNumber int64 `wam:"sequence_number"` // field 15
	HsmTag string `wam:"hsm_tag"` // field 16
	ExtensionRestoredFromCache bool `wam:"extension_restored_from_cache"` // field 17
	ExtensionStatus string `wam:"extension_status"` // field 18
	EntryPointConversationInitiated ENTRYPOINTCONVERSATIONINITIATED `wam:"entry_point_conversation_initiated"` // field 19
	EntryPointConversionApp string `wam:"entry_point_conversion_app"` // field 20
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 21
	AdContext string `wam:"ad_context"` // field 22
	FlowEntryPoint FLOWENTRYPOINT `wam:"flow_entry_point"` // field 23
	ClickSequenceNumber int64 `wam:"click_sequence_number"` // field 24
	IsSuccessScreen bool `wam:"is_success_screen"` // field 25
	LayoutType string `wam:"layout_type"` // field 26
	ShoppingCartItemsCount int64 `wam:"shopping_cart_items_count"` // field 27
}