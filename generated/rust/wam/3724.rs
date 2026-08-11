pub const WAM_INCOMING_MESSAGE_DROP: u32 = 3724;

#[derive(Debug, Default)]
pub struct IncomingMessageDropEvent {
    /// field 1, wire `e2e_ciphertext_type`
    pub e2e_ciphertext_type: Option<E2ECIPHERTEXTTYPE>,
    /// field 2, wire `e2e_destination`
    pub e2e_destination: Option<E2EDESTINATION>,
    /// field 3, wire `e2e_sender_type`
    pub e2e_sender_type: Option<E2EDEVICETYPE>,
    /// field 4, wire `message_drop_reason`
    pub message_drop_reason: Option<MESSAGEDROPREASONTYPE>,
    /// field 5, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 6, wire `offline`
    pub offline: Option<bool>,
    /// field 7, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 8, wire `revoke_type`
    pub revoke_type: Option<REVOKETYPE>,
    /// field 9, wire `e2e_failure_reason`
    pub e2e_failure_reason: Option<E2EFAILUREREASON>,
    /// field 10, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 11, wire `offline_count`
    pub offline_count: Option<i64>,
    /// field 12, wire `agent_engagement_type`
    pub agent_engagement_type: Option<AGENTENGAGEMENTENUMTYPE>,
    /// field 13, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 14, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 15, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 16, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 18, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 19, wire `is_simple_signal`
    pub is_simple_signal: Option<bool>,
    /// field 20, wire `is_pq`
    pub is_pq: Option<bool>,
    /// field 21, wire `session_scope`
    pub session_scope: Option<SESSIONSCOPETYPE>,
    /// field 22, wire `processing_deferred`
    pub processing_deferred: Option<bool>,
    /// field 23, wire `sender_platform`
    pub sender_platform: Option<PLATFORMTYPE>,
    /// field 24, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}