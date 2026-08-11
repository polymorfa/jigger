export const WamMdAppStateSyncDaily = 2300 as const

export interface MdAppStateSyncDailyEvent {
  /** field 1, wire `mutation_count` */
  mutationCount?: number
  /** field 4, wire `invalid_action_count` */
  invalidActionCount?: number
  /** field 5, wire `unsupported_action_count` */
  unsupportedActionCount?: number
  /** field 7, wire `stored_mutation_count` */
  storedMutationCount?: number
  /** field 8, wire `unset_action_count` */
  unsetActionCount?: number
  /** field 9, wire `missing_key_count` */
  missingKeyCount?: number
  /** field 10, wire `upload_conflict_count` */
  uploadConflictCount?: number
  /** field 11, wire `cross_index_conflict_count` */
  crossIndexConflictCount?: number
  /** field 12, wire `key_rotation_remove_count` */
  keyRotationRemoveCount?: number
}