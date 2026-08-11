pub const WAM_EPHEMERAL_SYNC_RESPONSE_SEND: u32 = 4778;

#[derive(Debug, Default)]
pub struct EphemeralSyncResponseSendEvent {
    /// field 1, wire `client_disappearing_mode_initiator`
    pub client_disappearing_mode_initiator: Option<DISAPPEARINGCHATINITIATORTYPE>,
    /// field 2, wire `client_ephemerality_duration`
    pub client_ephemerality_duration: Option<i64>,
    /// field 3, wire `client_ephemerality_initiator`
    pub client_ephemerality_initiator: Option<EPHEMERALITYINITIATORTYPE>,
    /// field 4, wire `client_ephemerality_setting_timestamp`
    pub client_ephemerality_setting_timestamp: Option<i64>,
    /// field 5, wire `client_ephemerality_trigger_action`
    pub client_ephemerality_trigger_action: Option<EPHEMERALITYTRIGGERACTIONTYPE>,
    /// field 6, wire `esr_disappearing_mode_initiator`
    pub esr_disappearing_mode_initiator: Option<DISAPPEARINGCHATINITIATORTYPE>,
    /// field 7, wire `esr_ephemerality_duration`
    pub esr_ephemerality_duration: Option<i64>,
    /// field 8, wire `esr_ephemerality_initiator`
    pub esr_ephemerality_initiator: Option<EPHEMERALITYINITIATORTYPE>,
    /// field 9, wire `esr_ephemerality_setting_timestamp`
    pub esr_ephemerality_setting_timestamp: Option<i64>,
    /// field 10, wire `esr_ephemerality_trigger_action`
    pub esr_ephemerality_trigger_action: Option<EPHEMERALITYTRIGGERACTIONTYPE>,
    /// field 11, wire `esr_failure_reason`
    pub esr_failure_reason: Option<ESRFAILUREREASONTYPE>,
    /// field 12, wire `esr_send_attempt`
    pub esr_send_attempt: Option<i64>,
    /// field 13, wire `esr_send_result`
    pub esr_send_result: Option<ESRSENDRESULTTYPE>,
    /// field 14, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 15, wire `message_disappearing_mode_initiator`
    pub message_disappearing_mode_initiator: Option<DISAPPEARINGCHATINITIATORTYPE>,
    /// field 16, wire `message_ephemerality_duration`
    pub message_ephemerality_duration: Option<i64>,
    /// field 17, wire `message_ephemerality_initiator`
    pub message_ephemerality_initiator: Option<EPHEMERALITYINITIATORTYPE>,
    /// field 18, wire `message_ephemerality_setting_timestamp`
    pub message_ephemerality_setting_timestamp: Option<i64>,
    /// field 19, wire `message_ephemerality_trigger_action`
    pub message_ephemerality_trigger_action: Option<EPHEMERALITYTRIGGERACTIONTYPE>,
    /// field 20, wire `thread_id`
    pub thread_id: Option<String>,
}