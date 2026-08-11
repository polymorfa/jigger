const WamExtensionsStructuredMessageInteraction = 4114 // channel: private

type ExtensionsStructuredMessageInteractionEvent struct {
	BizPlatform BIZPLATFORM `wam:"biz_platform"` // field 1
	BusinessOwnerJid string `wam:"business_owner_jid"` // field 2
	MessageClass STRUCTUREDMESSAGECLASS `wam:"message_class"` // field 3
	MessageClassAttributes string `wam:"message_class_attributes"` // field 4
	MessageInteraction INTERACTIONTYPE `wam:"message_interaction"` // field 5
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 6
	EntryPointConversationInitiated ENTRYPOINTCONVERSATIONINITIATED `wam:"entry_point_conversation_initiated"` // field 7
	EntryPointConversionApp string `wam:"entry_point_conversion_app"` // field 8
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 9
	AdContext string `wam:"ad_context"` // field 10
	FlowEntryPoint FLOWENTRYPOINT `wam:"flow_entry_point"` // field 11
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 12
}