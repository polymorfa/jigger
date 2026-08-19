pub const WAM_E2E_RETRY_REJECT: u32 = 3578;

#[derive(Debug, Default)]
pub struct E2eRetryRejectEvent {
    /// field 1, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 2, wire `msg_retry_count`
    pub msg_retry_count: Option<i64>,
    /// field 3, wire `retry_reject_reason`
    pub retry_reject_reason: Option<RETRYREJECTREASON>,
    /// field 4, wire `retry_revoke`
    pub retry_revoke: Option<bool>,
    /// field 5, wire `sender_device_type`
    pub sender_device_type: Option<DEVICETYPE>,
    /// field 6, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 7, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 8, wire `is_pq`
    pub is_pq: Option<bool>,
    /// field 9, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 10, wire `e2e_sender_type`
    pub e2e_sender_type: Option<E2EDEVICETYPE>,
    /// field 11, wire `message_key_hash`
    pub message_key_hash: Option<String>,
    /// field 12, wire `session_scope`
    pub session_scope: Option<SESSIONSCOPETYPE>,
    /// field 13, wire `pq_fallback_reason`
    pub pq_fallback_reason: Option<PQFALLBACKREASON>,
}