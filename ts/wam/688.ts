export const WamWebcResourceLoad = 688 as const

export interface WebcResourceLoadEvent {
  /** field 1, wire `webc_resource_name` */
  webcResourceName?: string
  /** field 2, wire `webc_resource_duration` */
  webcResourceDuration?: string
  /** field 3, wire `webc_resource_cached` */
  webcResourceCached?: boolean
}