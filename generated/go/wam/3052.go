const WamPsStructuredMessageInteraction = 3052 // channel: private

type PsStructuredMessageInteractionEvent struct {
	BizPlatform BIZPLATFORM `wam:"biz_platform"` // field 1
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 2
	MessageClass STRUCTUREDMESSAGECLASS `wam:"message_class"` // field 3
	MessageInteraction INTERACTIONTYPE `wam:"message_interaction"` // field 4
	MessageClassAttributes string `wam:"message_class_attributes"` // field 5
	BusinessOwnerJid string `wam:"business_owner_jid"` // field 7
	TemplateId string `wam:"template_id"` // field 8
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 9
}