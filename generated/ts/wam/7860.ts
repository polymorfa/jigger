export const WamMmSignalRealtimeWeb = 7860 as const

export interface MmSignalRealtimeWebEvent {
  /** field 1, wire `mm_carousel_card_index` */
  mmCarouselCardIndex?: number
  /** field 2, wire `mm_cta_button_index` */
  mmCtaButtonIndex?: number
  /** field 3, wire `mm_signal_data` */
  mmSignalData?: string
  /** field 4, wire `mm_signal_type` */
  mmSignalType?: MMSIGNALTYPE
}