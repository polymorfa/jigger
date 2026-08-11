const WamSmbDataSharingConsentSetting = 3974 // channel: regular

type SmbDataSharingConsentSettingEvent struct {
	SmbDataSharingConsentSettingEntryPoint SMBDATASHARINGCONSENTSETTINGENTRYPOINT `wam:"smb_data_sharing_consent_setting_entry_point"` // field 1
	SmbDataSharingConsentSettingType bool `wam:"smb_data_sharing_consent_setting_type"` // field 2
	SmbDataSharingConsentSettingVersion int64 `wam:"smb_data_sharing_consent_setting_version"` // field 3
}