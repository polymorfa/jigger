pub const WAM_MD_LINK_DEVICE_COMPANION: u32 = 2576;

#[derive(Debug, Default)]
pub struct MdLinkDeviceCompanionEvent {
    /// field 1, wire `md_session_id`
    pub md_session_id: Option<String>,
    /// field 4, wire `md_link_device_companion_stage`
    pub md_link_device_companion_stage: Option<MDLINKDEVICECOMPANIONSTAGE>,
    /// field 5, wire `md_was_upgraded`
    pub md_was_upgraded: Option<bool>,
    /// field 6, wire `md_link_device_companion_error_code`
    pub md_link_device_companion_error_code: Option<i64>,
    /// field 7, wire `md_timestamp_s`
    pub md_timestamp_s: Option<i64>,
    /// field 8, wire `md_duration_s`
    pub md_duration_s: Option<i64>,
    /// field 9, wire `md_reg_attempt_id`
    pub md_reg_attempt_id: Option<String>,
    /// field 10, wire `md_companion_ref_hash`
    pub md_companion_ref_hash: Option<String>,
    /// field 11, wire `md_link_device_experience_id`
    pub md_link_device_experience_id: Option<i64>,
    /// field 12, wire `application_state`
    pub application_state: Option<APPLICATIONSTATE>,
    /// field 13, wire `app_context`
    pub app_context: Option<String>,
    /// field 14, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 15, wire `user_locale`
    pub user_locale: Option<String>,
}