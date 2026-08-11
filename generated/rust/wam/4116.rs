pub const WAM_WEBC_PWA_EVENT: u32 = 4116;

#[derive(Debug, Default)]
pub struct WebcPwaEventEvent {
    /// field 2, wire `webc_pwa_action`
    pub webc_pwa_action: Option<WEBCPWAACTIONTYPE>,
}