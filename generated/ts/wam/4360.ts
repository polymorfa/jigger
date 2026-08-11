export const WamWhatsappQuickPromotionClientEligibilityWaterfall = 4360 as const

export interface WhatsappQuickPromotionClientEligibilityWaterfallEvent {
  /** field 1, wire `eligibility_status` */
  eligibilityStatus?: boolean
  /** field 2, wire `promotion_id` */
  promotionId?: string
  /** field 3, wire `qp_failure_reason` */
  qpFailureReason?: string
  /** field 4, wire `step` */
  step?: string
  /** field 5, wire `instance_log_data` */
  instanceLogData?: string
  /** field 6, wire `client_extra_data` */
  clientExtraData?: string
}