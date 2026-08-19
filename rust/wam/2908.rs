pub const WAM_WA_SHOPS_MANAGEMENT: u32 = 2908;

#[derive(Debug, Default)]
pub struct WaShopsManagementEvent {
    /// field 1, wire `shops_management_action`
    pub shops_management_action: Option<SHOPSMANAGEMENTACTION>,
    /// field 2, wire `is_shops_product_preview_visible`
    pub is_shops_product_preview_visible: Option<bool>,
    /// field 3, wire `shops_seller_jid`
    pub shops_seller_jid: Option<String>,
}