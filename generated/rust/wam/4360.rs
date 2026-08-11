pub const WAM_WHATSAPP_QUICK_PROMOTION_CLIENT_ELIGIBILITY_WATERFALL: u32 = 4360;

#[derive(Debug, Default)]
pub struct WhatsappQuickPromotionClientEligibilityWaterfallEvent {
    /// field 1, wire `eligibility_status`
    pub eligibility_status: Option<bool>,
    /// field 2, wire `promotion_id`
    pub promotion_id: Option<String>,
    /// field 3, wire `qp_failure_reason`
    pub qp_failure_reason: Option<String>,
    /// field 4, wire `step`
    pub step: Option<String>,
    /// field 5, wire `instance_log_data`
    pub instance_log_data: Option<String>,
    /// field 6, wire `client_extra_data`
    pub client_extra_data: Option<String>,
}