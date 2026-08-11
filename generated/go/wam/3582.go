const WamChatPsaRemove = 3582 // channel: regular

type ChatPsaRemoveEvent struct {
	LastReceivedMediaType MEDIATYPE `wam:"last_received_media_type"` // field 2
	LastReceivedMessageTs string `wam:"last_received_message_ts"` // field 4
	PsaMessageRemoveAction PSAMESSAGEREMOVEACTION `wam:"psa_message_remove_action"` // field 5
	PsaMessageRemoveEntryPoint PSAMESSAGEREMOVEENTRYPOINT `wam:"psa_message_remove_entry_point"` // field 6
	WaOfficialAccountName WAOFFICIALACCOUNTNAME `wam:"wa_official_account_name"` // field 7
	LastReceivedMsgId string `wam:"last_received_msg_id"` // field 8
	PsaCampaignId string `wam:"psa_campaign_id"` // field 9
	PsaBlockReason PSABLOCKREASON `wam:"psa_block_reason"` // field 10
}