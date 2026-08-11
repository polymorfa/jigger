export const WamSubscriptionUserAction = 7458 as const

export interface SubscriptionUserActionEvent {
  /** field 1, wire `wsua_action` */
  wsuaAction?: WSUAACTION
  /** field 2, wire `wsua_action_target` */
  wsuaActionTarget?: WSUAACTIONTARGET
  /** field 3, wire `wsua_product_type` */
  wsuaProductType?: WSUAPRODUCTTYPE
  /** field 4, wire `wsua_quick_promotion_id` */
  wsuaQuickPromotionId?: string
  /** field 5, wire `wsua_referral` */
  wsuaReferral?: WSUAREFERRAL
  /** field 6, wire `wsua_screen` */
  wsuaScreen?: WSUASCREEN
  /** field 7, wire `wsua_screen_element` */
  wsuaScreenElement?: WSUASCREENELEMENT
  /** field 8, wire `wsua_session_id` */
  wsuaSessionId?: string
  /** field 9, wire `wsua_benefits_shown` */
  wsuaBenefitsShown?: string
  /** field 10, wire `wsua_active_subscriptions` */
  wsuaActiveSubscriptions?: string
  /** field 11, wire `wsua_benefit_group` */
  wsuaBenefitGroup?: string
  /** field 12, wire `wsua_tier` */
  wsuaTier?: WSUATIER
}