pub const WAM_MD_APP_STATE_DIRTY_BITS: u32 = 2520;

#[derive(Debug, Default)]
pub struct MdAppStateDirtyBitsEvent {
    /// field 2, wire `dirty_bits_false_positive`
    pub dirty_bits_false_positive: Option<bool>,
}