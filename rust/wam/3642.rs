pub const WAM_WEBC_FTS_STORAGE: u32 = 3642;

#[derive(Debug, Default)]
pub struct WebcFtsStorageEvent {
    /// field 1, wire `fts_total_size`
    pub fts_total_size: Option<i64>,
}