pub const WAM_PREKEYS_DEPLETION: u32 = 3014;

#[derive(Debug, Default)]
pub struct PrekeysDepletionEvent {
    /// field 1, wire `prekeys_fetch_reason`
    pub prekeys_fetch_reason: Option<PREKEYSFETCHCONTEXT>,
    /// field 2, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 3, wire `device_size_bucket`
    pub device_size_bucket: Option<SIZEBUCKET>,
}