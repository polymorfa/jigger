pub const WAM_ATTACHMENT_TRAY_ACTIONS: u32 = 3980;

#[derive(Debug, Default)]
pub struct AttachmentTrayActionsEvent {
    /// field 1, wire `action_duration_ms`
    pub action_duration_ms: Option<i64>,
    /// field 2, wire `attachment_tray_action`
    pub attachment_tray_action: Option<ATTACHMENTTRAYACTIONTYPE>,
    /// field 3, wire `attachment_tray_action_target`
    pub attachment_tray_action_target: Option<ATTACHMENTTRAYACTIONTARGETTYPE>,
    /// field 4, wire `group_size_bucket`
    pub group_size_bucket: Option<CLIENTGROUPSIZEBUCKET>,
    /// field 5, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 6, wire `is_successful`
    pub is_successful: Option<bool>,
    /// field 7, wire `send_media_type`
    pub send_media_type: Option<SENDMEDIATYPETYPE>,
    /// field 8, wire `send_time`
    pub send_time: Option<i64>,
    /// field 9, wire `action_thread_type`
    pub action_thread_type: Option<ACTIONTHREADTYPETYPE>,
}