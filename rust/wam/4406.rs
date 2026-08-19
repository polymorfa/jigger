pub const WAM_CTWA_CONSUMER_DISCLOSURE: u32 = 4406;

#[derive(Debug, Default)]
pub struct CtwaConsumerDisclosureEvent {
    /// field 1, wire `disclosure_action`
    pub disclosure_action: Option<DISCLOSUREACTION>,
    /// field 2, wire `disclosure_type`
    pub disclosure_type: Option<DISCLOSURETYPE>,
    /// field 3, wire `ctwa_consumer_disclosure_version`
    pub ctwa_consumer_disclosure_version: Option<i64>,
    /// field 4, wire `disclosure_entry_point`
    pub disclosure_entry_point: Option<DISCLOSUREENTRYPOINTTYPE>,
    /// field 5, wire `disclosure_context`
    pub disclosure_context: Option<DISCLOSURECONTEXTTYPE>,
    /// field 6, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
}