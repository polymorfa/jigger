const WamWebcMediaLoad = 1202 // channel: regular

type WebcMediaLoadEvent struct {
	WebcMediaLoadT string `wam:"webc_media_load_t"` // field 1
	WebcMediaLoadResult WEBCMEDIALOADRESULTCODE `wam:"webc_media_load_result"` // field 2
}