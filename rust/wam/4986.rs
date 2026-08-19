pub const WAM_META_VERIFIED_USER_ACTION: u32 = 4986;

#[derive(Debug, Default)]
pub struct MetaVerifiedUserActionEvent {
    /// field 1, wire `meta_verified_user_action_action`
    pub meta_verified_user_action_action: Option<METAVERIFIEDUSERACTIONACTION>,
    /// field 2, wire `meta_verified_user_action_asset_type`
    pub meta_verified_user_action_asset_type: Option<METAVERIFIEDUSERACTIONASSETTYPE>,
    /// field 3, wire `meta_verified_user_action_referral`
    pub meta_verified_user_action_referral: Option<METAVERIFIEDUSERACTIONREFERRAL>,
    /// field 4, wire `meta_verified_user_action_surface`
    pub meta_verified_user_action_surface: Option<METAVERIFIEDUSERACTIONSURFACE>,
    /// field 5, wire `meta_verified_user_action_result`
    pub meta_verified_user_action_result: Option<METAVERIFIEDUSERACTIONRESULT>,
    /// field 6, wire `meta_verified_user_action_interaction_error`
    pub meta_verified_user_action_interaction_error: Option<METAVERIFIEDUSERACTIONINTERACTIONERROR>,
    /// field 7, wire `meta_verified_user_action_green_dot_visible`
    pub meta_verified_user_action_green_dot_visible: Option<bool>,
    /// field 8, wire `meta_verified_user_action_error_details`
    pub meta_verified_user_action_error_details: Option<METAVERIFIEDUSERACTIONERRORDETAILS>,
    /// field 9, wire `meta_verified_user_action_is_subscribed`
    pub meta_verified_user_action_is_subscribed: Option<bool>,
    /// field 10, wire `user_action_error_code`
    pub user_action_error_code: Option<String>,
    /// field 11, wire `user_action_session_id`
    pub user_action_session_id: Option<String>,
    /// field 12, wire `meta_verified_quick_promotion_id`
    pub meta_verified_quick_promotion_id: Option<String>,
    /// field 13, wire `meta_verified_user_action_extra`
    pub meta_verified_user_action_extra: Option<String>,
    /// field 14, wire `meta_verified_user_action_banner_type`
    pub meta_verified_user_action_banner_type: Option<METAVERIFIEDUSERACTIONBANNERTYPE>,
    /// field 15, wire `meta_verified_user_action_verified_badge_visible`
    pub meta_verified_user_action_verified_badge_visible: Option<bool>,
    /// field 16, wire `is_profile_locked`
    pub is_profile_locked: Option<bool>,
    /// field 17, wire `meta_verified_locked_profile_field`
    pub meta_verified_locked_profile_field: Option<METAVERIFIEDLOCKEDPROFILEFIELD>,
    /// field 18, wire `meta_verified_locked_profile_field_eligibility`
    pub meta_verified_locked_profile_field_eligibility: Option<String>,
    /// field 19, wire `is_vlevel_high`
    pub is_vlevel_high: Option<bool>,
    /// field 20, wire `meta_verified_dialog_interaction`
    pub meta_verified_dialog_interaction: Option<METAVERIFIEDDIALOGINTERACTION>,
    /// field 21, wire `meta_verified_locked_field_edit_outcome`
    pub meta_verified_locked_field_edit_outcome: Option<METAVERIFIEDLOCKEDFIELDEDITOUTCOME>,
    /// field 22, wire `is_retry_attempt`
    pub is_retry_attempt: Option<bool>,
}