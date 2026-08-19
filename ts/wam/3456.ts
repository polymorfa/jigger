export const WamOrderDetailsActionsSmb = 3456 as const

export interface OrderDetailsActionsSmbEvent {
  /** field 1, wire `accepted_pay_methods` */
  acceptedPayMethods?: string
  /** field 2, wire `action_category` */
  actionCategory?: string
  /** field 3, wire `extra_attributes` */
  extraAttributes?: string
  /** field 4, wire `has_added_price` */
  hasAddedPrice?: boolean
  /** field 5, wire `has_catalog` */
  hasCatalog?: boolean
  /** field 6, wire `has_note` */
  hasNote?: boolean
  /** field 7, wire `order_detail_entry_point` */
  orderDetailEntryPoint?: string
  /** field 8, wire `order_details_creation_action` */
  orderDetailsCreationAction?: ORDERDETAILSCREATIONACTION
  /** field 9, wire `payment_status` */
  paymentStatus?: boolean
  /** field 10, wire `payment_type` */
  paymentType?: string
  /** field 11, wire `order_eligible_to_send` */
  orderEligibleToSend?: boolean
  /** field 12, wire `sharing_order_status_events` */
  sharingOrderStatusEvents?: boolean
  /** field 13, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 14, wire `last_message_direction` */
  lastMessageDirection?: LASTMESSAGEDIRECTION
  /** field 15, wire `message_depth` */
  messageDepth?: number
  /** field 16, wire `thread_id_hmac` */
  threadIdHmac?: string
}