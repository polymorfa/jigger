pub const WAM_WEBC_DB_OPEN: u32 = 1940;

#[derive(Debug, Default)]
pub struct WebcDbOpenEvent {
    /// field 1, wire `webc_db_name`
    pub webc_db_name: Option<String>,
    /// field 2, wire `webc_db_open_was_success`
    pub webc_db_open_was_success: Option<bool>,
    /// field 3, wire `webc_db_open_num_attempts`
    pub webc_db_open_num_attempts: Option<i64>,
}