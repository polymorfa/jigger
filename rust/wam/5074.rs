pub const WAM_WEB_DB_TABLE_USAGE: u32 = 5074;

#[derive(Debug, Default)]
pub struct WebDbTableUsageEvent {
    /// field 1, wire `offline_session_id`
    pub offline_session_id: Option<String>,
    /// field 2, wire `web_scenario`
    pub web_scenario: Option<WEBSCENARIOCODE>,
    /// field 3, wire `web_table`
    pub web_table: Option<String>,
    /// field 4, wire `web_table_log_reason`
    pub web_table_log_reason: Option<WEBTABLELOGREASONCODE>,
    /// field 5, wire `web_table_read_count`
    pub web_table_read_count: Option<i64>,
    /// field 6, wire `web_table_write_count`
    pub web_table_write_count: Option<i64>,
}