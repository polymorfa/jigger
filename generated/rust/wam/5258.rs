pub const WAM_WEBC_NAVBAR: u32 = 5258;

#[derive(Debug, Default)]
pub struct WebcNavbarEvent {
    /// field 1, wire `webc_navbar_item_label`
    pub webc_navbar_item_label: Option<WEBCNAVBARITEMLABEL>,
}