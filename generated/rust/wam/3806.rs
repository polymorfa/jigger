pub const WAM_PNH_DAILY: u32 = 3806;

#[derive(Debug, Default)]
pub struct PnhDailyEvent {
    /// field 1, wire `community_id`
    pub community_id: Option<String>,
    /// field 2, wire `pnh_indicator_clicks_chat`
    pub pnh_indicator_clicks_chat: Option<i64>,
    /// field 3, wire `pnh_indicator_clicks_info_screen`
    pub pnh_indicator_clicks_info_screen: Option<i64>,
    /// field 4, wire `reaction_delete_count`
    pub reaction_delete_count: Option<i64>,
    /// field 5, wire `reaction_open_tray_count`
    pub reaction_open_tray_count: Option<i64>,
    /// field 6, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 7, wire `mapping_missing`
    pub mapping_missing: Option<i64>,
    /// field 8, wire `total_contacts`
    pub total_contacts: Option<i64>,
}