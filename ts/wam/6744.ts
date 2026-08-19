export const WamMmCollectionWindowStateEvent = 6744 as const

export interface MmCollectionWindowStateEventEvent {
  /** field 1, wire `business_lid_or_jid` */
  businessLidOrJid?: string
  /** field 2, wire `mm_has_disclosed_token` */
  mmHasDisclosedToken?: boolean
  /** field 3, wire `mm_has_disclosed_url` */
  mmHasDisclosedUrl?: boolean
  /** field 4, wire `mm_has_show_disclosure_flag` */
  mmHasShowDisclosureFlag?: boolean
  /** field 5, wire `template_id` */
  templateId?: string
  /** field 6, wire `mm_disclosure_flags` */
  mmDisclosureFlags?: number
  /** field 7, wire `ent_source_subplatform` */
  entSourceSubplatform?: string
  /** field 8, wire `is_user_disclosed` */
  isUserDisclosed?: boolean
  /** field 9, wire `mm_has_undisclosed_token` */
  mmHasUndisclosedToken?: boolean
}