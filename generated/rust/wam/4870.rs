pub const WAM_META_VERIFIED_INTERACTION: u32 = 4870;

#[derive(Debug, Default)]
pub struct MetaVerifiedInteractionEvent {
    /// field 1, wire `business_owner_jid`
    pub business_owner_jid: Option<String>,
    /// field 2, wire `business_owner_platform`
    pub business_owner_platform: Option<BUSINESSOWNERPLATFORM>,
    /// field 3, wire `meta_verified_interaction_action`
    pub meta_verified_interaction_action: Option<METAVERIFIEDINTERACTIONACTION>,
    /// field 4, wire `meta_verified_interaction_asset_type`
    pub meta_verified_interaction_asset_type: Option<METAVERIFIEDINTERACTIONASSETTYPE>,
    /// field 5, wire `meta_verified_interaction_referral`
    pub meta_verified_interaction_referral: Option<METAVERIFIEDINTERACTIONREFERRAL>,
    /// field 6, wire `meta_verified_interaction_surface`
    pub meta_verified_interaction_surface: Option<METAVERIFIEDINTERACTIONSURFACE>,
    /// field 7, wire `is_meta_verified_subscribed`
    pub is_meta_verified_subscribed: Option<bool>,
    /// field 8, wire `is_self_view`
    pub is_self_view: Option<bool>,
}