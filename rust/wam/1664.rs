pub const WAM_WEBC_LOGIN: u32 = 1664;

#[derive(Debug, Default)]
pub struct WebcLoginEvent {
    /// field 1, wire `webc_qr_codes`
    pub webc_qr_codes: Option<i64>,
    /// field 2, wire `webc_qr_load_t`
    pub webc_qr_load_t: Option<String>,
    /// field 3, wire `webc_login_t`
    pub webc_login_t: Option<String>,
    /// field 4, wire `webc_sync_t`
    pub webc_sync_t: Option<String>,
    /// field 5, wire `webc_sync_message_count`
    pub webc_sync_message_count: Option<i64>,
    /// field 6, wire `webc_sync_message_t`
    pub webc_sync_message_t: Option<String>,
    /// field 7, wire `webc_sync_message_size`
    pub webc_sync_message_size: Option<i64>,
    /// field 8, wire `webc_sync_chat_count`
    pub webc_sync_chat_count: Option<i64>,
    /// field 9, wire `webc_sync_chat_t`
    pub webc_sync_chat_t: Option<String>,
    /// field 10, wire `webc_sync_chat_size`
    pub webc_sync_chat_size: Option<i64>,
    /// field 11, wire `webc_sync_contact_count`
    pub webc_sync_contact_count: Option<i64>,
    /// field 12, wire `webc_sync_contact_t`
    pub webc_sync_contact_t: Option<String>,
    /// field 13, wire `webc_sync_contact_size`
    pub webc_sync_contact_size: Option<i64>,
    /// field 14, wire `webc_browser_network_type`
    pub webc_browser_network_type: Option<String>,
    /// field 15, wire `webc_browser_storage_quota_bytes`
    pub webc_browser_storage_quota_bytes: Option<i64>,
    /// field 16, wire `webc_browser_storage_quota_used_bytes`
    pub webc_browser_storage_quota_used_bytes: Option<i64>,
    /// field 17, wire `webc_persistent_login_enabled`
    pub webc_persistent_login_enabled: Option<bool>,
}