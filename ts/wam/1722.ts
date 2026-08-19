export const WamCatalogBiz = 1722 as const

export interface CatalogBizEvent {
  /** field 1, wire `catalog_biz_action` */
  catalogBizAction?: CATALOGBIZACTION
  /** field 2, wire `product_id` */
  productId?: string
  /** field 3, wire `catalog_session_id` */
  catalogSessionId?: string
  /** field 4, wire `catalog_appeal_reason` */
  catalogAppealReason?: string
  /** field 5, wire `error_code` */
  errorCode?: number
  /** field 6, wire `product_count` */
  productCount?: number
  /** field 7, wire `catalog_entry_point` */
  catalogEntryPoint?: CATALOGENTRYPOINT
  /** field 8, wire `deep_link_open_from` */
  deepLinkOpenFrom?: DEEPLINKOPENFROM
  /** field 9, wire `order_id` */
  orderId?: string
  /** field 10, wire `is_order_msg_attached` */
  isOrderMsgAttached?: boolean
  /** field 11, wire `quantity` */
  quantity?: number
  /** field 12, wire `product_ids` */
  productIds?: string
  /** field 13, wire `cart_toggle` */
  cartToggle?: boolean
  /** field 14, wire `collection_id` */
  collectionId?: string
  /** field 15, wire `collection_index` */
  collectionIndex?: string
  /** field 16, wire `product_index` */
  productIndex?: string
  /** field 18, wire `collection_count` */
  collectionCount?: number
  /** field 19, wire `ad_id` */
  adId?: string
  /** field 20, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 21, wire `last_message_direction` */
  lastMessageDirection?: LASTMESSAGEDIRECTION
  /** field 22, wire `message_depth` */
  messageDepth?: number
  /** field 23, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 24, wire `extra_attributes` */
  extraAttributes?: string
}