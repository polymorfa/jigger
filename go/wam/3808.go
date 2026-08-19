const WamPnhRequestRevealAction = 3808 // channel: regular

type PnhRequestRevealActionEvent struct {
	PnhAction PNHACTIONTYPE `wam:"pnh_action"` // field 1
	PnhChatParty PNHMESSAGECHATPARTY `wam:"pnh_chat_party"` // field 2
	PnhChatType PNHCHATTYPETYPE `wam:"pnh_chat_type"` // field 3
	PnhEntryPoint PNHENTRYPOINTTYPE `wam:"pnh_entry_point"` // field 4
	ThreadId string `wam:"thread_id"` // field 5
}