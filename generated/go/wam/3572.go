const WamChatPsaAction = 3572 // channel: regular

type ChatPsaActionEvent struct {
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 1
	PsaMessageActionType PSAMESSAGEACTIONTYPE `wam:"psa_message_action_type"` // field 2
	PsaCampaignId string `wam:"psa_campaign_id"` // field 4
	PsaMsgId string `wam:"psa_msg_id"` // field 5
}