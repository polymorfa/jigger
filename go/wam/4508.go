const WamSmbPaidMessagesButtonLogger = 4508 // channel: private

type SmbPaidMessagesButtonLoggerEvent struct {
	BusinessPhoneNumber int64 `wam:"business_phone_number"` // field 1
	PmButtonCount int64 `wam:"pm_button_count"` // field 2
	PmButtonEventType PMBUTTONEVENTTYPE `wam:"pm_button_event_type"` // field 3
	PmButtonIndex int64 `wam:"pm_button_index"` // field 4
	PmButtonType PMBUTTONTYPE `wam:"pm_button_type"` // field 5
	PmServerCampaignId string `wam:"pm_server_campaign_id"` // field 6
	PmIsTrackableLink string `wam:"pm_is_trackable_link"` // field 7
}