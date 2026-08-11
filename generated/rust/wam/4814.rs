pub const WAM_WEB_DB_LOAD_FROM_VERSION_FAILURE_NON_ANONYMOUS: u32 = 4814;

#[derive(Debug, Default)]
pub struct WebDbLoadFromVersionFailureNonAnonymousEvent {
    /// field 1, wire `web_db_loader`
    pub web_db_loader: Option<WEBDBLOADERTYPE>,
    /// field 2, wire `web_db_name`
    pub web_db_name: Option<WEBDBNAMETYPE>,
}