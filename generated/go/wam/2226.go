const WamWebcProgressiveImage = 2226 // channel: regular

type WebcProgressiveImageEvent struct {
	WebcFirstRenderScans int64 `wam:"webc_first_render_scans"` // field 1
	WebcFirstRenderT string `wam:"webc_first_render_t"` // field 2
	WebcMidQualityT string `wam:"webc_mid_quality_t"` // field 3
	WebcFullQualityT string `wam:"webc_full_quality_t"` // field 4
}