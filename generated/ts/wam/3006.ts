export const WamBizCatalogView = 3006 as const

export interface BizCatalogViewEvent {
  /** field 1, wire `catalog_view_action` */
  catalogViewAction?: CATALOGVIEWACTION
  /** field 2, wire `catalog_entry_point` */
  catalogEntryPoint?: CATALOGENTRYPOINT
  /** field 3, wire `catalog_session_id` */
  catalogSessionId?: string
  /** field 4, wire `order_id` */
  orderId?: string
  /** field 5, wire `is_order_msg_attached` */
  isOrderMsgAttached?: boolean
  /** field 6, wire `quantity` */
  quantity?: number
  /** field 7, wire `is_new_product_added_to_cart` */
  isNewProductAddedToCart?: boolean
  /** field 8, wire `catalog_report_reason_code` */
  catalogReportReasonCode?: string
  /** field 9, wire `product_id` */
  productId?: string
  /** field 10, wire `catalog_owner_jid` */
  catalogOwnerJid?: string
  /** field 11, wire `catalog_event_sampled` */
  catalogEventSampled?: boolean
  /** field 12, wire `deep_link_open_from` */
  deepLinkOpenFrom?: DEEPLINKOPENFROM
  /** field 13, wire `cart_toggle` */
  cartToggle?: boolean
  /** field 14, wire `biz_platform` */
  bizPlatform?: BIZPLATFORM
  /** field 15, wire `collection_id` */
  collectionId?: string
  /** field 16, wire `collection_index` */
  collectionIndex?: string
  /** field 17, wire `product_index` */
  productIndex?: string
  /** field 18, wire `sequence_number` */
  sequenceNumber?: number
  /** field 19, wire `catalog_category_id` */
  catalogCategoryId?: string
  /** field 20, wire `entry_point_conversion_app` */
  entryPointConversionApp?: string
  /** field 21, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 22, wire `entry_point_conversation_initiated` */
  entryPointConversationInitiated?: ENTRYPOINTCONVERSATIONINITIATED
  /** field 23, wire `has_variants` */
  hasVariants?: boolean
  /** field 24, wire `variant_types` */
  variantTypes?: string
  /** field 25, wire `variants_extra_attributes` */
  variantsExtraAttributes?: string
  /** field 26, wire `ad_id` */
  adId?: string
}