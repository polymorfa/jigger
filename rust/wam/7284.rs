pub const WAM_BROADCAST_INVALID_CHANNELS_CONTEXT_SOURCE_MESSAGE_DROP: u32 = 7284;

#[derive(Debug, Default)]
pub struct BroadcastInvalidChannelsContextSourceMessageDropEvent {
    /// field 1, wire `was_dropped`
    pub was_dropped: Option<bool>,
}