export const WamMdSyncdMutationsSummary = 6302 as const

export interface MdSyncdMutationsSummaryEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `companion_session_ids` */
  companionSessionIds?: string
  /** field 3, wire `is_in_bootstrap` */
  isInBootstrap?: boolean
  /** field 4, wire `lid_mutations` */
  lidMutations?: string
  /** field 5, wire `mutation_bundle` */
  mutationBundle?: MUTATIONBUNDLETYPE
  /** field 6, wire `mutation_direction` */
  mutationDirection?: MUTATIONDIRECTIONTYPE
  /** field 7, wire `patch_mac` */
  patchMac?: string
  /** field 8, wire `remove_mutations` */
  removeMutations?: string
  /** field 9, wire `seq_number` */
  seqNumber?: number
  /** field 10, wire `set_mutations` */
  setMutations?: string
  /** field 11, wire `snapshot_mac` */
  snapshotMac?: string
  /** field 12, wire `syncd_collection` */
  syncdCollection?: SYNCDCOLLECTIONTYPE
  /** field 13, wire `syncd_keyid_keyhash` */
  syncdKeyidKeyhash?: string
}