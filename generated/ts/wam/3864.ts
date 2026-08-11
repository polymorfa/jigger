export const WamWebcLinkPreviewDisplay = 3864 as const

export interface WebcLinkPreviewDisplayEvent {
  /** field 1, wire `webc_display_status` */
  webcDisplayStatus?: WEBCDISPLAYSTATUSTYPE
  /** field 2, wire `did_fallback_non_hq` */
  didFallbackNonHq?: boolean
  /** field 3, wire `did_request_hq` */
  didRequestHq?: boolean
  /** field 4, wire `did_respond_hq_preview` */
  didRespondHqPreview?: boolean
}