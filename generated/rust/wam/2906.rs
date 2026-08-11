pub const WAM_LWI_ENTRY_POINT_IMPRESSION: u32 = 2906;

#[derive(Debug, Default)]
pub struct LwiEntryPointImpressionEvent {
    /// field 1, wire `catalog_session_id`
    pub catalog_session_id: Option<String>,
    /// field 2, wire `business_tools_session_id`
    pub business_tools_session_id: Option<String>,
    /// field 3, wire `lwi_entry_point`
    pub lwi_entry_point: Option<LWIENTRYPOINT>,
    /// field 4, wire `user_has_linked_fb_page`
    pub user_has_linked_fb_page: Option<bool>,
    /// field 5, wire `status_session_id`
    pub status_session_id: Option<i64>,
    /// field 6, wire `lwi_sub_entry_point`
    pub lwi_sub_entry_point: Option<LWISUBENTRYPOINT>,
    /// field 7, wire `items_count`
    pub items_count: Option<i64>,
    /// field 8, wire `active_items_count`
    pub active_items_count: Option<i64>,
    /// field 9, wire `archived_items_count`
    pub archived_items_count: Option<i64>,
    /// field 10, wire `lwi_extras`
    pub lwi_extras: Option<String>,
    /// field 11, wire `status_id`
    pub status_id: Option<String>,
    /// field 12, wire `lwi_entry_point_impression_action`
    pub lwi_entry_point_impression_action: Option<LWIENTRYPOINTIMPRESSIONACTION>,
}