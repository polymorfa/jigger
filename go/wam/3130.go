const WamSenderKeyExpired = 3130 // channel: regular

type SenderKeyExpiredEvent struct {
	ChatType MESSAGECHATTYPE `wam:"chat_type"` // field 1
	DeviceSizeBucket SIZEBUCKET `wam:"device_size_bucket"` // field 2
	ExpiryReason EXPIRYREASON `wam:"expiry_reason"` // field 3
}