pub const WAM_SMB_USER_JOURNEY: u32 = 5462;

#[derive(Debug, Default)]
pub struct SmbUserJourneyEvent {
    /// field 1, wire `action_type`
    pub action_type: Option<CHATFILTERACTIONTYPES>,
    /// field 2, wire `contact_is_saved`
    pub contact_is_saved: Option<bool>,
    /// field 3, wire `entry_point`
    pub entry_point: Option<ENTRYPOINT>,
    /// field 4, wire `extra_attributes`
    pub extra_attributes: Option<String>,
    /// field 5, wire `opposite_platform`
    pub opposite_platform: Option<OPPOSITEPLATFORMENUM>,
    /// field 7, wire `seq_id`
    pub seq_id: Option<i64>,
    /// field 8, wire `smb_feature_name`
    pub smb_feature_name: Option<SMBFEATURENAMEENUM>,
    /// field 9, wire `smb_user_session_id`
    pub smb_user_session_id: Option<String>,
    /// field 10, wire `surface`
    pub surface: Option<SURFACETYPE>,
    /// field 11, wire `user_action_target`
    pub user_action_target: Option<String>,
    /// field 12, wire `recipient_size`
    pub recipient_size: Option<i64>,
    /// field 13, wire `smb_user_action_type`
    pub smb_user_action_type: Option<SMBUSERACTIONTYPEENUM>,
    /// field 14, wire `prev_surface`
    pub prev_surface: Option<SURFACETYPE>,
    /// field 18, wire `entry_point_details`
    pub entry_point_details: Option<String>,
    /// field 19, wire `has_catalog`
    pub has_catalog: Option<bool>,
    /// field 20, wire `is_coex_account`
    pub is_coex_account: Option<bool>,
    /// field 21, wire `is_mv_subscriber`
    pub is_mv_subscriber: Option<bool>,
    /// field 22, wire `bb_tier`
    pub bb_tier: Option<BBTIERTYPE>,
}