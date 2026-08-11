export const WamMdSyncdMutation = 5970 as const

export interface MdSyncdMutationEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `companion_session_ids` */
  companionSessionIds?: string
  /** field 3, wire `content_length` */
  contentLength?: number
  /** field 4, wire `is_in_bootstrap` */
  isInBootstrap?: boolean
  /** field 5, wire `is_using_lid` */
  isUsingLid?: boolean
  /** field 6, wire `mutation_bundle` */
  mutationBundle?: MUTATIONBUNDLETYPE
  /** field 7, wire `mutation_direction` */
  mutationDirection?: MUTATIONDIRECTIONTYPE
  /** field 8, wire `mutation_mac` */
  mutationMac?: string
  /** field 9, wire `mutation_name` */
  mutationName?: string
  /** field 10, wire `mutation_operation` */
  mutationOperation?: MUTATIONOPERATIONTYPE
  /** field 11, wire `seq_number` */
  seqNumber?: number
  /** field 12, wire `syncd_collection` */
  syncdCollection?: SYNCDCOLLECTIONTYPE
  /** field 13, wire `syncd_keyhash` */
  syncdKeyhash?: string
  /** field 14, wire `syncd_keyid` */
  syncdKeyid?: string
  /** field 15, wire `patch_mac` */
  patchMac?: string
}