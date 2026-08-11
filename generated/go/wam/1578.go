const WamBannerEvent = 1578 // channel: regular

type BannerEventEvent struct {
	BannerType BANNERTYPES `wam:"banner_type"` // field 1
	BannerOperation BANNEROPERATIONS `wam:"banner_operation"` // field 2
	BannerId string `wam:"banner_id"` // field 3
	DeviceId string `wam:"device_id"` // field 4
	NotificationLogId string `wam:"notification_log_id"` // field 5
}