export const WamMmDisclosureStateEvent = 6552 as const

export interface MmDisclosureStateEventEvent {
  /** field 1, wire `business_lid_or_jid` */
  businessLidOrJid?: string
  /** field 3, wire `disclosure_event_type` */
  disclosureEventType?: DISCLOSUREEVENTTYPE
  /** field 4, wire `disclosure_interaction` */
  disclosureInteraction?: DISCLOSUREINTERACTION
  /** field 5, wire `disclosure_source` */
  disclosureSource?: DISCLOSURESOURCE
  /** field 6, wire `disclosure_suppression_reason` */
  disclosureSuppressionReason?: DISCLOSURESUPPRESSIONREASON
  /** field 7, wire `disclosure_surface` */
  disclosureSurface?: DISCLOSURESURFACE
  /** field 8, wire `is_user_disclosed` */
  isUserDisclosed?: boolean
  /** field 9, wire `mm_has_disclosed_url` */
  mmHasDisclosedUrl?: boolean
  /** field 10, wire `mm_has_show_disclosure_flag` */
  mmHasShowDisclosureFlag?: boolean
  /** field 11, wire `template_id` */
  templateId?: string
  /** field 13, wire `user_became_disclosed` */
  userBecameDisclosed?: boolean
  /** field 14, wire `is_companion_device` */
  isCompanionDevice?: boolean
  /** field 15, wire `delta_time_received` */
  deltaTimeReceived?: number
  /** field 16, wire `ent_source_subplatform` */
  entSourceSubplatform?: string
  /** field 18, wire `is_network_available` */
  isNetworkAvailable?: boolean
  /** field 19, wire `mm_disclosure_flags` */
  mmDisclosureFlags?: number
}