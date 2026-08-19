pub const WAM_SMB_DATA_SHARING_CONSENT_SCREEN: u32 = 3972;

#[derive(Debug, Default)]
pub struct SmbDataSharingConsentScreenEvent {
    /// field 1, wire `smb_data_sharing_consent_screen_type`
    pub smb_data_sharing_consent_screen_type: Option<SMBDATASHARINGCONSENTSCREENTYPE>,
    /// field 2, wire `smb_data_sharing_consent_screen_version`
    pub smb_data_sharing_consent_screen_version: Option<i64>,
    /// field 3, wire `smb_data_sharing_consent_screen_entry_point`
    pub smb_data_sharing_consent_screen_entry_point: Option<SMBDATASHARINGCONSENTSCREENENTRYPOINT>,
    /// field 4, wire `elapsed_time_ms`
    pub elapsed_time_ms: Option<i64>,
    /// field 5, wire `previous_impression_count`
    pub previous_impression_count: Option<i64>,
    /// field 6, wire `previous_opt_out_impression_count`
    pub previous_opt_out_impression_count: Option<i64>,
    /// field 7, wire `smb_data_sharing_consent_disclosure_version`
    pub smb_data_sharing_consent_disclosure_version: Option<i64>,
}