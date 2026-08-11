export const WamNewsletterEnforcementEvents = 7112 as const

export interface NewsletterEnforcementEventsEvent {
  /** field 1, wire `cid` */
  cid?: string
  /** field 2, wire `enforcement_interaction_event` */
  enforcementInteractionEvent?: ENFORCEMENTINTERACTIONEVENT
  /** field 3, wire `enforcement_type` */
  enforcementType?: ENFORCEMENTTYPE
  /** field 4, wire `interaction_entry_point` */
  interactionEntryPoint?: INTERACTIONENTRYPOINT
  /** field 5, wire `interaction_surface` */
  interactionSurface?: INTERACTIONSURFACE
  /** field 6, wire `newsletter_enforcement_session_id` */
  newsletterEnforcementSessionId?: number
  /** field 7, wire `violation_category` */
  violationCategory?: string
}