pub const WAM_BIZ_CATALOG_VIEW: u32 = 3006;

#[derive(Debug, Default)]
pub struct BizCatalogViewEvent {
    /// field 1, wire `catalog_view_action`
    pub catalog_view_action: Option<CATALOGVIEWACTION>,
    /// field 2, wire `catalog_entry_point`
    pub catalog_entry_point: Option<CATALOGENTRYPOINT>,
    /// field 3, wire `catalog_session_id`
    pub catalog_session_id: Option<String>,
    /// field 4, wire `order_id`
    pub order_id: Option<String>,
    /// field 5, wire `is_order_msg_attached`
    pub is_order_msg_attached: Option<bool>,
    /// field 6, wire `quantity`
    pub quantity: Option<i64>,
    /// field 7, wire `is_new_product_added_to_cart`
    pub is_new_product_added_to_cart: Option<bool>,
    /// field 8, wire `catalog_report_reason_code`
    pub catalog_report_reason_code: Option<String>,
    /// field 9, wire `product_id`
    pub product_id: Option<String>,
    /// field 10, wire `catalog_owner_jid`
    pub catalog_owner_jid: Option<String>,
    /// field 11, wire `catalog_event_sampled`
    pub catalog_event_sampled: Option<bool>,
    /// field 12, wire `deep_link_open_from`
    pub deep_link_open_from: Option<DEEPLINKOPENFROM>,
    /// field 13, wire `cart_toggle`
    pub cart_toggle: Option<bool>,
    /// field 14, wire `biz_platform`
    pub biz_platform: Option<BIZPLATFORM>,
    /// field 15, wire `collection_id`
    pub collection_id: Option<String>,
    /// field 16, wire `collection_index`
    pub collection_index: Option<String>,
    /// field 17, wire `product_index`
    pub product_index: Option<String>,
    /// field 18, wire `sequence_number`
    pub sequence_number: Option<i64>,
    /// field 19, wire `catalog_category_id`
    pub catalog_category_id: Option<String>,
    /// field 20, wire `entry_point_conversion_app`
    pub entry_point_conversion_app: Option<String>,
    /// field 21, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 22, wire `entry_point_conversation_initiated`
    pub entry_point_conversation_initiated: Option<ENTRYPOINTCONVERSATIONINITIATED>,
    /// field 23, wire `has_variants`
    pub has_variants: Option<bool>,
    /// field 24, wire `variant_types`
    pub variant_types: Option<String>,
    /// field 25, wire `variants_extra_attributes`
    pub variants_extra_attributes: Option<String>,
    /// field 26, wire `ad_id`
    pub ad_id: Option<String>,
}