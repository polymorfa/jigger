pub const WAM_E2E_MESSAGE_RECV: u32 = 478;

#[derive(Debug, Default)]
pub struct E2eMessageRecvEvent {
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
    /// field 8, wire `e2e_sender_type`
    pub e2e_sender_type: Option<E2EDEVICETYPE>,
    /// field 9, wire `offline`
    pub offline: Option<bool>,
    /// field 10, wire `revoke_type`
    pub revoke_type: Option<REVOKETYPE>,
    /// field 11, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 12, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 13, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 14, wire `stanza_type`
    pub stanza_type: Option<STANZATYPE>,
    /// field 15, wire `agent_engagement_type`
    pub agent_engagement_type: Option<AGENTENGAGEMENTENUMTYPE>,
    /// field 16, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 17, wire `message_addressing_mode`
    pub message_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 18, wire `server_addressing_mode`
    pub server_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 19, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 20, wire `is_hosted_chat`
    pub is_hosted_chat: Option<bool>,
    /// field 21, wire `message_distribution_type`
    pub message_distribution_type: Option<MESSAGEDISTRIBUTIONENUMTYPE>,
    /// field 22, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 23, wire `group_encryption_state`
    pub group_encryption_state: Option<GROUPENCRYPTIONTYPE>,
    /// field 25, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 26, wire `is_simple_signal`
    pub is_simple_signal: Option<bool>,
    /// field 27, wire `is_pq`
    pub is_pq: Option<bool>,
    /// field 28, wire `session_scope`
    pub session_scope: Option<SESSIONSCOPETYPE>,
    /// field 29, wire `processing_deferred`
    pub processing_deferred: Option<bool>,
    /// field 30, wire `sender_platform`
    pub sender_platform: Option<PLATFORMTYPE>,
    /// field 31, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}