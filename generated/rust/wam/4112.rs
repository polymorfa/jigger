pub const WAM_EXTENSION_SCREEN_PROGRESS: u32 = 4112;

#[derive(Debug, Default)]
pub struct ExtensionScreenProgressEvent {
    /// field 1, wire `biz_platform`
    pub biz_platform: Option<BIZPLATFORM>,
    /// field 2, wire `business_owner_jid`
    pub business_owner_jid: Option<String>,
    /// field 3, wire `embedded_error`
    pub embedded_error: Option<String>,
    /// field 4, wire `embedded_flow`
    pub embedded_flow: Option<String>,
    /// field 5, wire `embedded_flow_type`
    pub embedded_flow_type: Option<String>,
    /// field 6, wire `extension_category`
    pub extension_category: Option<String>,
    /// field 7, wire `extension_screen_length`
    pub extension_screen_length: Option<i64>,
    /// field 8, wire `extensions_flow_id`
    pub extensions_flow_id: Option<String>,
    /// field 9, wire `extensions_message_id`
    pub extensions_message_id: Option<String>,
    /// field 10, wire `extensions_session_id`
    pub extensions_session_id: Option<String>,
    /// field 11, wire `flow_status_exit`
    pub flow_status_exit: Option<String>,
    /// field 12, wire `hsm_category`
    pub hsm_category: Option<String>,
    /// field 13, wire `is_template`
    pub is_template: Option<bool>,
    /// field 14, wire `screen_progress`
    pub screen_progress: Option<String>,
    /// field 15, wire `sequence_number`
    pub sequence_number: Option<i64>,
    /// field 16, wire `hsm_tag`
    pub hsm_tag: Option<String>,
    /// field 17, wire `extension_restored_from_cache`
    pub extension_restored_from_cache: Option<bool>,
    /// field 18, wire `extension_status`
    pub extension_status: Option<String>,
    /// field 19, wire `entry_point_conversation_initiated`
    pub entry_point_conversation_initiated: Option<ENTRYPOINTCONVERSATIONINITIATED>,
    /// field 20, wire `entry_point_conversion_app`
    pub entry_point_conversion_app: Option<String>,
    /// field 21, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 22, wire `ad_context`
    pub ad_context: Option<String>,
    /// field 23, wire `flow_entry_point`
    pub flow_entry_point: Option<FLOWENTRYPOINT>,
    /// field 24, wire `click_sequence_number`
    pub click_sequence_number: Option<i64>,
    /// field 25, wire `is_success_screen`
    pub is_success_screen: Option<bool>,
    /// field 26, wire `layout_type`
    pub layout_type: Option<String>,
    /// field 27, wire `shopping_cart_items_count`
    pub shopping_cart_items_count: Option<i64>,
}