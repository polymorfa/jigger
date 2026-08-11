export const WamMdAppStateSyncMutationStats = 3180 as const

export interface MdAppStateSyncMutationStatsEvent {
  /** field 1, wire `applied` */
  applied?: MUTATIONCOUNTBUCKET
  /** field 2, wire `failed` */
  failed?: MUTATIONCOUNTBUCKET
  /** field 3, wire `invalid` */
  invalid?: MUTATIONCOUNTBUCKET
  /** field 4, wire `orphan` */
  orphan?: MUTATIONCOUNTBUCKET
  /** field 5, wire `syncd_action` */
  syncdAction?: string
  /** field 6, wire `unsupported` */
  unsupported?: MUTATIONCOUNTBUCKET
}