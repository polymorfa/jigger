pub const WAM_WEB_ARKOSE_TOKEN: u32 = 7028;

#[derive(Debug, Default)]
pub struct WebArkoseTokenEvent {
    /// field 1, wire `token`
    pub token: Option<String>,
    /// field 2, wire `md_session_id`
    pub md_session_id: Option<String>,
    /// field 3, wire `md_client_session_id`
    pub md_client_session_id: Option<String>,
}