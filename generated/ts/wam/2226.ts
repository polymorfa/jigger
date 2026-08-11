export const WamWebcProgressiveImage = 2226 as const

export interface WebcProgressiveImageEvent {
  /** field 1, wire `webc_first_render_scans` */
  webcFirstRenderScans?: number
  /** field 2, wire `webc_first_render_t` */
  webcFirstRenderT?: string
  /** field 3, wire `webc_mid_quality_t` */
  webcMidQualityT?: string
  /** field 4, wire `webc_full_quality_t` */
  webcFullQualityT?: string
}