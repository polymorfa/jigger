pub const WAM_OFFLINE_COUNT_TOO_HIGH: u32 = 2638;

#[derive(Debug, Default)]
pub struct OfflineCountTooHighEvent {
    /// field 1, wire `stanza_type`
    pub stanza_type: Option<STANZATYPE>,
    /// field 2, wire `offline_count`
    pub offline_count: Option<i64>,
    /// field 3, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 4, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 5, wire `receipt_stanza_type`
    pub receipt_stanza_type: Option<String>,
    /// field 6, wire `notification_stanza_type`
    pub notification_stanza_type: Option<String>,
    /// field 7, wire `call_stanza_type`
    pub call_stanza_type: Option<CALLSTANZATYPE>,
    /// field 8, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 9, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 10, wire `e2e_sender_type`
    pub e2e_sender_type: Option<E2EDEVICETYPE>,
}