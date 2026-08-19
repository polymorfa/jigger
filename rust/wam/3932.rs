pub const WAM_WEBC_BUTTERBAR_EVENT: u32 = 3932;

#[derive(Debug, Default)]
pub struct WebcButterbarEventEvent {
    /// field 1, wire `webc_butterbar_action`
    pub webc_butterbar_action: Option<WEBCBUTTERBARACTIONTYPE>,
    /// field 2, wire `webc_butterbar_type`
    pub webc_butterbar_type: Option<WEBCBUTTERBARBBTYPE>,
}