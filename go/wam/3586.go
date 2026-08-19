const WamCtwaActionBannerUnderstand = 3586 // channel: private

type CtwaActionBannerUnderstandEvent struct {
	BannerIdentifier string `wam:"banner_identifier"` // field 1
	BannerLocale string `wam:"banner_locale"` // field 2
	ClientLocale string `wam:"client_locale"` // field 3
	HasLocalLink bool `wam:"has_local_link"` // field 4
	HasUniversalLink bool `wam:"has_universal_link"` // field 5
	InvalidLink string `wam:"invalid_link"` // field 6
	LwiFlowIdentifier string `wam:"lwi_flow_identifier"` // field 7
	PreferredLink PREFERREDLINKTYPE `wam:"preferred_link"` // field 8
	ValidLocale bool `wam:"valid_locale"` // field 9
	ValidNotification bool `wam:"valid_notification"` // field 10
	NotificationLogId string `wam:"notification_log_id"` // field 11
}