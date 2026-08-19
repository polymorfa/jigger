export const WamMerchantCommerceEvent = 4688 as const

export interface MerchantCommerceEventEvent {
  /** field 1, wire `accepted_payment_methods` */
  acceptedPaymentMethods?: string
  /** field 2, wire `ad_id` */
  adId?: string
  /** field 3, wire `app_session_id` */
  appSessionId?: string
  /** field 4, wire `biz_platform` */
  bizPlatform?: BIZPLATFORM
  /** field 6, wire `commerce_experience` */
  commerceExperience?: string
  /** field 7, wire `commerce_interaction_action` */
  commerceInteractionAction?: string
  /** field 8, wire `commerce_payment_status` */
  commercePaymentStatus?: string
  /** field 9, wire `commerce_session_id` */
  commerceSessionId?: string
  /** field 10, wire `commerce_surface` */
  commerceSurface?: string
  /** field 11, wire `extra_attributes` */
  extraAttributes?: string
  /** field 12, wire `is_ctwa_originated` */
  isCtwaOriginated?: boolean
  /** field 13, wire `is_eligible_for_ad_signal` */
  isEligibleForAdSignal?: boolean
  /** field 14, wire `merchant_has_catalog` */
  merchantHasCatalog?: boolean
  /** field 15, wire `merchant_is_discoverable` */
  merchantIsDiscoverable?: boolean
  /** field 17, wire `p2m_flow` */
  p2mFlow?: string
  /** field 18, wire `referral` */
  referral?: string
  /** field 19, wire `sequence_id` */
  sequenceId?: number
  /** field 20, wire `commerce_flow_id` */
  commerceFlowId?: string
  /** field 21, wire `commerce_interaction_action_type` */
  commerceInteractionActionType?: string
  /** field 22, wire `commerce_order_status` */
  commerceOrderStatus?: string
}