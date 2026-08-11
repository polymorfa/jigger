export const WamWebcFtsStorage = 3642 as const

export interface WebcFtsStorageEvent {
  /** field 1, wire `fts_total_size` */
  ftsTotalSize?: number
}