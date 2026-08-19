pub const WAM_WA_OLD_CODE: u32 = 3940;

#[derive(Debug, Default)]
pub struct WaOldCodeEvent {
    /// field 1, wire `device_id`
    pub device_id: Option<String>,
}