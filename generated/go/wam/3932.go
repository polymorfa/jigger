const WamWebcButterbarEvent = 3932 // channel: regular

type WebcButterbarEventEvent struct {
	WebcButterbarAction WEBCBUTTERBARACTIONTYPE `wam:"webc_butterbar_action"` // field 1
	WebcButterbarType WEBCBUTTERBARBBTYPE `wam:"webc_butterbar_type"` // field 2
}