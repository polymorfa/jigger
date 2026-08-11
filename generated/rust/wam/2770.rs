pub const WAM_LWI_ENTRY_TAP: u32 = 2770;

#[derive(Debug, Default)]
pub struct LwiEntryTapEvent {
    /// field 1, wire `lwi_flow_id`
    pub lwi_flow_id: Option<String>,
    /// field 2, wire `catalog_session_id`
    pub catalog_session_id: Option<String>,
    /// field 3, wire `lwi_entry_point`
    pub lwi_entry_point: Option<LWIENTRYPOINT>,
    /// field 4, wire `business_tools_session_id`
    pub business_tools_session_id: Option<String>,
    /// field 5, wire `user_has_linked_fb_page`
    pub user_has_linked_fb_page: Option<bool>,
    /// field 6, wire `status_session_id`
    pub status_session_id: Option<i64>,
    /// field 7, wire `lwi_sub_entry_point`
    pub lwi_sub_entry_point: Option<LWISUBENTRYPOINT>,
    /// field 10, wire `wa_campaign_id`
    pub wa_campaign_id: Option<String>,
    /// field 11, wire `items_count`
    pub items_count: Option<i64>,
    /// field 12, wire `status_type_media`
    pub status_type_media: Option<STATUSTYPEMEDIA>,
    /// field 13, wire `previous_lwi_flow_id`
    pub previous_lwi_flow_id: Option<String>,
    /// field 14, wire `active_items_count`
    pub active_items_count: Option<i64>,
    /// field 15, wire `archived_items_count`
    pub archived_items_count: Option<i64>,
    /// field 16, wire `notification_log_id`
    pub notification_log_id: Option<String>,
    /// field 17, wire `lwi_extras`
    pub lwi_extras: Option<String>,
    /// field 18, wire `status_id`
    pub status_id: Option<String>,
    /// field 19, wire `web_flow_type`
    pub web_flow_type: Option<WEBFLOWTYPE>,
}