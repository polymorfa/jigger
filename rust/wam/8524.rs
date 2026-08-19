pub const WAM_USERNAME_UNKNOWN_USER_DISPLAYED: u32 = 8524;

#[derive(Debug, Default)]
pub struct UsernameUnknownUserDisplayedEvent {
    /// field 1, wire `unknown_user_display_context`
    pub unknown_user_display_context: Option<String>,
    /// field 2, wire `client_ts_ms`
    pub client_ts_ms: Option<i64>,
    /// field 3, wire `duration_in_secs`
    pub duration_in_secs: Option<i64>,
    /// field 4, wire `has_pn`
    pub has_pn: Option<bool>,
    /// field 5, wire `has_push`
    pub has_push: Option<bool>,
    /// field 6, wire `has_un`
    pub has_un: Option<bool>,
    /// field 7, wire `is_first_display`
    pub is_first_display: Option<bool>,
    /// field 8, wire `jid_type`
    pub jid_type: Option<String>,
    /// field 9, wire `unknown_user_display_lid`
    pub unknown_user_display_lid: Option<String>,
    /// field 10, wire `in_db`
    pub in_db: Option<bool>,
}