pub const WAM_ORDER_DETAILS_ACTIONS_SMB: u32 = 3456;

#[derive(Debug, Default)]
pub struct OrderDetailsActionsSmbEvent {
    /// field 1, wire `accepted_pay_methods`
    pub accepted_pay_methods: Option<String>,
    /// field 2, wire `action_category`
    pub action_category: Option<String>,
    /// field 3, wire `extra_attributes`
    pub extra_attributes: Option<String>,
    /// field 4, wire `has_added_price`
    pub has_added_price: Option<bool>,
    /// field 5, wire `has_catalog`
    pub has_catalog: Option<bool>,
    /// field 6, wire `has_note`
    pub has_note: Option<bool>,
    /// field 7, wire `order_detail_entry_point`
    pub order_detail_entry_point: Option<String>,
    /// field 8, wire `order_details_creation_action`
    pub order_details_creation_action: Option<ORDERDETAILSCREATIONACTION>,
    /// field 9, wire `payment_status`
    pub payment_status: Option<bool>,
    /// field 10, wire `payment_type`
    pub payment_type: Option<String>,
    /// field 11, wire `order_eligible_to_send`
    pub order_eligible_to_send: Option<bool>,
    /// field 12, wire `sharing_order_status_events`
    pub sharing_order_status_events: Option<bool>,
    /// field 13, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 14, wire `last_message_direction`
    pub last_message_direction: Option<LASTMESSAGEDIRECTION>,
    /// field 15, wire `message_depth`
    pub message_depth: Option<i64>,
    /// field 16, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
}