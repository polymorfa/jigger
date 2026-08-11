pub const WAM_SMB_DATA_SHARING_CONSENT_SETTING: u32 = 3974;

#[derive(Debug, Default)]
pub struct SmbDataSharingConsentSettingEvent {
    /// field 1, wire `smb_data_sharing_consent_setting_entry_point`
    pub smb_data_sharing_consent_setting_entry_point: Option<SMBDATASHARINGCONSENTSETTINGENTRYPOINT>,
    /// field 2, wire `smb_data_sharing_consent_setting_type`
    pub smb_data_sharing_consent_setting_type: Option<bool>,
    /// field 3, wire `smb_data_sharing_consent_setting_version`
    pub smb_data_sharing_consent_setting_version: Option<i64>,
}