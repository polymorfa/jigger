export const WamWebcPwaEvent = 4116 as const

export interface WebcPwaEventEvent {
  /** field 2, wire `webc_pwa_action` */
  webcPwaAction?: WEBCPWAACTIONTYPE
}