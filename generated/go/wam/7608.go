const WamRingtoneScreen = 7608 // channel: regular

type RingtoneScreenEvent struct {
	PremiumRingtonesDownloadedCount int64 `wam:"premium_ringtones_downloaded_count"` // field 1
	RingtoneChangeApplied bool `wam:"ringtone_change_applied"` // field 2
	RingtoneId string `wam:"ringtone_id"` // field 3
	RingtoneSelectionCancelled bool `wam:"ringtone_selection_cancelled"` // field 4
	RingtoneSource RINGTONEENTRYTYPE `wam:"ringtone_source"` // field 5
	RingtoneSubscribeSelected bool `wam:"ringtone_subscribe_selected"` // field 6
	RingtoneReset bool `wam:"ringtone_reset"` // field 7
}