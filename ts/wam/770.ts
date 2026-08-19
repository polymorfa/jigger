export const WamWebcStreamModeChange = 770 as const

export interface WebcStreamModeChangeEvent {
  /** field 1, wire `webc_stream_mode` */
  webcStreamMode?: WEBCSTREAMMODECODE
}