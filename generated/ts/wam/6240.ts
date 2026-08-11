export const WamPsGroupSafetyCheckSheetSeen = 6240 as const

export interface PsGroupSafetyCheckSheetSeenEvent {
  /** field 1, wire `ps_safety_check_group_jid` */
  psSafetyCheckGroupJid?: string
  /** field 2, wire `integrity_group_user_hashed_id` */
  integrityGroupUserHashedId?: string
}