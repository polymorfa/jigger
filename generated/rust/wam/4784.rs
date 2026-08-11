pub const WAM_WEB_DB_VERSIONS_SOURCE: u32 = 4784;

#[derive(Debug, Default)]
pub struct WebDbVersionsSourceEvent {
    /// field 1, wire `web_db_version_source`
    pub web_db_version_source: Option<WEBDBVERSIONSOURCETYPE>,
    /// field 2, wire `web_schema_initiator`
    pub web_schema_initiator: Option<WEBSCHEMAINITIATORTYPE>,
}