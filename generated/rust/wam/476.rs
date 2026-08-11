pub const WAM_E2E_MESSAGE_SEND: u32 = 476;

#[derive(Debug, Default)]
pub struct E2eMessageSendEvent {
    /// field 1, wire `e2e_successful`
    pub e2e_successful: Option<bool>,
    /// field 2, wire `e2e_failure_reason`
    pub e2e_failure_reason: Option<E2EFAILUREREASON>,
    /// field 3, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 4, wire `e2e_destination`
    pub e2e_destination: Option<E2EDESTINATION>,
    /// field 5, wire `e2e_ciphertext_type`
    pub e2e_ciphertext_type: Option<E2ECIPHERTEXTTYPE>,
    /// field 6, wire `e2e_ciphertext_version`
    pub e2e_ciphertext_version: Option<i64>,
    /// field 7, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 8, wire `e2e_receiver_type`
    pub e2e_receiver_type: Option<DEVICETYPE>,
    /// field 9, wire `enc_retry_count`
    pub enc_retry_count: Option<i64>,
    /// field 10, wire `message_is_invisible`
    pub message_is_invisible: Option<bool>,
    /// field 11, wire `revoke_type`
    pub revoke_type: Option<REVOKETYPE>,
    /// field 12, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 13, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 14, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 15, wire `agent_engagement_type`
    pub agent_engagement_type: Option<AGENTENGAGEMENTENUMTYPE>,
    /// field 16, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 17, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 18, wire `e2e_backfill`
    pub e2e_backfill: Option<bool>,
    /// field 19, wire `e2e_receiver_device_type`
    pub e2e_receiver_device_type: Option<E2EDEVICETYPE>,
    /// field 20, wire `message_distribution_type`
    pub message_distribution_type: Option<MESSAGEDISTRIBUTIONENUMTYPE>,
    /// field 21, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 22, wire `group_encryption_state`
    pub group_encryption_state: Option<GROUPENCRYPTIONTYPE>,
    /// field 23, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 24, wire `is_simple_signal`
    pub is_simple_signal: Option<bool>,
    /// field 25, wire `is_pq`
    pub is_pq: Option<bool>,
    /// field 26, wire `initial_send_attempt_reachability_status`
    pub initial_send_attempt_reachability_status: Option<REACHABILITYSTATUS>,
    /// field 27, wire `session_scope`
    pub session_scope: Option<SESSIONSCOPETYPE>,
    /// field 28, wire `message_type_str`
    pub message_type_str: Option<String>,
}