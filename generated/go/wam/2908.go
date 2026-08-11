const WamWaShopsManagement = 2908 // channel: regular

type WaShopsManagementEvent struct {
	ShopsManagementAction SHOPSMANAGEMENTACTION `wam:"shops_management_action"` // field 1
	IsShopsProductPreviewVisible bool `wam:"is_shops_product_preview_visible"` // field 2
	ShopsSellerJid string `wam:"shops_seller_jid"` // field 3
}