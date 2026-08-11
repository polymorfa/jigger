pub const WAM_WEBC_STREAM_MODE_CHANGE: u32 = 770;

#[derive(Debug, Default)]
pub struct WebcStreamModeChangeEvent {
    /// field 1, wire `webc_stream_mode`
    pub webc_stream_mode: Option<WEBCSTREAMMODECODE>,
}