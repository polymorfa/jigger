const WamPinnedChats = 7630 // channel: regular

type PinnedChatsEvent struct {
	PinnedChatNumber int64 `wam:"pinned_chat_number"` // field 1
	PinnedChatsPremiumStatus PINNEDCHATSPREMIUMSTATUSTYPE `wam:"pinned_chats_premium_status"` // field 2
}