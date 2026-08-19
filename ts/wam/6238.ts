export const WamPsGroupSafetyCheckEnabled = 6238 as const

export interface PsGroupSafetyCheckEnabledEvent {
  /** field 1, wire `ps_safety_check_group_jid` */
  psSafetyCheckGroupJid?: string
  /** field 2, wire `ps_was_safety_check_group_initially_muted` */
  psWasSafetyCheckGroupInitiallyMuted?: boolean
  /** field 3, wire `did_join_by_gil` */
  didJoinByGil?: boolean
  /** field 4, wire `integrity_group_user_hashed_id` */
  integrityGroupUserHashedId?: string
  /** field 5, wire `was_added_by_contact` */
  wasAddedByContact?: boolean
  /** field 6, wire `will_safety_check_be_seen` */
  willSafetyCheckBeSeen?: boolean
}