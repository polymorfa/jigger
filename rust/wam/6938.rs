pub const WAM_PS_RICH_ORDER_STATUS_MESSAGE_INCONSISTENT_PAYLOAD_RECEIVED: u32 = 6938;

#[derive(Debug, Default)]
pub struct PsRichOrderStatusMessageInconsistentPayloadReceivedEvent {
    /// field 1, wire `business_jid`
    pub business_jid: Option<String>,
    /// field 2, wire `has_currency_changed`
    pub has_currency_changed: Option<bool>,
    /// field 3, wire `has_header_image_changed`
    pub has_header_image_changed: Option<bool>,
    /// field 4, wire `has_item_image_changed`
    pub has_item_image_changed: Option<bool>,
    /// field 5, wire `has_item_name_changed`
    pub has_item_name_changed: Option<bool>,
    /// field 6, wire `has_item_number_changed`
    pub has_item_number_changed: Option<bool>,
    /// field 7, wire `has_item_price_changed`
    pub has_item_price_changed: Option<bool>,
    /// field 8, wire `has_item_quantity_changed`
    pub has_item_quantity_changed: Option<bool>,
    /// field 9, wire `has_item_variant_changed`
    pub has_item_variant_changed: Option<bool>,
}