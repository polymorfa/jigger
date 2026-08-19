const WamPrekeysDepletion = 3014 // channel: regular

type PrekeysDepletionEvent struct {
	PrekeysFetchReason PREKEYSFETCHCONTEXT `wam:"prekeys_fetch_reason"` // field 1
	MessageType MESSAGETYPE `wam:"message_type"` // field 2
	DeviceSizeBucket SIZEBUCKET `wam:"device_size_bucket"` // field 3
}