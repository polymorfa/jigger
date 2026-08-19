pub const WAM_SUBSCRIPTION_USER_ACTION: u32 = 7458;

#[derive(Debug, Default)]
pub struct SubscriptionUserActionEvent {
    /// field 1, wire `wsua_action`
    pub wsua_action: Option<WSUAACTION>,
    /// field 2, wire `wsua_action_target`
    pub wsua_action_target: Option<WSUAACTIONTARGET>,
    /// field 3, wire `wsua_product_type`
    pub wsua_product_type: Option<WSUAPRODUCTTYPE>,
    /// field 4, wire `wsua_quick_promotion_id`
    pub wsua_quick_promotion_id: Option<String>,
    /// field 5, wire `wsua_referral`
    pub wsua_referral: Option<WSUAREFERRAL>,
    /// field 6, wire `wsua_screen`
    pub wsua_screen: Option<WSUASCREEN>,
    /// field 7, wire `wsua_screen_element`
    pub wsua_screen_element: Option<WSUASCREENELEMENT>,
    /// field 8, wire `wsua_session_id`
    pub wsua_session_id: Option<String>,
    /// field 9, wire `wsua_benefits_shown`
    pub wsua_benefits_shown: Option<String>,
    /// field 10, wire `wsua_active_subscriptions`
    pub wsua_active_subscriptions: Option<String>,
    /// field 11, wire `wsua_benefit_group`
    pub wsua_benefit_group: Option<String>,
    /// field 12, wire `wsua_tier`
    pub wsua_tier: Option<WSUATIER>,
}