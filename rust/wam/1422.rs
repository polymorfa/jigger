pub const WAM_LABEL_EVENT: u32 = 1422;

#[derive(Debug, Default)]
pub struct LabelEventEvent {
    /// field 1, wire `label_target`
    pub label_target: Option<LABELTARGETS>,
    /// field 2, wire `label_operation`
    pub label_operation: Option<LABELOPERATIONS>,
    /// field 3, wire `predefined_label_number`
    pub predefined_label_number: Option<i64>,
    /// field 4, wire `label_count`
    pub label_count: Option<i64>,
    /// field 5, wire `items_labeled_count`
    pub items_labeled_count: Option<i64>,
    /// field 6, wire `label_operation_entry_point`
    pub label_operation_entry_point: Option<String>,
    /// field 9, wire `custom_label_title`
    pub custom_label_title: Option<String>,
    /// field 10, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 11, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
    /// field 12, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 13, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 14, wire `last_message_direction`
    pub last_message_direction: Option<LASTMESSAGEDIRECTION>,
    /// field 15, wire `message_depth`
    pub message_depth: Option<i64>,
    /// field 16, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 17, wire `extra_attributes`
    pub extra_attributes: Option<String>,
    /// field 18, wire `user_action_target`
    pub user_action_target: Option<String>,
    /// field 19, wire `smb_list_feature_name`
    pub smb_list_feature_name: Option<SMBLISTFEATURENAMETYPE>,
    /// field 20, wire `smb_list_surface`
    pub smb_list_surface: Option<SMBLISTSURFACETYPE>,
}