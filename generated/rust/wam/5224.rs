pub const WAM_USERNAME_CREATION_ACTION: u32 = 5224;

#[derive(Debug, Default)]
pub struct UsernameCreationActionEvent {
    /// field 2, wire `username_creation_action_name`
    pub username_creation_action_name: Option<USERNAMECREATIONACTIONNAME>,
    /// field 3, wire `username_creation_current_screen`
    pub username_creation_current_screen: Option<USERNAMECREATIONCURRENTSCREEN>,
    /// field 4, wire `username_creation_entrypoint`
    pub username_creation_entrypoint: Option<USERNAMECREATIONENTRYPOINT>,
    /// field 6, wire `username_creation_username_session_id`
    pub username_creation_username_session_id: Option<String>,
    /// field 7, wire `username_creation_error_cd`
    pub username_creation_error_cd: Option<i64>,
    /// field 8, wire `username_source`
    pub username_source: Option<USERNAMESOURCE>,
    /// field 9, wire `username_creation_flow_type`
    pub username_creation_flow_type: Option<USERNAMECREATIONFLOWTYPE>,
    /// field 10, wire `linked_accounts_fb`
    pub linked_accounts_fb: Option<i64>,
    /// field 11, wire `linked_accounts_ig`
    pub linked_accounts_ig: Option<i64>,
    /// field 12, wire `username_link_type`
    pub username_link_type: Option<USERNAMELINKTYPE>,
    /// field 13, wire `username_creation_error_message`
    pub username_creation_error_message: Option<USERNAMECREATIONERRORMESSAGE>,
    /// field 14, wire `eligible_to_link`
    pub eligible_to_link: Option<bool>,
    /// field 15, wire `username_creation_deep_link_campaign`
    pub username_creation_deep_link_campaign: Option<String>,
    /// field 16, wire `username_creation_deep_link_channel`
    pub username_creation_deep_link_channel: Option<String>,
    /// field 17, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 18, wire `username_link_origin_surface`
    pub username_link_origin_surface: Option<USERNAMELINKORIGINSURFACE>,
}