pub const WAM_WEBC_MENU: u32 = 2504;

#[derive(Debug, Default)]
pub struct WebcMenuEvent {
    /// field 2, wire `webc_menu_action`
    pub webc_menu_action: Option<WEBCMENUTYPE>,
    /// field 3, wire `webc_menu_item_label`
    pub webc_menu_item_label: Option<WEBCMENUITEMLABEL>,
}