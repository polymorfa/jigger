const WamWebcStreamModeChange = 770 // channel: regular

type WebcStreamModeChangeEvent struct {
	WebcStreamMode WEBCSTREAMMODECODE `wam:"webc_stream_mode"` // field 1
}