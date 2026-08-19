const WamWebcImgError = 1700 // channel: regular

type WebcImgErrorEvent struct {
	WebcImgErrorCode string `wam:"webc_img_error_code"` // field 1
}