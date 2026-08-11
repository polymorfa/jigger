export const WamWebcMediaAnalyzed = 912 as const

export interface WebcMediaAnalyzedEvent {
  /** field 1, wire `webc_media_supported` */
  webcMediaSupported?: boolean
  /** field 2, wire `webc_media_extensions` */
  webcMediaExtensions?: string
  /** field 3, wire `webc_media_analyze_t` */
  webcMediaAnalyzeT?: string
}