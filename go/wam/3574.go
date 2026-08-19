const WamChatPsaRead = 3574 // channel: regular

type ChatPsaReadEvent struct {
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 1
	ReadEntryPoint READENTRYPOINT `wam:"read_entry_point"` // field 3
	PsaCampaignId string `wam:"psa_campaign_id"` // field 4
	PsaMsgId string `wam:"psa_msg_id"` // field 5
}