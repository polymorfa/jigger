export const WamMdAppStateKeyRotation = 2518 as const

export interface MdAppStateKeyRotationEvent {
  /** field 1, wire `md_app_state_key_rotation_reason` */
  mdAppStateKeyRotationReason?: MDAPPSTATEKEYROTATIONREASONCODE
  /** field 2, wire `app_session_id` */
  appSessionId?: string
  /** field 3, wire `companion_session_ids` */
  companionSessionIds?: string
  /** field 6, wire `old_syncd_keyhash` */
  oldSyncdKeyhash?: string
  /** field 7, wire `old_syncd_keyid` */
  oldSyncdKeyid?: string
  /** field 8, wire `seq_number` */
  seqNumber?: number
  /** field 9, wire `syncd_keyhash_after_rotation` */
  syncdKeyhashAfterRotation?: string
  /** field 10, wire `syncd_keyid_after_rotation` */
  syncdKeyidAfterRotation?: string
}