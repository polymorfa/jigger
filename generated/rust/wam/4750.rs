pub const WAM_ADDRESSING_MODE_MISMATCH: u32 = 4750;

#[derive(Debug, Default)]
pub struct AddressingModeMismatchEvent {
    /// field 1, wire `iq_response`
    pub iq_response: Option<IQRESPONSETYPE>,
    /// field 2, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 3, wire `notification_tag`
    pub notification_tag: Option<String>,
    /// field 5, wire `server_addressing_mode`
    pub server_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 6, wire `mismatch_origin`
    pub mismatch_origin: Option<MISMATCHORIGINTYPE>,
}