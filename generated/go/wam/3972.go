const WamSmbDataSharingConsentScreen = 3972 // channel: regular

type SmbDataSharingConsentScreenEvent struct {
	SmbDataSharingConsentScreenType SMBDATASHARINGCONSENTSCREENTYPE `wam:"smb_data_sharing_consent_screen_type"` // field 1
	SmbDataSharingConsentScreenVersion int64 `wam:"smb_data_sharing_consent_screen_version"` // field 2
	SmbDataSharingConsentScreenEntryPoint SMBDATASHARINGCONSENTSCREENENTRYPOINT `wam:"smb_data_sharing_consent_screen_entry_point"` // field 3
	ElapsedTimeMs int64 `wam:"elapsed_time_ms"` // field 4
	PreviousImpressionCount int64 `wam:"previous_impression_count"` // field 5
	PreviousOptOutImpressionCount int64 `wam:"previous_opt_out_impression_count"` // field 6
	SmbDataSharingConsentDisclosureVersion int64 `wam:"smb_data_sharing_consent_disclosure_version"` // field 7
}