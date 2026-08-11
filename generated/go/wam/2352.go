const WamWebcMediaErrorUnknownDetails = 2352 // channel: regular

type WebcMediaErrorUnknownDetailsEvent struct {
	MediaId int64 `wam:"media_id"` // field 1
	WebcMediaOperation WEBCMEDIAOPERATIONCODE `wam:"webc_media_operation"` // field 2
	WebcMediaErrorName string `wam:"webc_media_error_name"` // field 3
	WebcMediaErrorMessage string `wam:"webc_media_error_message"` // field 4
}