pub const WAM_EPHEMERAL_SETTING_CHANGE: u32 = 2370;

#[derive(Debug, Default)]
pub struct EphemeralSettingChangeEvent {
    /// field 1, wire `chat_ephemerality_duration`
    pub chat_ephemerality_duration: Option<i64>,
    /// field 2, wire `previous_ephemerality_duration`
    pub previous_ephemerality_duration: Option<i64>,
    /// field 3, wire `ephemeral_setting_entry_point`
    pub ephemeral_setting_entry_point: Option<EPHEMERALSETTINGENTRYPOINTTYPE>,
    /// field 5, wire `ephemeral_setting_group_size`
    pub ephemeral_setting_group_size: Option<PRECISESIZEBUCKET>,
    /// field 6, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 7, wire `after_read_duration`
    pub after_read_duration: Option<i64>,
    /// field 9, wire `error_code`
    pub error_code: Option<i64>,
    /// field 10, wire `is_after_read`
    pub is_after_read: Option<bool>,
    /// field 11, wire `is_success`
    pub is_success: Option<bool>,
    /// field 12, wire `previous_ephemerality_type`
    pub previous_ephemerality_type: Option<PREVIOUSEPHEMERALITYTYPE>,
}