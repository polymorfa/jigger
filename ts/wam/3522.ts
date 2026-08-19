export const WamPrivacyHighlightDaily = 3522 as const

export interface PrivacyHighlightDailyEvent {
  /** field 1, wire `dialog_appear_count` */
  dialogAppearCount?: number
  /** field 2, wire `dialog_select_count` */
  dialogSelectCount?: number
  /** field 3, wire `narrative_appear_count` */
  narrativeAppearCount?: number
  /** field 4, wire `privacy_highlight_category` */
  privacyHighlightCategory?: PRIVACYHIGHLIGHTCATEGORYENUM
  /** field 5, wire `privacy_highlight_surface` */
  privacyHighlightSurface?: PRIVACYHIGHLIGHTSURFACEENUM
}