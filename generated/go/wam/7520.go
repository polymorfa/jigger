const WamStructuredMessageBuyerReceive = 7520 // channel: regular

type StructuredMessageBuyerReceiveEvent struct {
	BizPlatform BIZPLATFORM `wam:"biz_platform"` // field 1
	MessageClass STRUCTUREDMESSAGECLASS `wam:"message_class"` // field 2
	MessageClassAttributes string `wam:"message_class_attributes"` // field 3
	MessageInteraction INTERACTIONTYPE `wam:"message_interaction"` // field 4
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 5
}