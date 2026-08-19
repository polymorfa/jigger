pub const WAM_MM_SIGNAL_SHARING_VERIFICATION_FS_EVENT: u32 = 6798;

#[derive(Debug, Default)]
pub struct MmSignalSharingVerificationFsEventEvent {
    /// field 1, wire `is_companion_device`
    pub is_companion_device: Option<bool>,
    /// field 2, wire `is_user_disclosed`
    pub is_user_disclosed: Option<bool>,
    /// field 3, wire `one_pd_signal_not_shared_reason`
    pub one_pd_signal_not_shared_reason: Option<ONEPDSIGNALNOTSHAREDREASON>,
    /// field 4, wire `signal_canceled_reason`
    pub signal_canceled_reason: Option<SIGNALCANCELEDREASON>,
    /// field 5, wire `signal_message_state`
    pub signal_message_state: Option<SIGNALMESSAGESTATE>,
    /// field 6, wire `signal_message_type`
    pub signal_message_type: Option<SIGNALMESSAGETYPE>,
    /// field 7, wire `signal_origin`
    pub signal_origin: Option<SIGNALORIGIN>,
    /// field 8, wire `signal_sharing_status`
    pub signal_sharing_status: Option<SIGNALSHARINGSTATUS>,
    /// field 9, wire `signal_surface`
    pub signal_surface: Option<SIGNALSURFACE>,
    /// field 10, wire `signal_type`
    pub signal_type: Option<SIGNALTYPE>,
    /// field 11, wire `sp_signal_not_shared_reason`
    pub sp_signal_not_shared_reason: Option<SPSIGNALNOTSHAREDREASON>,
    /// field 12, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 13, wire `is_shimming_signal`
    pub is_shimming_signal: Option<bool>,
    /// field 14, wire `signal_type_origin`
    pub signal_type_origin: Option<String>,
    /// field 15, wire `is_latest_conversion_token`
    pub is_latest_conversion_token: Option<bool>,
    /// field 16, wire `mm_conversation_depth`
    pub mm_conversation_depth: Option<i64>,
    /// field 17, wire `mm_conversation_repeat`
    pub mm_conversation_repeat: Option<i64>,
    /// field 18, wire `mm_direction_from`
    pub mm_direction_from: Option<MMDIRECTIONFROM>,
    /// field 19, wire `account_linked`
    pub account_linked: Option<bool>,
    /// field 20, wire `consent_source`
    pub consent_source: Option<CONSENTSOURCE>,
}