export const WamMmDisclosureStateFsEvent = 6796 as const

export interface MmDisclosureStateFsEventEvent {
  /** field 1, wire `disclosure_event_type` */
  disclosureEventType?: DISCLOSUREEVENTTYPE
  /** field 2, wire `disclosure_interaction` */
  disclosureInteraction?: DISCLOSUREINTERACTION
  /** field 3, wire `disclosure_source` */
  disclosureSource?: DISCLOSURESOURCE
  /** field 4, wire `disclosure_suppression_reason` */
  disclosureSuppressionReason?: DISCLOSURESUPPRESSIONREASON
  /** field 5, wire `disclosure_surface` */
  disclosureSurface?: DISCLOSURESURFACE
  /** field 6, wire `is_companion_device` */
  isCompanionDevice?: boolean
  /** field 7, wire `is_user_disclosed` */
  isUserDisclosed?: boolean
  /** field 8, wire `mm_has_disclosed_url` */
  mmHasDisclosedUrl?: boolean
  /** field 9, wire `mm_has_show_disclosure_flag` */
  mmHasShowDisclosureFlag?: boolean
  /** field 10, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 11, wire `user_became_disclosed` */
  userBecameDisclosed?: boolean
  /** field 12, wire `mm_disclosure_flags` */
  mmDisclosureFlags?: number
}