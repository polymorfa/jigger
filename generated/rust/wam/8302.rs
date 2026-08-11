pub const WAM_STATUS_POG_IMPRESSION: u32 = 8302;

#[derive(Debug, Default)]
pub struct StatusPogImpressionEvent {
    /// field 1, wire `cid`
    pub cid: Option<String>,
    /// field 2, wire `pog_index`
    pub pog_index: Option<i64>,
    /// field 3, wire `status_category`
    pub status_category: Option<STATUSCATEGORY>,
    /// field 4, wire `status_group_id`
    pub status_group_id: Option<String>,
    /// field 5, wire `status_poster_hash_id`
    pub status_poster_hash_id: Option<String>,
    /// field 6, wire `status_poster_id`
    pub status_poster_id: Option<String>,
    /// field 7, wire `status_view_entrypoint`
    pub status_view_entrypoint: Option<STATUSROWSECTION>,
    /// field 8, wire `ts_surface`
    pub ts_surface: Option<TSSURFACE>,
}