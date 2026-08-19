export const WamWebcMediaLoad = 1202 as const

export interface WebcMediaLoadEvent {
  /** field 1, wire `webc_media_load_t` */
  webcMediaLoadT?: string
  /** field 2, wire `webc_media_load_result` */
  webcMediaLoadResult?: WEBCMEDIALOADRESULTCODE
}