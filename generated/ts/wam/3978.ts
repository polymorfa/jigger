export const WamSyncdKeyCount = 3978 as const

export interface SyncdKeyCountEvent {
  /** field 1, wire `keys_used_in_snapshot_count` */
  keysUsedInSnapshotCount?: number
  /** field 2, wire `p80_muations_per_key` */
  p80MuationsPerKey?: number
  /** field 3, wire `p95_muations_per_key` */
  p95MuationsPerKey?: number
  /** field 4, wire `syncd_session_length_days` */
  syncdSessionLengthDays?: number
  /** field 5, wire `total_key_count` */
  totalKeyCount?: number
}