export const WamTsBitArray = 4332 as const

export interface TsBitArrayEvent {
  /** field 1, wire `bitarray_high` */
  bitarrayHigh?: number
  /** field 2, wire `bitarray_length` */
  bitarrayLength?: number
  /** field 3, wire `bitarray_low` */
  bitarrayLow?: number
  /** field 4, wire `cumulative_bits` */
  cumulativeBits?: number
  /** field 5, wire `relative_timestamp_ms` */
  relativeTimestampMs?: number
  /** field 6, wire `session_seq` */
  sessionSeq?: number
  /** field 7, wire `ts_session_id` */
  tsSessionId?: number
  /** field 8, wire `ts_timestamp_ms` */
  tsTimestampMs?: number
  /** field 9, wire `unified_session_id` */
  unifiedSessionId?: string
}