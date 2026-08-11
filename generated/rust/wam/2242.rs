pub const WAM_SIGN_CREDENTIAL: u32 = 2242;

#[derive(Debug, Default)]
pub struct SignCredentialEvent {
    /// field 1, wire `sign_credential_result`
    pub sign_credential_result: Option<SIGNCREDENTIALRESULT>,
    /// field 2, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 3, wire `sign_credential_t`
    pub sign_credential_t: Option<String>,
    /// field 4, wire `overall_t`
    pub overall_t: Option<String>,
    /// field 5, wire `wa_connected_to_chatd`
    pub wa_connected_to_chatd: Option<bool>,
    /// field 6, wire `application_state`
    pub application_state: Option<APPLICATIONSTATE>,
    /// field 7, wire `project_code`
    pub project_code: Option<PROJECTCODE>,
    /// field 8, wire `is_from_wameta`
    pub is_from_wameta: Option<bool>,
}