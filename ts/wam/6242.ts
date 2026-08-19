export const WamPsGroupSafetyCheckUiInteractions = 6242 as const

export interface PsGroupSafetyCheckUiInteractionsEvent {
  /** field 1, wire `ps_safety_check_group_jid` */
  psSafetyCheckGroupJid?: string
  /** field 2, wire `ps_safety_check_interaction` */
  psSafetyCheckInteraction?: PSGROUPSAFETYCHECKUIINTERACTIONS
  /** field 3, wire `integrity_group_user_hashed_id` */
  integrityGroupUserHashedId?: string
}