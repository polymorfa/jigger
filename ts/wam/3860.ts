export const WamWebcLinkPreviewResponseHandle = 3860 as const

export interface WebcLinkPreviewResponseHandleEvent {
  /** field 2, wire `is_preview_success` */
  isPreviewSuccess?: boolean
  /** field 3, wire `preview_session_id` */
  previewSessionId?: string
  /** field 4, wire `preview_duration_ms` */
  previewDurationMs?: number
  /** field 5, wire `did_respond_hq_preview` */
  didRespondHqPreview?: boolean
}