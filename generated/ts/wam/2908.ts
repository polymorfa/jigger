export const WamWaShopsManagement = 2908 as const

export interface WaShopsManagementEvent {
  /** field 1, wire `shops_management_action` */
  shopsManagementAction?: SHOPSMANAGEMENTACTION
  /** field 2, wire `is_shops_product_preview_visible` */
  isShopsProductPreviewVisible?: boolean
  /** field 3, wire `shops_seller_jid` */
  shopsSellerJid?: string
}