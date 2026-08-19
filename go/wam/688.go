const WamWebcResourceLoad = 688 // channel: regular

type WebcResourceLoadEvent struct {
	WebcResourceName string `wam:"webc_resource_name"` // field 1
	WebcResourceDuration string `wam:"webc_resource_duration"` // field 2
	WebcResourceCached bool `wam:"webc_resource_cached"` // field 3
}