export const WamMdSyncdBundle = 5966 as const

export interface MdSyncdBundleEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `bundle_version` */
  bundleVersion?: number
  /** field 3, wire `companion_session_ids` */
  companionSessionIds?: string
  /** field 4, wire `computed_lthash` */
  computedLthash?: string
  /** field 5, wire `expected_mac` */
  expectedMac?: string
  /** field 6, wire `mutation_bundle` */
  mutationBundle?: MUTATIONBUNDLETYPE
  /** field 7, wire `mutation_direction` */
  mutationDirection?: MUTATIONDIRECTIONTYPE
  /** field 8, wire `patch_mac` */
  patchMac?: string
  /** field 9, wire `patch_size` */
  patchSize?: number
  /** field 10, wire `processing_error_message` */
  processingErrorMessage?: string
  /** field 11, wire `seq_number` */
  seqNumber?: number
  /** field 12, wire `snapshot_mac` */
  snapshotMac?: string
  /** field 13, wire `snapshot_size` */
  snapshotSize?: number
  /** field 14, wire `syncd_collection` */
  syncdCollection?: SYNCDCOLLECTIONTYPE
  /** field 15, wire `syncd_keyhash` */
  syncdKeyhash?: string
  /** field 16, wire `syncd_keyid` */
  syncdKeyid?: string
  /** field 17, wire `kmp_syncd_flow` */
  kmpSyncdFlow?: KMPSYNCDFLOWENUM
}