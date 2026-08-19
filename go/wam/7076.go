const WamBusinessTemplateRichOrderStatus = 7076 // channel: private

type BusinessTemplateRichOrderStatusEvent struct {
	ActionTypeRichOrderStatus string `wam:"action_type_rich_order_status"` // field 1
	BusinessJid string `wam:"business_jid"` // field 2
	ChatsFolderType CHATSFOLDERTYPE `wam:"chats_folder_type"` // field 3
	ContactType CONTACTTYPE `wam:"contact_type"` // field 4
	IsBizIntent bool `wam:"is_biz_intent"` // field 5
	IsInsubContact bool `wam:"is_insub_contact"` // field 6
	IsMuted bool `wam:"is_muted"` // field 7
	ReadReceiptsEnabled bool `wam:"read_receipts_enabled"` // field 8
	TemplateId string `wam:"template_id"` // field 9
}