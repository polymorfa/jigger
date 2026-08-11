const WamUsernameExposed = 7614 // channel: regular

type UsernameExposedEvent struct {
	UsernameExposureContext string `wam:"username_exposure_context"` // field 1
}