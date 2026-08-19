pub const WAM_TS_NAVIGATION: u32 = 4334;

#[derive(Debug, Default)]
pub struct TsNavigationEvent {
    /// field 1, wire `group_size`
    pub group_size: Option<i64>,
    /// field 2, wire `navigation_destination`
    pub navigation_destination: Option<TSSURFACE>,
    /// field 3, wire `navigation_source`
    pub navigation_source: Option<TSSURFACE>,
    /// field 4, wire `relative_timestamp_ms`
    pub relative_timestamp_ms: Option<i64>,
    /// field 5, wire `ts_session_id`
    pub ts_session_id: Option<i64>,
    /// field 6, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 7, wire `thread_type`
    pub thread_type: Option<THREADTYPE>,
    /// field 19, wire `cid`
    pub cid: Option<String>,
    /// field 20, wire `smb_catalog_business_vertical`
    pub smb_catalog_business_vertical: Option<String>,
    /// field 21, wire `smb_catalog_is_catalog_visible`
    pub smb_catalog_is_catalog_visible: Option<bool>,
    /// field 22, wire `smb_catalog_is_toggle_cart`
    pub smb_catalog_is_toggle_cart: Option<bool>,
    /// field 23, wire `entry_point_conversation_initiated`
    pub entry_point_conversation_initiated: Option<ENTRYPOINTCONVERSATIONINITIATED>,
    /// field 24, wire `entry_point_conversion_app`
    pub entry_point_conversion_app: Option<String>,
    /// field 25, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 26, wire `is_cloudapi`
    pub is_cloudapi: Option<bool>,
    /// field 27, wire `is_onpremises`
    pub is_onpremises: Option<bool>,
    /// field 28, wire `is_smb`
    pub is_smb: Option<bool>,
    /// field 29, wire `is_catalog_visible`
    pub is_catalog_visible: Option<bool>,
    /// field 30, wire `is_meta_ai_thread`
    pub is_meta_ai_thread: Option<bool>,
    /// field 31, wire `referrer_action`
    pub referrer_action: Option<REFERRERACTION>,
    /// field 32, wire `ts_timestamp_ms`
    pub ts_timestamp_ms: Option<i64>,
    /// field 33, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 34, wire `navigation_destination_product_area`
    pub navigation_destination_product_area: Option<PRODUCTAREA>,
    /// field 35, wire `navigation_destination_view_name`
    pub navigation_destination_view_name: Option<String>,
    /// field 36, wire `is_canonical_ent_present`
    pub is_canonical_ent_present: Option<bool>,
    /// field 37, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 38, wire `canonical_ent_last_validation_ts_ms`
    pub canonical_ent_last_validation_ts_ms: Option<i64>,
    /// field 39, wire `ai_session_id`
    pub ai_session_id: Option<String>,
    /// field 40, wire `network_radio_type_event_level`
    pub network_radio_type_event_level: Option<RADIOTYPE>,
    /// field 41, wire `network_is_wifi_op_number`
    pub network_is_wifi_op_number: Option<i64>,
    /// field 42, wire `network_radio_type_op_number`
    pub network_radio_type_op_number: Option<i64>,
    /// field 43, wire `network_is_wifi_canonical_op_number`
    pub network_is_wifi_canonical_op_number: Option<i64>,
    /// field 44, wire `network_radio_type_canonical_op_number`
    pub network_radio_type_canonical_op_number: Option<i64>,
}