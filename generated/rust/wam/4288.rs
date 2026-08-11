pub const WAM_BLOCK_EVENTS_FS: u32 = 4288;

#[derive(Debug, Default)]
pub struct BlockEventsFsEvent {
    /// field 1, wire `block_entry_point`
    pub block_entry_point: Option<BLOCKENTRYPOINT>,
    /// field 2, wire `block_event_action_type`
    pub block_event_action_type: Option<BLOCKEVENTACTIONTYPE>,
    /// field 3, wire `block_event_is_suspicious`
    pub block_event_is_suspicious: Option<bool>,
    /// field 4, wire `block_event_is_unsub`
    pub block_event_is_unsub: Option<bool>,
    /// field 5, wire `past_call`
    pub past_call: Option<bool>,
    /// field 6, wire `past_call_result`
    pub past_call_result: Option<CALLRESULTTYPE>,
}