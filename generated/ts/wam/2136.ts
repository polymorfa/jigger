export const WamDeepLinkOpen = 2136 as const

export interface DeepLinkOpenEvent {
  /** field 2, wire `deep_link_open_from` */
  deepLinkOpenFrom?: DEEPLINKOPENFROM
  /** field 3, wire `deep_link_type` */
  deepLinkType?: DEEPLINKTYPE
  /** field 4, wire `is_contact` */
  isContact?: boolean
  /** field 5, wire `link_owner_type` */
  linkOwnerType?: OWNERTYPE
  /** field 6, wire `deep_link_session_id` */
  deepLinkSessionId?: string
  /** field 7, wire `source_surface` */
  sourceSurface?: number
  /** field 8, wire `campaign` */
  campaign?: string
  /** field 9, wire `failure_reason` */
  failureReason?: string
}