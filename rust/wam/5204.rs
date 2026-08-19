pub const WAM_COEX_PRIVACY_SYS_MSG: u32 = 5204;

#[derive(Debug, Default)]
pub struct CoexPrivacySysMsgEvent {
    /// field 1, wire `coex_sys_msg_business_id`
    pub coex_sys_msg_business_id: Option<String>,
    /// field 2, wire `coex_sys_msg_insertion_error_code`
    pub coex_sys_msg_insertion_error_code: Option<i64>,
    /// field 3, wire `coex_sys_msg_insertion_error_msg`
    pub coex_sys_msg_insertion_error_msg: Option<String>,
    /// field 4, wire `coex_sys_msg_insertion_success`
    pub coex_sys_msg_insertion_success: Option<bool>,
    /// field 5, wire `coex_sys_msg_is_self`
    pub coex_sys_msg_is_self: Option<bool>,
    /// field 6, wire `coex_sys_msg_multi_device_id`
    pub coex_sys_msg_multi_device_id: Option<i64>,
    /// field 7, wire `coex_sys_msg_state_transition_attempt`
    pub coex_sys_msg_state_transition_attempt: Option<COEXSYSMSGSTATETRANSITIONATTEMPT>,
    /// field 8, wire `coex_status_reply_privacy_disclaimer_user_action`
    pub coex_status_reply_privacy_disclaimer_user_action: Option<COEXSTATUSREPLYPRIVACYDISCLAIMERUSERACTION>,
    /// field 9, wire `coex_sys_msg_insertion_channel`
    pub coex_sys_msg_insertion_channel: Option<COEXSYSMSGINSERTIONCHANNEL>,
}