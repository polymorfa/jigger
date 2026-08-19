const WamPinnedChatsMaxAlert = 7606 // channel: regular

type PinnedChatsMaxAlertEvent struct {
	AddToListSelected bool `wam:"add_to_list_selected"` // field 1
	PremiumStatus PREMIUMSTATUSTYPE `wam:"premium_status"` // field 2
	SubscribeSelected bool `wam:"subscribe_selected"` // field 3
}