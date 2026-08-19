const WamStructuredMessageReceive = 3222 // channel: private

type StructuredMessageReceiveEvent struct {
	BizPlatform BIZPLATFORM `wam:"biz_platform"` // field 1
	BusinessOwnerJid string `wam:"business_owner_jid"` // field 2
	MessageClass STRUCTUREDMESSAGECLASS `wam:"message_class"` // field 3
	MessageClassAttributes string `wam:"message_class_attributes"` // field 4
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 5
	TemplateId string `wam:"template_id"` // field 6
	EntryPointConversationInitiated ENTRYPOINTCONVERSATIONINITIATED `wam:"entry_point_conversation_initiated"` // field 7
	EntryPointConversionApp string `wam:"entry_point_conversion_app"` // field 8
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 9
	LastMessageDirection LASTMESSAGEDIRECTION `wam:"last_message_direction"` // field 10
	MessageDepth int64 `wam:"message_depth"` // field 11
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 12
}