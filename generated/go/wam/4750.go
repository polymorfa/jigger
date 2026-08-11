const WamAddressingModeMismatch = 4750 // channel: regular

type AddressingModeMismatchEvent struct {
	IqResponse IQRESPONSETYPE `wam:"iq_response"` // field 1
	LocalAddressingMode ADDRESSINGMODE `wam:"local_addressing_mode"` // field 2
	NotificationTag string `wam:"notification_tag"` // field 3
	ServerAddressingMode ADDRESSINGMODE `wam:"server_addressing_mode"` // field 5
	MismatchOrigin MISMATCHORIGINTYPE `wam:"mismatch_origin"` // field 6
}