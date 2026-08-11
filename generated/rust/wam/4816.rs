pub const WAM_WEB_DB_VERSION_NON_ANONYMOUS: u32 = 4816;

#[derive(Debug, Default)]
pub struct WebDbVersionNonAnonymousEvent {
    /// field 1, wire `web_db_name`
    pub web_db_name: Option<WEBDBNAMETYPE>,
    /// field 2, wire `web_db_version_number`
    pub web_db_version_number: Option<i64>,
}