pub const WAM_MD_RETRY_FROM_UNKNOWN_DEVICE: u32 = 2178;

#[derive(Debug, Default)]
pub struct MdRetryFromUnknownDeviceEvent {
    /// field 1, wire `sender_type`
    pub sender_type: Option<DEVICETYPE>,
    /// field 2, wire `offline`
    pub offline: Option<bool>,
}