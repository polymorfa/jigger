pub const WAM_SMB_LIST_EVENT: u32 = 7102;

#[derive(Debug, Default)]
pub struct SmbListEventEvent {
    /// field 1, wire `custom_list_title`
    pub custom_list_title: Option<String>,
    /// field 2, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 3, wire `label_operation`
    pub label_operation: Option<LABELOPERATIONS>,
    /// field 4, wire `last_message_direction`
    pub last_message_direction: Option<LASTMESSAGEDIRECTION>,
    /// field 5, wire `list_id`
    pub list_id: Option<i64>,
    /// field 6, wire `list_index`
    pub list_index: Option<i64>,
    /// field 7, wire `list_type`
    pub list_type: Option<LISTTYPE>,
    /// field 8, wire `message_depth`
    pub message_depth: Option<i64>,
    /// field 9, wire `predefined_id`
    pub predefined_id: Option<i64>,
    /// field 10, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 11, wire `update_entry_point`
    pub update_entry_point: Option<UPDATEENTRYPOINT>,
    /// field 12, wire `bulk_labeling`
    pub bulk_labeling: Option<bool>,
    /// field 13, wire `current_list_state`
    pub current_list_state: Option<String>,
    /// field 14, wire `label_target`
    pub label_target: Option<LABELTARGETS>,
    /// field 15, wire `lists_applied`
    pub lists_applied: Option<String>,
    /// field 16, wire `lists_removed`
    pub lists_removed: Option<String>,
    /// field 17, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 18, wire `extra_attributes`
    pub extra_attributes: Option<String>,
    /// field 19, wire `user_action_target`
    pub user_action_target: Option<String>,
    /// field 20, wire `smb_list_feature_name`
    pub smb_list_feature_name: Option<SMBLISTFEATURENAMETYPE>,
    /// field 21, wire `smb_list_surface`
    pub smb_list_surface: Option<SMBLISTSURFACETYPE>,
}