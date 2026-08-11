export const WamWebcWhatsNewImpression = 8200 as const

export interface WebcWhatsNewImpressionEvent {
  /** field 1, wire `webc_whats_new_action` */
  webcWhatsNewAction?: WEBCWHATSNEWACTIONTYPE
  /** field 2, wire `webc_whats_new_surface` */
  webcWhatsNewSurface?: WEBCWHATSNEWSURFACETYPE
  /** field 3, wire `webc_whats_new_time_spent` */
  webcWhatsNewTimeSpent?: string
  /** field 4, wire `webc_whats_new_variant` */
  webcWhatsNewVariant?: number
}