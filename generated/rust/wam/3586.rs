pub const WAM_CTWA_ACTION_BANNER_UNDERSTAND: u32 = 3586;

#[derive(Debug, Default)]
pub struct CtwaActionBannerUnderstandEvent {
    /// field 1, wire `banner_identifier`
    pub banner_identifier: Option<String>,
    /// field 2, wire `banner_locale`
    pub banner_locale: Option<String>,
    /// field 3, wire `client_locale`
    pub client_locale: Option<String>,
    /// field 4, wire `has_local_link`
    pub has_local_link: Option<bool>,
    /// field 5, wire `has_universal_link`
    pub has_universal_link: Option<bool>,
    /// field 6, wire `invalid_link`
    pub invalid_link: Option<String>,
    /// field 7, wire `lwi_flow_identifier`
    pub lwi_flow_identifier: Option<String>,
    /// field 8, wire `preferred_link`
    pub preferred_link: Option<PREFERREDLINKTYPE>,
    /// field 9, wire `valid_locale`
    pub valid_locale: Option<bool>,
    /// field 10, wire `valid_notification`
    pub valid_notification: Option<bool>,
    /// field 11, wire `notification_log_id`
    pub notification_log_id: Option<String>,
}