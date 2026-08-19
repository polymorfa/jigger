export const WamWebcButterbarEvent = 3932 as const

export interface WebcButterbarEventEvent {
  /** field 1, wire `webc_butterbar_action` */
  webcButterbarAction?: WEBCBUTTERBARACTIONTYPE
  /** field 2, wire `webc_butterbar_type` */
  webcButterbarType?: WEBCBUTTERBARBBTYPE
}