const WamWebContactListStartNewChat = 4560 // channel: regular

type WebContactListStartNewChatEvent struct {
	WebContactListStartNewChatSearch bool `wam:"web_contact_list_start_new_chat_search"` // field 1
	WebContactListStartNewChatType WEBCONTACTLISTSTARTNEWCHATTYPE `wam:"web_contact_list_start_new_chat_type"` // field 2
}