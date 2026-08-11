export const WamWaPlusBenefitUserJourney = 7896 as const

export interface WaPlusBenefitUserJourneyEvent {
  /** field 1, wire `wpbuj_action` */
  wpbujAction?: WPBUJACTION
  /** field 2, wire `wpbuj_benefit_status` */
  wpbujBenefitStatus?: WPBUJBENEFITSTATUS
  /** field 3, wire `wpbuj_benefit_type` */
  wpbujBenefitType?: WPBUJBENEFITTYPE
  /** field 4, wire `wpbuj_custom_fields` */
  wpbujCustomFields?: string
  /** field 5, wire `wpbuj_error_message` */
  wpbujErrorMessage?: string
  /** field 6, wire `wpbuj_outcome_name` */
  wpbujOutcomeName?: WPBUJOUTCOMENAME
  /** field 7, wire `wpbuj_session_id` */
  wpbujSessionId?: string
  /** field 8, wire `wpbuj_source` */
  wpbujSource?: WPBUJSOURCE
  /** field 9, wire `wpbuj_surface` */
  wpbujSurface?: WPBUJSURFACE
  /** field 10, wire `wsua_product_type` */
  wsuaProductType?: WSUAPRODUCTTYPE
  /** field 11, wire `wpbuj_action_target` */
  wpbujActionTarget?: string
}