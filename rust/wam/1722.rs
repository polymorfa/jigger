pub const WAM_CATALOG_BIZ: u32 = 1722;

#[derive(Debug, Default)]
pub struct CatalogBizEvent {
    /// field 1, wire `catalog_biz_action`
    pub catalog_biz_action: Option<CATALOGBIZACTION>,
    /// field 2, wire `product_id`
    pub product_id: Option<String>,
    /// field 3, wire `catalog_session_id`
    pub catalog_session_id: Option<String>,
    /// field 4, wire `catalog_appeal_reason`
    pub catalog_appeal_reason: Option<String>,
    /// field 5, wire `error_code`
    pub error_code: Option<i64>,
    /// field 6, wire `product_count`
    pub product_count: Option<i64>,
    /// field 7, wire `catalog_entry_point`
    pub catalog_entry_point: Option<CATALOGENTRYPOINT>,
    /// field 8, wire `deep_link_open_from`
    pub deep_link_open_from: Option<DEEPLINKOPENFROM>,
    /// field 9, wire `order_id`
    pub order_id: Option<String>,
    /// field 10, wire `is_order_msg_attached`
    pub is_order_msg_attached: Option<bool>,
    /// field 11, wire `quantity`
    pub quantity: Option<i64>,
    /// field 12, wire `product_ids`
    pub product_ids: Option<String>,
    /// field 13, wire `cart_toggle`
    pub cart_toggle: Option<bool>,
    /// field 14, wire `collection_id`
    pub collection_id: Option<String>,
    /// field 15, wire `collection_index`
    pub collection_index: Option<String>,
    /// field 16, wire `product_index`
    pub product_index: Option<String>,
    /// field 18, wire `collection_count`
    pub collection_count: Option<i64>,
    /// field 19, wire `ad_id`
    pub ad_id: Option<String>,
    /// field 20, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 21, wire `last_message_direction`
    pub last_message_direction: Option<LASTMESSAGEDIRECTION>,
    /// field 22, wire `message_depth`
    pub message_depth: Option<i64>,
    /// field 23, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 24, wire `extra_attributes`
    pub extra_attributes: Option<String>,
}