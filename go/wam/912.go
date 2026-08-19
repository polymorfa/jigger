const WamWebcMediaAnalyzed = 912 // channel: regular

type WebcMediaAnalyzedEvent struct {
	WebcMediaSupported bool `wam:"webc_media_supported"` // field 1
	WebcMediaExtensions string `wam:"webc_media_extensions"` // field 2
	WebcMediaAnalyzeT string `wam:"webc_media_analyze_t"` // field 3
}