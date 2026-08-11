pub const WAM_MERCHANT_COMMERCE_EVENT: u32 = 4688;

#[derive(Debug, Default)]
pub struct MerchantCommerceEventEvent {
    /// field 1, wire `accepted_payment_methods`
    pub accepted_payment_methods: Option<String>,
    /// field 2, wire `ad_id`
    pub ad_id: Option<String>,
    /// field 3, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 4, wire `biz_platform`
    pub biz_platform: Option<BIZPLATFORM>,
    /// field 6, wire `commerce_experience`
    pub commerce_experience: Option<String>,
    /// field 7, wire `commerce_interaction_action`
    pub commerce_interaction_action: Option<String>,
    /// field 8, wire `commerce_payment_status`
    pub commerce_payment_status: Option<String>,
    /// field 9, wire `commerce_session_id`
    pub commerce_session_id: Option<String>,
    /// field 10, wire `commerce_surface`
    pub commerce_surface: Option<String>,
    /// field 11, wire `extra_attributes`
    pub extra_attributes: Option<String>,
    /// field 12, wire `is_ctwa_originated`
    pub is_ctwa_originated: Option<bool>,
    /// field 13, wire `is_eligible_for_ad_signal`
    pub is_eligible_for_ad_signal: Option<bool>,
    /// field 14, wire `merchant_has_catalog`
    pub merchant_has_catalog: Option<bool>,
    /// field 15, wire `merchant_is_discoverable`
    pub merchant_is_discoverable: Option<bool>,
    /// field 17, wire `p2m_flow`
    pub p2m_flow: Option<String>,
    /// field 18, wire `referral`
    pub referral: Option<String>,
    /// field 19, wire `sequence_id`
    pub sequence_id: Option<i64>,
    /// field 20, wire `commerce_flow_id`
    pub commerce_flow_id: Option<String>,
    /// field 21, wire `commerce_interaction_action_type`
    pub commerce_interaction_action_type: Option<String>,
    /// field 22, wire `commerce_order_status`
    pub commerce_order_status: Option<String>,
}