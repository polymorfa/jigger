export const WamPsRichOrderStatusMessageInconsistentPayloadReceived = 6938 as const

export interface PsRichOrderStatusMessageInconsistentPayloadReceivedEvent {
  /** field 1, wire `business_jid` */
  businessJid?: string
  /** field 2, wire `has_currency_changed` */
  hasCurrencyChanged?: boolean
  /** field 3, wire `has_header_image_changed` */
  hasHeaderImageChanged?: boolean
  /** field 4, wire `has_item_image_changed` */
  hasItemImageChanged?: boolean
  /** field 5, wire `has_item_name_changed` */
  hasItemNameChanged?: boolean
  /** field 6, wire `has_item_number_changed` */
  hasItemNumberChanged?: boolean
  /** field 7, wire `has_item_price_changed` */
  hasItemPriceChanged?: boolean
  /** field 8, wire `has_item_quantity_changed` */
  hasItemQuantityChanged?: boolean
  /** field 9, wire `has_item_variant_changed` */
  hasItemVariantChanged?: boolean
}