const WamMdRetryFromUnknownDevice = 2178 // channel: regular

type MdRetryFromUnknownDeviceEvent struct {
	SenderType DEVICETYPE `wam:"sender_type"` // field 1
	Offline bool `wam:"offline"` // field 2
}